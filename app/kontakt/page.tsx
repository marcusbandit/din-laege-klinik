export default function Kontakt() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-6">KONTAKT</h1>
      <div className="prose max-w-none">
        <p>Kontaktinformation og måder at nå vores klinik på.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Kontaktoplysninger</h2>
            <div className="space-y-2">
              <p>
                <strong>Adresse:</strong>
                <br />
                Eksempelvej 123
                <br />
                2100 København Ø
              </p>
              <p>
                <strong>Telefon:</strong>
                <br />
                +45 12 34 56 78
              </p>
              <p>
                <strong>E-mail:</strong>
                <br />
                kontakt@dinlaegeklinik.dk
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Åbningstider</h2>
            <div className="grid grid-cols-2 gap-2">
              <div>Mandag-Torsdag:</div>
              <div>08:00 - 16:00</div>
              <div>Fredag:</div>
              <div>08:00 - 15:00</div>
              <div>Telefontid:</div>
              <div>08:00 - 12:00</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm my-8">
          <h2 className="text-2xl font-semibold mb-4">Find os</h2>
          <div className="h-64 w-full bg-gray-200 rounded-lg flex items-center justify-center">
            Kort over klinikkens placering kommer her
            {/* Replace with actual map when available */}
          </div>
        </div>
      </div>
    </div>
  )
}

