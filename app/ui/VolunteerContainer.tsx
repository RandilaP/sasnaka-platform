"use client"
import React from 'react'
import { VolunteerCard } from "../ui/VolunteerCard";
import { useEffect, useState } from "react";
import { getVolunteersData } from "../lib/volunteerData";
import { VolunteerData } from "../lib/model";

function VolunteerContainer({ query, currentPage, district }: { query: string; currentPage: number; district: string }) {

    const [volunteers, setVolunteers] = useState<VolunteerData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getVolunteersData(query, currentPage, district);
      if (response) {
        setVolunteers(response.data || []);
      } else {
        console.log("error fetching data");
      }
    }
    fetchData();
  }, [query, currentPage, district]);
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 ">
          {volunteers.map((volunteer) => (
            <VolunteerCard
              key={volunteer.id}
              name={volunteer.name}
              profile_image={volunteer.profile_image}
              university={volunteer.university}
              degree={volunteer.degree}
            />
          ))}
        </div>
  )
}

export default VolunteerContainer