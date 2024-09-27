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
  gainWeight: number; // Added gainWeight to the results
}

interface CalorieFormProps {
  isMetric: boolean;
  setIsMetric: (value: boolean) => void;
  setResults: Dispatch<SetStateAction<CalorieResults | null>>;
}

interface FormData {
  age: number | '';
  gender: 'male' | 'female' | ''; // Allow empty string for unselected
  height: { ft: string; in: string; cm: string };
  weight: { kg: string; lbs: string };
  activity: string;
}

export default function CalorieForm({ isMetric, setIsMetric, setResults }: CalorieFormProps) {
  const [formData, setFormData] = useState<FormData>({
    age: '',
    gender: '',
    height: { ft: "", in: "", cm: "" },
    weight: { kg: "", lbs: "" },
    activity: "" // Set to an empty string for unselected state
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({}); // State for error messages

  const validateFields = () => {
    const newErrors: { [key: string]: string } = {};
    if (formData.age === '') newErrors.age = 'Age is required.';
    if (formData.gender === '') newErrors.gender = 'Gender is required.';
    if (isMetric && (formData.height.cm === '' || formData.weight.kg === '')) {
      if (formData.height.cm === '') newErrors.height = 'Height is required.';
      if (formData.weight.kg === '') newErrors.weight = 'Weight is required.';
    } else if (!isMetric && (formData.height.ft === '' || formData.height.in === '' || formData.weight.lbs === '')) {
      if (formData.height.ft === '' || formData.height.in === '') newErrors.height = 'Height is required.';
      if (formData.weight.lbs === '') newErrors.weight = 'Weight is required.';
    }
    if (formData.activity === '') newErrors.activity = 'Activity level is required.';
    return newErrors;
  };

  const calculateCalories = () => {
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Stop calculation if there are validation errors
    }
    setErrors({}); // Clear errors if validation passes

    // Convert values to numbers
    const weightKg = isMetric ? parseFloat(formData.weight.kg) : parseFloat(formData.weight.lbs) * 0.453592;
    const heightCm = isMetric ? parseFloat(formData.height.cm) : (parseFloat(formData.height.ft) * 30.48) + (parseFloat(formData.height.in) * 2.54);
    const age = parseFloat(formData.age as string); // Ensure age is a number

    let bmr: number;
    if (formData.gender === "male") {
      bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5;
    } else {
      bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
    }

    const tdee = bmr * parseFloat(formData.activity);

    setResults({
      bmr: Math.round(bmr),
      maintain: Math.round(tdee),
      mildLoss: Math.round(tdee - 250),
      weightLoss: Math.round(tdee - 500),
      extremeLoss: Math.round(tdee - 1000),
      gainWeight: Math.round(tdee + 250) // Added gain weight calculation
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    calculateCalories();
  };

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

      {/* Display all error messages at the bottom of the form */}
      {Object.keys(errors).length > 0 && (
        <div className="text-red-500 mb-2">
          {Object.values(errors).map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}

      <Button 
        type="submit" 
        className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
      >
        Calculate
      </Button>
    </form>
  )
}