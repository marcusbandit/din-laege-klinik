export default function Priser() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-6">PRISER</h1>
      <div className="prose max-w-none">
        <p>Vores prisinformation for forskellige ydelser og behandlinger.</p>
        <p>
          Som patient i vores klinik er de fleste ydelser dækket af den offentlige sygesikring, hvis du har et gult
          sundhedskort. Der kan dog være visse ydelser, som ikke er dækket, og som derfor kræver egenbetaling.
        </p>

        <div className="bg-white rounded-lg p-6 shadow-sm my-8">
          <h2 className="text-2xl font-semibold mb-4">Prisliste for ikke-dækkede ydelser</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>Helbredsattest til kørekort:</div>
            <div>500 kr.</div>
            <div>Rejsevaccination:</div>
            <div>Varierer efter type</div>
            <div>Ikke-mødt gebyr:</div>
            <div>250 kr.</div>
            <div>Lægeerklæring til forsikring:</div>
            <div>Fra 600 kr.</div>
          </div>
        </div>

        <p>Alle priser er vejledende og kan ændres. Kontakt venligst klinikken for aktuelle priser.</p>
      </div>
    </div>
  )
}

