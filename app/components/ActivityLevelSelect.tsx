import React from 'react'
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

interface ActivityLevelSelectProps {
  activity: string;
  setActivity: (activity: string) => void;
}

const ActivityLevelSelect: React.FC<ActivityLevelSelectProps> = ({ activity, setActivity }) => {
  return (
    <div>
      <Label htmlFor="activity" className="text-sm font-medium text-green-800">Current Activity Level</Label>
      <Select value={activity} onValueChange={setActivity}>
        <SelectTrigger 
          id="activity" 
          className="mt-1 w-full h-10 px-3 py-2 text-sm text-left flex justify-between items-center bg-white border border-green-300 text-green-800 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
        >
          <SelectValue placeholder="Select activity level" />
          <svg
            className="h-4 w-4 text-green-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </SelectTrigger>
        <SelectContent className="bg-white border-green-300">
          <SelectItem value="1.2" className="text-green-800 hover:bg-green-100 focus:bg-green-100">Sedentary (little to no exercise)</SelectItem>
          <SelectItem value="1.375" className="text-green-800 hover:bg-green-100 focus:bg-green-100">Light (1-3 days/week)</SelectItem>
          <SelectItem value="1.55" className="text-green-800 hover:bg-green-100 focus:bg-green-100">Moderate (3-5 days/week)</SelectItem>
          <SelectItem value="1.725" className="text-green-800 hover:bg-green-100 focus:bg-green-100">Active (6-7 days/week)</SelectItem>
          <SelectItem value="1.9" className="text-green-800 hover:bg-green-100 focus:bg-green-100">Very Active (hard exercise daily)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default ActivityLevelSelect