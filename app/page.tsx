'use client'

import React, { useState, useEffect } from 'react'
import CalorieCalculator from './components/CalorieCalculator'

export default function Home() {
  const [isMetric, setIsMetric] = useState(true);

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-600 to-green-300 px-4 py-8">
      <div className="w-full max-w-2xl mx-auto">
        <CalorieCalculator isMetric={isMetric} setIsMetric={setIsMetric} />
      </div>
    </main>
  )
}
