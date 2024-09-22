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

  const inputClassName = "mt-1 block w-full h-10 px-3 py-2 rounded-md border-green-300 text-green-800 shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500";

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
          className={inputClassName}
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
            className={inputClassName}
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
            className={inputClassName}
            placeholder="Inches"
            aria-label="Height in inches"
          />
        </div>
      </div>
    );
  }
}