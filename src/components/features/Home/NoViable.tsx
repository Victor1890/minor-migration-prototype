export function NoViable() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <p>Puedes comunicarte con nosotros en nuestros canales digitales</p>
        <div className="flex flex-col gap-1">
          <p>
            <span className="font-bold">Teléfono:</span> (809) 508-2555 Ext.
            3890
          </p>
          <p>
            <span className="font-bold">Correo electrónico:</span>{" "}
            certificacionesmc@migracion.gob.do
          </p>
          <p>
            <span className="font-bold">Horario de atención:</span> Lunes a
            viernes, de 8:00 a m. a 4:00 p. m.
          </p>
        </div>
        <div className="flex flex-col">
          <p>También puedes visitar el portal oficial:</p>
          <a>https://servicios.migracion.gob.do</a>
        </div>
      </div>
    </div>
  );
}
