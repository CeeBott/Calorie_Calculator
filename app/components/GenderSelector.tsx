'use client'

import React from 'react'
import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"

interface GenderSelectorProps {
  gender: 'male' | 'female' | '';
  setGender: (gender: 'male' | 'female') => void;
}

export default function GenderSelector({ gender, setGender }: GenderSelectorProps) {
  return (
    <div className="flex-grow">
      <Label className="text-sm font-medium text-green-800">Gender</Label>
      <RadioGroup 
        value={gender} 
        onValueChange={setGender} 
        className="mt-2 flex space-x-4"
      >
        <div className="flex items-center">
          <RadioGroupItem value="male" id="male" className="text-green-600" />
          <Label htmlFor="male" className="ml-2 text-green-700">Male</Label>
        </div>
        <div className="flex items-center">
          <RadioGroupItem value="female" id="female" className="text-green-600" />
          <Label htmlFor="female" className="ml-2 text-green-700">Female</Label>
        </div>
      </RadioGroup>
    </div>
  )
}