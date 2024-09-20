'use client'

import React from 'react'
import { Input } from "./ui/input"
import { Label } from "./ui/label"

interface Height {
  ft: string;
  in: string;
  cm: string;
}

interface HeightInputProps {
  isMetric: boolean;
  height: Height;
  setHeight: (height: Height) => void;
}

export default function HeightInput({ isMetric, height, setHeight }: HeightInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Validate input: allow only positive numbers with optional decimal point
    if (/^\d*\.?\d*$/.test(value)) {
      setHeight({ ...height, [name]: value });
    }
  };

  if (isMetric) {
    return (
      <div>
        <Label htmlFor="height-cm" className="text-sm font-medium text-green-800">Height (cm)</Label>
        <Input
          id="height-cm"
          name="cm"
          type="number"
          value={height.cm}
          onChange={handleChange}
          min="0"
          step="0.1"
          className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
          placeholder="Enter height in cm"
          aria-label="Height in centimeters"
        />
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="height-ft" className="text-sm font-medium text-green-800">Height (ft)</Label>
          <Input
            id="height-ft"
            name="ft"
            type="number"
            value={height.ft}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            placeholder="Feet"
            aria-label="Height in feet"
          />
        </div>
        <div>
          <Label htmlFor="height-in" className="text-sm font-medium text-green-800">Height (in)</Label>
          <Input
            id="height-in"
            name="in"
            type="number"
            value={height.in}
            onChange={handleChange}
            min="0"
            max="11"
            className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            placeholder="Inches"
            aria-label="Height in inches"
          />
        </div>
      </div>
    );
  }
}