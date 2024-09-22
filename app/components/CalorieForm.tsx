import React, { useState, Dispatch, SetStateAction } from 'react'
import { Button } from "./ui/button"
import GenderSelector from './GenderSelector'
import UnitSwitch from './UnitSwitch'
import AgeInput from './AgeInput'
import HeightInput from './HeightInput'
import WeightInput from './WeightInput'
import ActivityLevelSelect from './ActivityLevelSelect'

interface CalorieResults {
  bmr: number;
  maintain: number;
  mildLoss: number;
  weightLoss: number;
  extremeLoss: number;
}

interface CalorieFormProps {
  isMetric: boolean;
  setIsMetric: (value: boolean) => void;
  setResults: Dispatch<SetStateAction<CalorieResults | null>>;
}

interface FormData {
  age: number | '';
  gender: 'male' | 'female';
  height: { ft: string; in: string; cm: string };
  weight: { kg: string; lbs: string };
  activity: string;
}

export default function CalorieForm({ isMetric, setIsMetric, setResults }: CalorieFormProps) {
  const [formData, setFormData] = useState<FormData>({
    age: '',
    gender: "male",
    height: { ft: "", in: "", cm: "" },
    weight: { kg: "", lbs: "" },
    activity: "1.2"
  })

  const calculateCalories = () => {
    if (formData.age === '') return;  // Don't calculate if age is empty

    const weightKg = isMetric ? parseFloat(formData.weight.kg) : parseFloat(formData.weight.lbs) * 0.453592
    const heightCm = isMetric ? parseFloat(formData.height.cm) : (parseFloat(formData.height.ft) * 30.48) + (parseFloat(formData.height.in) * 2.54)
    const age = formData.age

    let bmr: number
    if (formData.gender === "male") {
      bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5
    } else {
      bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161
    }

    const tdee = bmr * parseFloat(formData.activity)

    setResults({
      bmr: Math.round(bmr),
      maintain: Math.round(tdee),
      mildLoss: Math.round(tdee - 250),
      weightLoss: Math.round(tdee - 500),
      extremeLoss: Math.round(tdee - 1000)
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    calculateCalories()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <div className="flex flex-row justify-between items-start">
        <GenderSelector 
          gender={formData.gender} 
          setGender={(gender) => setFormData(prev => ({ ...prev, gender }))} 
        />
        <UnitSwitch isMetric={isMetric} setIsMetric={setIsMetric} />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AgeInput 
          age={formData.age} 
          setAge={(age) => setFormData(prev => ({ ...prev, age }))} 
        />
        <HeightInput 
          isMetric={isMetric} 
          height={formData.height} 
          setHeight={(height) => setFormData(prev => ({ ...prev, height }))} 
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <WeightInput 
          isMetric={isMetric} 
          weight={formData.weight} 
          setWeight={(weight) => setFormData(prev => ({ ...prev, weight }))} 
        />
        <ActivityLevelSelect 
          activity={formData.activity} 
          setActivity={(activity) => setFormData(prev => ({ ...prev, activity }))} 
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
      >
        Calculate
      </Button>
    </form>
  )
}