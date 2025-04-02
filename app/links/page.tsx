"use client"

import { ExternalLink } from "lucide-react"
import { CustomButton } from "@/components/ui/custom-button"

export default function Links() {
  const externalLinks = [
    {
      title: "Sundhed.dk",
      description: "Den officielle portal for det danske sundhedsvæsen",
      url: "https://www.sundhed.dk/",
    },
    {
      title: "Min Læge App",
      description: "Download appen til at bestille tid og kommunikere med klinikken",
      url: "https://www.minlaege.dk/",
    },
    {
      title: "Patientportal",
      description: "Adgang til journaler og prøvesvar",
      url: "https://patientportal.egclinea.com/?id=613",
    },
    {
      title: "Lægevagten",
      description: "Information om lægevagten i Region Hovedstaden",
      url: "https://www.regionh.dk/akut-hjaelp/Sider/Akut-hjaelp.aspx",
    },
  ]

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-6">LINKS</h1>
      <div className="prose max-w-none">
        <p>Nyttige links og ressourcer relateret til vores klinik og ydelser.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          {externalLinks.map((link, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">{link.title}</h2>
              <p className="mb-4">{link.description}</p>
              <CustomButton onClick={() => window.open(link.url, "_blank")} className="w-full">
                Besøg {link.title} <ExternalLink className="ml-2 h-4 w-4" />
              </CustomButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

