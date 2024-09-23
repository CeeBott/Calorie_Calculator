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
    <div className="flex items-center space-x-2">
      <Label htmlFor="unit" className="text-sm font-medium text-green-800 whitespace-nowrap">Units:</Label>
      <Switch
        id="unit"
        checked={isMetric}
        onCheckedChange={setIsMetric}
        className="data-[state=checked]:bg-green-500"
      />
      <Label htmlFor="unit" className="text-sm text-green-800 w-14 text-left">
        {isMetric ? 'Metirc' : 'Imperial'}
      </Label>
    </div>
  )
}