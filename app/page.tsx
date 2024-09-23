'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import CalorieCalculator from './components/CalorieCalculator'

export default function Home() {
  const [isMetric, setIsMetric] = useState(true);

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-600 to-green-300 px-4 py-3"> {/* Reduced top padding */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="text-center mb-3"> {/* Reduced bottom margin */}
          <Image
            src="/Calorie-Calculator-Logo.png"
            alt="Calorie Calculator Logo"
            width={250}
            height={150}
            className="mx-auto"
          />
        </div>
        <CalorieCalculator isMetric={isMetric} setIsMetric={setIsMetric} />
      </div>
    </main>
  )
}