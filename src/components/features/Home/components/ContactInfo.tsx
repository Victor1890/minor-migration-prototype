export function ContactInfo() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-[#020617]">
        ¿Tienes dudas o necesitas confirmar esta información?
      </h3>
      <div className="text-[#031942] flex flex-col gap-4">
        <p className="">
          Si no estás seguro de qué documentos necesitas o tienes alguna
          pregunta sobre el caso del menor, puedes comunicarte con la Dirección
          General de Migración:
        </p>
        <div className="flex flex-col gap-1">
          <p>
            <span className="font-bold">📞 Teléfono:</span> (809) 508-2555 Ext.
            3890
          </p>
          <p>
            <span className="font-bold">📧 Correo:</span>{" "}
            certificacionesmc@migracion.gob.do
          </p>
          <p>
            <span className="font-bold">🕒 Horario de atención:</span> lunes a
            viernes, de 8:00 a.m. a 4:00 p.m.
          </p>
        </div>
        <div className="flex flex-col">
          <p>También puedes visitar el portal oficial:</p>
          <a
            href="https://servicios.migracion.gob.do"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://servicios.migracion.gob.do
          </a>
        </div>
      </div>
    </div>
  );
}
