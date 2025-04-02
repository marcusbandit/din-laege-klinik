"use client"
import { useState, useEffect } from "react"
import { CustomButton } from "@/components/ui/custom-button"
import { ExternalLink, Smartphone } from "lucide-react"

export default function Home() {
  const [platform, setPlatform] = useState<"unknown" | "ios" | "android" | "desktop">("unknown")

  useEffect(() => {
    // Detect platform
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
    if (/android/i.test(userAgent)) {
      setPlatform("android")
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      setPlatform("ios")
    } else {
      setPlatform("desktop")
    }
  }, [])

  const getMinLaegeLink = () => {
    switch (platform) {
      case "android":
        return "intent://#Intent;package=com.trifork.minlaege;action=android.intent.action.VIEW;scheme=android-app;end;"
      case "ios":
        return "https://apps.apple.com/dk/app/min-l%C3%A6ge/id1445003295"
      default:
        return "https://www.minlaege.dk/"
    }
  }

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-6">VELKOMMEN TIL VORES KLINIK</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="prose max-w-none">
          <p className="text-lg">
            Velkommen til vores lægeklinik. Vi er dedikeret til at yde den bedste sundhedspleje til vores patienter.
          </p>
          <p>
            Vores klinik ledes af speciallæge i almen medicin, Pernille Jørgensen, som har mange års erfaring inden for
            almen praksis. Vi tilbyder en bred vifte af sundhedsydelser og lægger vægt på forebyggelse og personlig
            pleje.
          </p>
          <p>
            Vores mål er at skabe et trygt og behageligt miljø, hvor du kan få den bedste behandling og rådgivning om
            din sundhed.
          </p>
        </div>

        <div className="flex justify-center items-start">
          <div className="bg-gray-200 rounded-lg overflow-hidden w-64 h-80 flex items-center justify-center">
            <p className="text-gray-500">Profilbillede af Pernille Jørgensen</p>
            {/* Replace with actual image when available */}
            {/* <Image 
              src="/images/pernille-jorgensen.jpg" 
              alt="Pernille Jørgensen" 
              width={256} 
              height={320} 
              className="object-cover"
            /> */}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm mb-12">
        <h2 className="text-2xl font-semibold mb-4">Vores digitale tjenester</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Smartphone className="mr-2 h-5 w-5" />
              <h3 className="text-xl font-medium">Min Læge App</h3>
            </div>
            <p className="mb-4">
              Download "Min Læge" appen for at bestille tid, forny recepter og kommunikere med klinikken.
            </p>
            <CustomButton onClick={() => window.open(getMinLaegeLink(), "_blank")} className="w-full">
              Åbn Min Læge <ExternalLink className="ml-2 h-4 w-4" />
            </CustomButton>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex items-center mb-2">
              <ExternalLink className="mr-2 h-5 w-5" />
              <h3 className="text-xl font-medium">Patientportal</h3>
            </div>
            <p className="mb-4">
              Besøg vores patientportal for at se dine journaler og prøvesvar. Portalen administreres af Pernille
              Jørgensen.
            </p>
            <CustomButton
              onClick={() => window.open("https://patientportal.egclinea.com/?id=613", "_blank")}
              className="w-full"
            >
              Gå til patientportal <ExternalLink className="ml-2 h-4 w-4" />
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  )
}

