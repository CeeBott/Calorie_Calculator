'use client'

import React from 'react'
import { Input } from "./ui/input"
import { Label } from "./ui/label"

interface AgeInputProps {
  age: number | '';
  setAge: (age: number | '') => void;
}

export default function AgeInput({ age, setAge }: AgeInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (/^\d+$/.test(value) && parseInt(value) >= 0)) {
      setAge(value === '' ? '' : parseInt(value));
    }
  };

  return (
    <div>
      <Label htmlFor="age" className="text-sm font-medium text-green-800">Age</Label>
      <Input
        id="age"
        type="number"
        value={age}
        onChange={handleChange}
        min="0"
        className="mt-1 block w-full h-10 px-3 py-2 rounded-md border-green-300 text-green-800 shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
        placeholder="Enter your age"
        aria-label="Enter your age"
      />
    </div>
  )
}