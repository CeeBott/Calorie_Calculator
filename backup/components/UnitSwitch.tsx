'use client'

import React from 'react'
import { Label } from "./ui/label"
import { Switch } from "./ui/switch"

interface UnitSwitchProps {
  isMetric: boolean;
  setIsMetric: (value: boolean) => void;
}

export default function UnitSwitch({ isMetric, setIsMetric }: UnitSwitchProps) {
  return (
    <div className="flex flex-col items-end">
      <Label htmlFor="unit-switch" className="text-sm font-medium text-green-800 mb-2">Units</Label>
      <div className="flex items-center">
        <span className={`text-sm mr-2 ${isMetric ? 'text-green-500 font-medium' : 'text-green-700'}`}>Metric</span>
        <Switch
          id="unit-switch"
          checked={isMetric}
          onCheckedChange={setIsMetric}
          className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-green-500"
        />
        <span className={`text-sm ml-2 ${!isMetric ? 'text-green-500 font-medium' : 'text-green-700'}`}>Imperial</span>
      </div>
    </div>
  )
}