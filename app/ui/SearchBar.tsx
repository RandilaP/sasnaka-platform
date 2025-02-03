"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export function SearchBar() {
  const districts = [
    "Kandy",
    "Colombo",
    "Galle",
    "Matara",
    "Kurunegala",
    "Jaffna",
    "Anuradhapura",
    "Polonnaruwa",
    "Gampaha",
    "Kalutara",
    "Ratnapura",
    "Badulla",
    "Monaragala",
    "Ampara",
    "Trincomalee",
    "Batticaloa",
    "Mannar",
    "Mullaitivu",
    "Vavuniya",
    "Kilinochchi",
    "Hambantota",
    "Nuwara Eliya",
    "Puttalam",
    "Matale",
    "Kegalle",
  ];

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  function selectDistrict(district: string) {
    const params = new URLSearchParams(searchParams);
    if (district === "all") {
      params.delete("district");
    } else {
      params.set("district", district);
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="flex gap-4 p-4  bg-white w-full z-10">
      <Input
        type="search"
        placeholder="Search..."
        className="w-1/2"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <Select onValueChange={(value) => selectDistrict(value)}>
        <SelectTrigger className="w-1/6">
          <SelectValue placeholder="Select District" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Districts</SelectItem>
          {districts.map((district) => (
            <SelectItem key={district} value={district}>
              {district}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
