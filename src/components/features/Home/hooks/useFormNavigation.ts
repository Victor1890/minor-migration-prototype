import { useState, useCallback, useMemo } from 'react'
import { STEPS as _STEPS, } from '@/data/steps'
import { MinorStayedOver6Months } from '@/data/steps/MinorStayedOver6Months';

/**
 * Interface for form data structure
 */
export interface IFormData {
    status_migration_minor: string;
    special_conditions_present: string;
    status_traveling_minor: string;
    minor_stayed_over_6_months: string;
    [key: string]: string;
}

type DecisionType = "SHOW_NEXT" | "STEP_NOT_FOUND";

const SPECIAL_CONDITION_NOT_ALLOWED = [
    "menor-tiene-un-solo-apellido-y-viaja-con-su-madre",
    "viaja-con-uno-de-sus-padres-y-el-otro-ha-fallecido"
]

function getNextStepDecision(payload: IFormData): DecisionType {
    if (SPECIAL_CONDITION_NOT_ALLOWED.includes(payload.special_conditions_present)) {
        return "STEP_NOT_FOUND";
    }
    if (payload.status_migration_minor === "nacionalidad-dominicana-unicamente") {
        if (payload.status_traveling_minor === "both-parents") {
            return "STEP_NOT_FOUND";
        } else if (payload.status_traveling_minor === "one-parent-or-other-person") {
            return "SHOW_NEXT";
        }
    }

    if (payload.status_migration_minor === 'doble-nacionalidad-o-residencia-extranjero') {
        if (payload.minor_stayed_over_6_months === "less-than-6-months") {
            return 'STEP_NOT_FOUND'
        } else if (payload.minor_stayed_over_6_months === "more-than-6-months") {
            if (payload.status_traveling_minor === "less-than-6-months") {
                return "STEP_NOT_FOUND";
            }
            return 'SHOW_NEXT'
        }
    }
    if (payload.status_migration_minor === 'es-extranjero-residencia-republica-dominicana') {
        if (payload.minor_stayed_over_6_months === "less-than-6-months") {
            return 'STEP_NOT_FOUND'
        } else if (payload.minor_stayed_over_6_months === "more-than-6-months") {
            return 'SHOW_NEXT'
        }
    }
    if (payload.status_migration_minor === 'estatus-migratorio-no-residente') {
        return 'STEP_NOT_FOUND'
    }

    return "SHOW_NEXT";
}

/**
 * A custom hook that manages multi-step form navigation and state.
 * 
 * @returns An object with form navigation state and methods to control form flow
 */
export function useFormNavigation() {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);
    const [formData, setFormData] = useState<IFormData | null>(null);

    const STEPS = useMemo(() => {
        const steps = [..._STEPS];

        console.log("formData?.status_migration_minor: ", formData?.status_migration_minor)

        if (formData?.status_migration_minor === "minor-children-international-organizations") {
            // give the first and last element in this array

            return [
                steps[0],
                steps[steps.length - 1]
            ]
        }

        if (formData?.status_migration_minor === "nacionalidad-dominicana-unicamente") {
            return steps;
        }
        steps.splice(1, 0, {
            title: "¿El menor ha permanecido más de 6 meses en el país?",
            description: "Menores con doble nacionalidad o residencia no necesitan permiso si llevan menos de seis meses en el país desde su última entrada.",
            component: MinorStayedOver6Months as any,
            message: "El tiempo que el menor ha estado en República Dominicana influye en si necesita o no un permiso de salida. Verifica el sello de entrada en el pasaporte o el historial migratorio del menor para confirmar cuántos meses han pasado desde su última entrada al país."
        });


        return steps;
    }, [formData?.status_migration_minor, _STEPS]);

    /**
     * Memoized current step object from the form configuration
     */
    const currentStep = useMemo(
        () => STEPS[currentStepIndex],
        [currentStepIndex, STEPS]
    );



    /**
     * Boolean indicating if the current step is the first step
     */
    const isFirstStep = useMemo(
        () => currentStepIndex === 0,
        [currentStepIndex]
    );

    /**
     * Boolean indicating if the current step is the last step
     */
    const isLastStep = useMemo(
        () => currentStepIndex === STEPS.length - 1,
        [currentStepIndex, STEPS]
    );

    const shouldShowStepNotFound = useMemo(() => {
        console.log("formData: ", formData)
        if (!formData) return false;

        const decision = getNextStepDecision(formData);
        return decision === "STEP_NOT_FOUND";
    }, [formData]);

    /**
     * Updates the form data by merging new data with existing data
     * 
     * @param data - New form data to merge with existing data
     */
    const updateFormData = useCallback(
        (data: Partial<IFormData>) => {
            setFormData((prev) => {
                const newData: IFormData = {
                    status_migration_minor: prev?.status_migration_minor ?? "",
                    status_traveling_minor: prev?.status_traveling_minor ?? "",
                    special_conditions_present: prev?.special_conditions_present ?? "",
                    minor_stayed_over_6_months: prev?.minor_stayed_over_6_months ?? "",
                    ...prev,
                };
                Object.keys(data).forEach(key => {
                    newData[key] = data?.[key] || "";
                });
                return newData;
            });
        },
        [setFormData]
    );

    /**
     * Marks a step as completed in the form flow
     * 
     * @param stepIndex - The index of the step to mark as completed
     */
    const markStepAsCompleted = useCallback((stepIndex: number) => {
        setCompletedSteps(prev => {
            if (prev.includes(stepIndex)) return prev;
            return [...prev, stepIndex].sort((a, b) => a - b);
        })
    }, [setCompletedSteps])

    /**
     * Navigates to the next step in the form flow if available
     * Also marks the current step as completed
     * 
     * @returns true if navigation was successful, false if already at the last step
     */
    const goToNextStep = useCallback(() => {
        if (currentStepIndex < STEPS.length - 1) {
            markStepAsCompleted(currentStepIndex);
            setCurrentStepIndex((prev) => prev + 1);
            return true;
        }
        return false;
    }, [currentStepIndex, markStepAsCompleted]);

    /**
     * Navigates to the previous step in the form flow if available
     * 
     * @returns true if navigation was successful, false if already at the first step
     */
    const goToPreviousStep = useCallback(() => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex((prev) => prev - 1);
            return true;
        }
        return false;
    }, [currentStepIndex]);

    /**
     * Navigates to a specific step in the form flow
     * Only allows navigation to steps that are completed, the first step,
     * or steps that come immediately after a completed step
     * 
     * @param stepIndex - The index of the step to navigate to
     * @returns true if navigation was successful, false if navigation conditions weren't met
     */
    const goToStep = useCallback(
        (stepIndex: number) => {
            if (
                stepIndex >= 0 &&
                stepIndex < STEPS.length &&
                (completedSteps.includes(stepIndex) ||
                    stepIndex === 0 ||
                    completedSteps.includes(stepIndex - 1))
            ) {
                setCurrentStepIndex(stepIndex);
                return true;
            }
            return false;
        },
        [completedSteps]
    );

    /**
     * Handles form submission, marks the final step as completed,
     * and resets the form state
     * 
     * @returns true after the form is successfully submitted and reset
     */
    const handleSubmitForm = useCallback(() => {
        markStepAsCompleted(currentStepIndex);

        console.log("Submitting form data:", formData);

        // Reset the form data if needed
        clearFormData();

        return true;
    }, [currentStepIndex, formData, markStepAsCompleted]);

    const clearFormData = useCallback(() => {
        setFormData(null);
        setCurrentStepIndex(0);
        setCompletedSteps([]);
    }, [setFormData, setCurrentStepIndex, setCompletedSteps]);

    return {
        shouldShowStepNotFound,
        currentStepIndex,
        completedSteps,
        formData,
        currentStep,
        isFirstStep,
        isLastStep,
        updateFormData,
        goToNextStep,
        goToPreviousStep,
        goToStep,
        handleSubmitForm,
        clearFormData
    };
}