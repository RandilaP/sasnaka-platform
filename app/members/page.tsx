// app/page.tsx
import { VolunteerCard } from "../ui/VolunteerCard";
import { FilterSidebar } from "../ui/FilterSidebar";
import { SearchBar } from "../ui/SearchBar";

const volunteers = [
  { name: "A Perera", level: 1, memberCount: 150 },
  { name: "B Perera", level: 2, memberCount: 220 },
  { name: "C Perera", level: 1, memberCount: 180 },
  { name: "D Perera", level: 1, memberCount: 130 },
  { name: "E Perera", level: 2, memberCount: 190 },
  { name: "F Perera", level: 1, memberCount: 170 },
];

export default function VolunteerDirectory() {
  return (
    <div className="flex h-screen p-20">
      <FilterSidebar />
      <main className="flex-1">

        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-20  h-screen">
          {volunteers.map((volunteer) => (
            <VolunteerCard
              key={volunteer.name}
              name={volunteer.name}
              level={volunteer.level}
              memberCount={volunteer.memberCount}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
