import React from 'react'
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
interface ActivityLevelSelectProps {
  activity: string;
  setActivity: (activity: string) => void;
}

const ActivityLevelSelect: React.FC<ActivityLevelSelectProps> = ({ activity, setActivity }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="activity">Activity Level</Label>
      <Select value={activity} onValueChange={setActivity}>
        <SelectTrigger id="activity" className="w-full text-left flex justify-between items-center">
          <SelectValue placeholder="Select activity level" />
          <svg
            className="h-4 w-4 opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1.2" className="hover:bg-green-700 hover:text-white focus:bg-green-700 focus:text-white">Sedentary (little to no exercise)</SelectItem>
          <SelectItem value="1.375" className="hover:bg-green-700 hover:text-white focus:bg-green-700 focus:text-white">Light (1-3 days/week)</SelectItem>
          <SelectItem value="1.55" className="hover:bg-green-700 hover:text-white focus:bg-green-700 focus:text-white">Moderate (3-5 days/week)</SelectItem>
          <SelectItem value="1.725" className="hover:bg-green-700 hover:text-white focus:bg-green-700 focus:text-white">Active (6-7 days/week)</SelectItem>
          <SelectItem value="1.9" className="hover:bg-green-700 hover:text-white focus:bg-green-700 focus:text-white">Very Active (hard exercise daily)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default ActivityLevelSelect