import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Info } from "lucide-react";

export function Documentation() {
  return (
    <Card className="border-0 shadow-none">
      <CardContent className="p-0 space-y-8">
        {/* Required documents section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Documentos obligatorios</h2>

          <ol className="space-y-4 list-decimal list-outside ml-5">
            <li>
              <p className="font-semibold text-[18px]">Autorización de viaje</p>
              <ul className="list-disc list-outside ml-5 text-muted-foreground space-y-1 text-base">
                <li>
                  Emitida por el Tribunal de Niños, Niñas y Adolescentes
                  autorizando la salida del menor, legalizada por la
                  Procuraduría General de la República.
                </li>
                <li>
                  En caso de que el padre, madre o tutor tenga la guarda o
                  custodia del menor con autorización de viaje o para residir
                  fuera del país otorgada por el Tribunal, puede presentarla en
                  lugar de la autorización de viaje.
                </li>
              </ul>
            </li>

            <li>
              <p className="font-semibold text-[18px]">
                Acta de nacimiento del menor
              </p>
              <ul className="list-disc list-outside ml-5 text-base text-muted-foreground space-y-1">
                <li>Inextensa y con código QR.</li>
              </ul>
            </li>

            <li>
              <p className="font-semibold text-[18px]">
                Foto del pasaporte del menor
              </p>
              <ul className="list-disc list-outside ml-5 text-base text-muted-foreground space-y-1">
                <li>Una foto de la página principal con los datos.</li>
              </ul>
            </li>

            <li>
              <p className="font-semibold text-[18px]">
                Foto del pasaporte del acompañante
              </p>
              <ul className="list-disc list-outside ml-5 text-base text-muted-foreground space-y-1">
                <li>
                  Si el menor viaja con un tercero, se requiere una foto de la
                  página principal con los datos.
                </li>
              </ul>
            </li>

            <li>
              <p className="font-semibold text-[18px]">
                Foto de la cédula de identidad del padre, madre o tutor que
                realiza la solicitud
              </p>
              <ul className="list-disc list-outside ml-5 text-base text-muted-foreground space-y-1">
                <li>
                  Si es extranjero, debe incluir un documento de identidad con
                  sus datos.
                </li>
              </ul>
            </li>

            <li>
              <p className="font-semibold text-[18px]">
                Fotografía 2x2 del menor
              </p>
              <ul className="list-disc list-outside ml-5 text-base text-muted-foreground space-y-1">
                <li>De frente y reciente.</li>
              </ul>
            </li>

            <li>
              <p className="font-semibold text-[18px]">Comprobante de pago</p>
              <ul className="list-disc list-outside ml-5 text-base text-muted-foreground space-y-1">
                <li>
                  Puede realizarse en línea con tarjeta de débito, crédito o
                  presencial en BanReservas a nombre del padre, madre o tutor.
                </li>
              </ul>
            </li>
          </ol>
        </div>

        {/* divider */}

        <hr></hr>

        {/* Steps section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Pasos para solicitar el permiso
          </h2>

          <ol className="space-y-6 list-decimal list-outside ml-5">
            <li>
              <p className="font-semibold text-[18px]">
                Para obtener la autorización de viaje del Tribunal se debe:
              </p>

              {/* Important alert */}
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-6">
                <div className="flex gap-2">
                  <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[18px]">
                      {" "}
                      Paso obligatorio en este caso.
                    </p>
                    <ul className="list-disc list-outside ml-5 text-base text-muted-foreground space-y-1 mt-2">
                      <li>
                        Acudir al Tribunal de Niños, Niñas y Adolescentes
                        correspondiente al lugar de residencia del menor,
                        presentando una instancia o solicitud explicando el
                        porqué no se tiene la autorización o presencia de ese
                        padre o madre.
                      </li>

                      <li>
                        Adjuntando además, documentaciones como: El acta de
                        nacimiento del menor y la identificación del padre o
                        madre solicitante.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <p className="font-semibold text-[18px]">
                Escanear todos los documentos requeridos en formato .JPG, en
                caso de subir fotos, asegurar su buena calidad.
              </p>
              <ul className="list-disc list-outside ml-5 text-base text-muted-foreground space-y-1 mt-1"></ul>
            </li>

            <li>
              <p className="font-semibold text-[18px]">
                Realizar la solicitud en línea, completando los formularios con
                los datos del menor, padre/madre o tutor solicitante y
                acompañante (si aplica).
              </p>
            </li>

            <li>
              <p className="font-semibold text-[18px]">
                Esperar validación de los documentos. Migración revisará su
                solicitud, en caso de faltar algún documento o haber algún
                error, recibirá un correo solicitando la modificación.
              </p>

              <li className="mt-3">
                <p className="font-semibold text-[18px]">Realizar el pago:</p>
              </li>
              <ul className="list-disc list-outside ml-5 text-base text-muted-foreground space-y-1 mt-1">
                <li>
                  Una vez aprobados los documentos, recibirá una notificación
                  para realizar el pago por cualquiera los canales
                  correspondientes.
                </li>
              </ul>
              <li className="mt-3">
                <p className="font-semibold text-[18px]">Importante!</p>
              </li>
              <ul className="list-disc list-outside ml-5 text-base text-muted-foreground space-y-1 mt-1">
                <li>
                  La Certificación de Salida de Menor se entrega en PDF en la
                  plataforma, en un plazo de hasta 48 horas laborables si todo
                  está en orden.
                </li>
                <li>
                  Esta documento debe ser presentado al momento de salir del
                  país (aeropuerto, puerto o frontera).
                </li>
              </ul>
            </li>
          </ol>
        </div>

        {/* Additional note */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-6">
          <div className="flex gap-2">
            <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[18px]">Nota</p>
              <ul className="list-disc list-outside ml-5 text-base text-muted-foreground space-y-1 mt-2">
                <li>
                  El permiso de salida tiene una vigencia de 90 días desde su
                  emisión.
                </li>
                <li>
                  La autorización de viaje emitida por el Tribunal, solo puede
                  ser trámitada en República Dominicana.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer navigation */}
        {/* <div className="flex justify-between pt-4">
          <Button variant="outline" size="sm" className="gap-2">
            <ChevronLeft className="h-4 w-4" />
            Regresar
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            Iniciar el trámite
          </Button>
        </div> */}
      </CardContent>
    </Card>
  );
}
