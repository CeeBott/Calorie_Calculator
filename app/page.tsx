'use client'

import React, { useState, useEffect } from 'react'
import CalorieCalculator from './components/CalorieCalculator'

export default function Home() {
  const [isMetric, setIsMetric] = useState(true);

  useEffect(() => {
    // This effect runs when the component mounts and whenever isMetric changes
    console.log('Current measurement system:', isMetric ? 'Metric' : 'Imperial');
    // You can add more logic here if needed
  }, [isMetric]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-600 to-green-300 p-4">
      <div className="container mx-auto max-w-2xl">
        <CalorieCalculator isMetric={isMetric} setIsMetric={setIsMetric} />
      </div>
    </main>
  )
}