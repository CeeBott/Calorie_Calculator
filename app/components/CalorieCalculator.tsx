import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import CalorieForm from './CalorieForm'
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
    <div className="container mx-auto max-w-2xl">
         <Card className="mb-8 shadow-lg bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
         <CardHeader className="space-y-1 p-4">
      <CardTitle className="text-4xl font-bold text-green-900">Calorie Calculator</CardTitle>
      <CardDescription className="text-lg text-green-700">Input your details to find your optimal calorie intake</CardDescription>
        </CardHeader>
        <CardContent className="p-4 space-y-4">   
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