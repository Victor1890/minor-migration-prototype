import { useState, useCallback, useMemo } from "react";
import { STEPS } from "@/data/steps";

/**
 * Interface for form data structure
 */
interface IFormData {
  has_minor_stayed_more_than_6_months: string;
  status_migration_minor: string;
  case_of_minor: string;
  [key: string]: string;
}

/**
 * A custom hook that manages multi-step form navigation and state.
 *
 * @returns An object with form navigation state and methods to control form flow
 */
export function useFormNavigation() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [formData, setFormData] = useState<IFormData>({
    has_minor_stayed_more_than_6_months: "",
    status_migration_minor: "",
    case_of_minor: "",
  });

  /**
   * Memoized current step object from the form configuration
   */
  const currentStep = useMemo(
    () => STEPS[currentStepIndex],
    [currentStepIndex]
  );

  /**
   * Boolean indicating if the current step is the first step
   */
  const isFirstStep = useMemo(() => currentStepIndex === 0, [currentStepIndex]);

  /**
   * Boolean indicating if the current step is the last step
   */
  const isLastStep = useMemo(
    () => currentStepIndex === STEPS.length - 1,
    [currentStepIndex]
  );

  /**
   * Updates the form data by merging new data with existing data
   *
   * @param data - New form data to merge with existing data
   */
  const updateFormData = useCallback(
    (data: Record<string, string>) => {
      setFormData((prev) => {
        const newData: IFormData = { ...prev };
        Object.keys(data).forEach((key) => {
          newData[key] = data[key];
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
  const markStepAsCompleted = useCallback(
    (stepIndex: number) => {
      setCompletedSteps((prev) => {
        if (prev.includes(stepIndex)) return prev;
        return [...prev, stepIndex].sort((a, b) => a - b);
      });
    },
    [setCompletedSteps]
  );

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
    setFormData({
      has_minor_stayed_more_than_6_months: "",
      status_migration_minor: "",
      case_of_minor: "",
    });
    setCurrentStepIndex(0);
    setCompletedSteps([]);

    return true;
  }, [currentStepIndex, formData, markStepAsCompleted]);

  const clearFormData = useCallback(() => {
    setFormData({
      has_minor_stayed_more_than_6_months: "",
      status_migration_minor: "",
      case_of_minor: "",
    });
    setCurrentStepIndex(0);
    setCompletedSteps([]);
  }, []);

  return {
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
    clearFormData,
  };
}
