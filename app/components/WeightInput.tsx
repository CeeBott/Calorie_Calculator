'use client'

import React from 'react'
import { Input } from "./ui/input"
import { Label } from "./ui/label"

interface WeightInputProps {
  isMetric: boolean;
  weight: { kg: string; lbs: string };
  setWeight: (weight: { kg: string; lbs: string }) => void;
}

export default function WeightInput({ isMetric, weight, setWeight }: WeightInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Ensure only positive numbers are entered
    if (/^\d*\.?\d*$/.test(value)) {
      setWeight({ ...weight, [name]: value });
    }
  };

  const unit = isMetric ? 'kg' : 'lbs';
  const placeholder = `Enter weight in ${unit}`;

  return (
    <div>
      <Label htmlFor="weight" className="text-sm font-medium text-green-800">
        Weight ({unit})
      </Label>
      <Input
        id="weight"
        name={unit}
        type="number"
        value={isMetric ? weight.kg : weight.lbs}
        onChange={handleChange}
        min="0"
        step="0.1"
        className="mt-1 block w-full h-10 px-3 py-2 rounded-md border-green-300 text-green-800 shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
        placeholder={placeholder}
        aria-label={`Enter weight in ${unit}`}
      />
    </div>
  );
}