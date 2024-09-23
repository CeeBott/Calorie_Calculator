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
    <div className="w-full">
      <Card className="mb-8 shadow-lg bg-gradient-to-br from-green-50 to-green-100 rounded-lg overflow-hidden">
        <CardHeader className="space-y-1 p-4 sm:p-6">
          <CardTitle className="text-2xl sm:text-3xl font-bold text-green-900 break-words">Calorie Calculator</CardTitle>
          <CardDescription className="text-sm sm:text-base text-green-700">Input your details to find your optimal calorie intake</CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">   
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