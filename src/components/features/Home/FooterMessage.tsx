export const FooterMessage = () => (
  <div className="max-w-[896px] w-full text-[#031942] font-normal text-base flex flex-col gap-4">
    <p>
      ¿No encuentras el caso del menor? Comunícate con la Dirección de
      Migración:
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
          href="https://maps.google.com/?q=Autopista+30+de+Mayo,+Santo+Domingo"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline hover:underline"
        >
          📍 Autopista 30 de Mayo, Santo Domingo
        </a>
      </p>
    </div>
  </div>
);
