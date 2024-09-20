import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card"

interface ResultsCardProps {
  results: {
    bmr: number;
    maintain: number;
    mildLoss: number;
    weightLoss: number;
    extremeLoss: number;
  };
}

const ResultsCard: React.FC<ResultsCardProps> = ({ results }) => {
  return (
    <Card className="mb-8 shadow-lg bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
      <CardHeader className="space-y-1 p-4">
        <CardTitle className="text-4xl font-bold text-green-900">Your Results</CardTitle>
        <CardDescription className="text-lg text-green-700">Daily calorie estimates based on your goal</CardDescription>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <div className="border-b border-green-200 pb-2">
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold text-green-800">
              Basal Metabolic Rate (BMR)
            </p>
            <p className="text-xl font-bold text-green-800">
              {results.bmr} Calories/day
            </p>
          </div>
          <p className="text-sm text-green-600 mt-1">
            BMR is the number of calories your body burns at rest to maintain basic life functions.
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg text-green-800">Maintain weight:</p>
          <p className="text-lg font-bold text-green-800">{results.maintain} Calories/day</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg text-green-800">Mild weight loss:</p>
          <p className="text-lg font-bold text-green-800">{results.mildLoss} Calories/day</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg text-green-800">Weight loss:</p>
          <p className="text-lg font-bold text-green-800">{results.weightLoss} Calories/day</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg text-green-800">Extreme weight loss:</p>
          <p className="text-lg font-bold text-green-800">{results.extremeLoss} Calories/day</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default ResultsCard