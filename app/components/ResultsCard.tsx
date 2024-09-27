import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card"

interface ResultsCardProps {
  results: {
    bmr: number;
    maintain: number;
    mildLoss: number;
    weightLoss: number;
    extremeLoss: number;
    gainWeight: number; // Added gainWeight to the results
  };
}

const ResultsCard: React.FC<ResultsCardProps> = ({ results }) => {
  return (
    <Card className="mb-8 shadow-lg bg-gradient-to-br from-green-50 to-green-100 rounded-lg overflow-hidden">
      <CardHeader className="space-y-1 p-4 sm:p-6">
        <CardTitle className="text-2xl sm:text-3xl font-bold text-green-900 break-words">Your Results</CardTitle>
        <CardDescription className="text-sm sm:text-base text-green-700">Daily calorie estimates based on your goal</CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 space-y-4">
        <div className="border-b border-green-200 pb-2">
          <div className="flex flex-row justify-between sm:items-center">
            <p className="text-lg sm:text-xl font-bold text-green-800 pr-2 max-w-[60%] sm:max-w-none leading-tight sm:leading-normal">
              Basal Metabolic Rate (BMR)
            </p>
            <p className="text-lg sm:text-xl font-bold text-green-800 text-right whitespace-nowrap">
              {results.bmr} Calories/day
            </p>
          </div>
          <p className="text-xs sm:text-sm text-green-600 mt-1">
            BMR is the number of calories your body burns at rest to maintain basic life functions.
          </p>
        </div>
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col">
            <p className="text-base sm:text-lg text-green-800 pr-2 max-w-[60%] sm:max-w-none">Maintain Weight:</p>
            <p className="text-xs sm:text-sm text-green-600 mt-1 italic">Stay at your current weight</p>
          </div>
          <p className="text-base sm:text-lg font-bold text-green-800 text-right whitespace-nowrap self-start">{results.maintain} Calories/day</p>
        </div>
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col">
            <p className="text-base sm:text-lg text-green-800 pr-2 max-w-[60%] sm:max-w-none">Mild Weight Gain:</p>
            <p className="text-xs sm:text-sm text-green-600 mt-1 italic">Gain .5 lb (0.23 kg) per week</p>
          </div>
          <p className="text-base sm:text-lg font-bold text-green-800 text-right whitespace-nowrap self-start">{results.gainWeight} Calories/day</p>
        </div>
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col">
            <p className="text-base sm:text-lg text-green-800 pr-2 max-w-[60%] sm:max-w-none">Mild Weight Loss:</p>
            <p className="text-xs sm:text-sm text-green-600 mt-1 italic">Lose .5 lb (0.23 kg) per week</p>
          </div>
          <p className="text-base sm:text-lg font-bold text-green-800 text-right whitespace-nowrap self-start">{results.mildLoss} Calories/day</p>
        </div>
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col">
            <p className="text-base sm:text-lg text-green-800 pr-2 max-w-[60%] sm:max-w-none">Moderate Weight Loss:</p>
            <p className="text-xs sm:text-sm text-green-600 mt-1 italic">Lose 1 lb (0.45 kg) per week</p>
          </div>
          <p className="text-base sm:text-lg font-bold text-green-800 text-right whitespace-nowrap self-start">{results.weightLoss} Calories/day</p>
        </div>
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col">
            <p className="text-base sm:text-lg text-green-800 pr-2 max-w-[60%] sm:max-w-none">Aggressive Weight Loss:</p>
            <p className="text-xs sm:text-sm text-green-600 mt-1 italic">Lose 2 lbs (0.91 kg) per week</p>
          </div>
          <p className="text-base sm:text-lg font-bold text-green-800 text-right whitespace-nowrap self-start">{results.extremeLoss} Calories/day</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default ResultsCard