import { Input } from "@/components/ui/input"

export function SearchBar() {
  return (
    <div className="flex gap-4 p-4  bg-white w-full z-10">
      <Input 
        type="search" 
        placeholder="Search..." 
        className="max-w-sm"
      />
    </div>
  )
}