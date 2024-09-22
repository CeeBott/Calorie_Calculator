import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import CalorieForm from '@/app/components/CalorieForm'
import ResultsCard from './ResultsCard'
import NewsletterSignup from './NewsletterSignup'
import SocialShareButtons from './SocialShareButtons'

interface CalorieResults {
  bmr: number;
  maintain: number;
  mildLoss: number;
  weightLoss: number;
  extremeLoss: number;
}

interface CalorieCalculatorProps {
  isMetric: boolean;
  setIsMetric: (value: boolean) => void;
}

export default function CalorieCalculator({ isMetric, setIsMetric }: CalorieCalculatorProps) {
  const [results, setResults] = useState<CalorieResults | null>(null)

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <Card className="mb-8 shadow-lg bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
        <CardHeader className="space-y-1 p-6">
          <CardTitle className="text-3xl sm:text-4xl font-bold text-green-900">Calorie Calculator</CardTitle>
          <CardDescription className="text-base sm:text-lg text-green-700">Input your details to find your optimal calorie intake</CardDescription>
        </CardHeader>
        <CardContent className="p-6">   
          <CalorieForm isMetric={isMetric} setIsMetric={setIsMetric} setResults={setResults} />
        </CardContent>
      </Card>

      {results && (
        <>
          <ResultsCard results={results} />
          <NewsletterSignup />
        </>
      )}

      <SocialShareButtons />
    </div>
  )
}