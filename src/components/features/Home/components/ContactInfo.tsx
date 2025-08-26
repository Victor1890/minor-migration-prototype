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
            <a href="tel:+18095082555" className="no-underline hover:underline">
              📞 Tel. (809) 508-2555 ext. 3890
            </a>
          </p>
          <p>
            <a
              href="mailto:certificacionesmc@migracion.gob.do"
              className="no-underline hover:underline"
            >
              ✉️ certificacionesmc@migracion.gob.do
            </a>
          </p>
          <p>
            <a
              href="https://www.google.com/maps/place/Direcci%C3%B3n+General+de+Migraci%C3%B3n/@18.4446532,-69.9629156,14z/data=!4m6!3m5!1s0x8ea5626b93b642a9:0x7a0ecf8f60e1e2db!8m2!3d18.4446532!4d-69.9268667!16s%2Fg%2F1tfwr06f?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline hover:underline"
            >
              📍 Autopista 30 de Mayo, Santo Domingo
            </a>
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
