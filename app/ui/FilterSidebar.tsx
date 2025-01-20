import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button"
import { SearchBar } from "./SearchBar"
  
  export function FilterSidebar() {
    return (
      <div className="w-64 p-4 bg-white sticky">
        <div className="flex gap-4 p-4  bg-white w-full z-10">
      <Input 
        type="search" 
        placeholder="Search..." 
        className="max-w-sm"
      />
    </div>
        <h2 className="text-lg font-medium mb-4">Filter Members by</h2>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">District:</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select District" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Districts</SelectItem>
                {/* Add more districts as needed */}
              </SelectContent>
            </Select>
          </div>
  
          <div>
            <label className="text-sm font-medium mb-2 block">Volunteer Type:</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {/* Add volunteer types */}
              </SelectContent>
            </Select>
          </div>
  
          <div>
            <label className="text-sm font-medium mb-2 block">Volunteer Level:</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="1">Level 1</SelectItem>
                <SelectItem value="2">Level 2</SelectItem>
                <SelectItem value="3">Level 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
  
          <Button className="w-full">Filter Results</Button>
        </div>
      </div>
    )
  }