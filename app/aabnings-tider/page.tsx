export default function AabningsTider() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-6">ÅBNINGSTIDER</h1>
      <div className="prose max-w-none">
        <p>Vores kliniks åbningstider og tilgængelighedsinformation.</p>

        <div className="bg-white rounded-lg p-6 shadow-sm my-8">
          <h2 className="text-2xl font-semibold mb-4">Normale åbningstider</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>Mandag:</div>
            <div>08:00 - 16:00</div>
            <div>Tirsdag:</div>
            <div>08:00 - 16:00</div>
            <div>Onsdag:</div>
            <div>08:00 - 16:00</div>
            <div>Torsdag:</div>
            <div>08:00 - 16:00</div>
            <div>Fredag:</div>
            <div>08:00 - 15:00</div>
            <div>Weekend:</div>
            <div>Lukket</div>
          </div>
        </div>

        <p>
          Telefonisk henvendelse kan ske i tidsrummet 08:00 - 12:00 på hverdage. Ved akut sygdom uden for åbningstiden,
          kontakt venligst lægevagten på telefon 70 15 03 00.
        </p>
      </div>
    </div>
  )
}

