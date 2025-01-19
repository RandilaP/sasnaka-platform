"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

import { changeVolunteerStatus, getPendingVolunteersData } from "../lib/volunteerData";
import { Button } from "@/components/ui/button";
import {  CircleX } from "lucide-react";
import { VolunteerData } from "../lib/model";
function VolunteerApprovalTable() {
  const [volunteers, setVolunteers] = useState<VolunteerData[]>([]);


  useEffect(() => {
    async function fetchData() {
      const response = await getPendingVolunteersData();
      if (response) {
        setVolunteers(response.data || []);
      } else {
        console.log("error fetching data");
      }
    }
    fetchData();
  }, []);

  return (
    <Table className="w-2/3 mx-auto mt-9">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>NIC</TableHead>
          <TableHead>Contact NO</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {volunteers.map((volunteer) => (
          <TableRow key={volunteer.id}>
            <TableCell>
              <img
                src={volunteer.profile_image}
                alt={volunteer.name}
                className="w-9 h-9 rounded-full"
              />
            </TableCell>
            <TableCell>{volunteer.name}</TableCell>
            <TableCell>{volunteer.nic}</TableCell>
            <TableCell>{volunteer.phone}</TableCell>
            <TableCell>
              <AlertDialog>
                <Button>
                  <AlertDialogTrigger>Open</AlertDialogTrigger>
                </Button>
                <AlertDialogContent className="w-1/2">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="flex w-full justify-between items-center text-center">
                      <p className="w-full">Volunteer Application</p>
                      <AlertDialogCancel className="w-9 h-9 border-none shadow-none rounded-full bottom-11"><CircleX/></AlertDialogCancel>
                    </AlertDialogTitle>
                    <ScrollArea className="w-full h-96">
                      <div className="p-4 flex flex-col space-y-9">
                        <div className="flex flex-col space-y-2">
                          <h1 className="font-bold text-center">
                            General Details
                          </h1>
                          <p className="font-semibold">Volunteer Name: </p>
                          <p>{volunteer.name}</p>
                          <p className="font-semibold">First Name: </p>
                          <p>{volunteer.fname}</p>
                          <p className="font-semibold">Last Name:</p>
                          <p> {volunteer.lname}</p>
                          <p className="font-semibold">Date of Birth:</p>
                          <p> {volunteer.dob}</p>
                          <p className="font-semibold">Gender:</p>
                          <p> {volunteer.gender}</p>
                          <p className="font-semibold">NIC: </p>
                          <p>{volunteer.nic}</p>
                          <p className="font-semibold">Preferred Language:</p>
                          <p> {volunteer.language}</p>
                          <p className="font-semibold">Address:</p>
                          <p> {volunteer.address}</p>
                          <p className="font-semibold">District: </p>
                          <p>{volunteer.district}</p>
                          <p className="font-semibold">City:</p>
                          <p> {volunteer.city}</p>
                          <p className="font-semibold">Phone:</p>
                          <p> {volunteer.phone}</p>
                          <p className="font-semibold">Email: </p>
                          <p>{volunteer.email}</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <h1 className="font-bold text-center">
                            Educational Details
                          </h1>
                          <p className="font-semibold">School:</p>
                          <p> {volunteer.school}</p>
                          <p className="font-semibold">A/L Year:</p>
                          <p> {volunteer.al_year}</p>
                          <p className="font-semibold">A/L Stream:</p>
                          <p> {volunteer.stream}</p>
                          <p className="font-semibold">Last Shy:</p>
                          <p> {volunteer.shy}</p>
                          <p className="font-semibold">Index Number:</p>
                          <p> {volunteer.index_number}</p>
                          <p className="font-semibold">Educational Status:</p>
                          <p> {volunteer.status}</p>
                          <p className="font-semibold">Other Qualfications:</p>
                          <p> {volunteer.other_qualification}</p>
                        </div>
                      </div>
                      {volunteer.status == "undergraduate" ? (
                        <div className="p-4 flex flex-col space-y-2">
                          <h1 className="font-bold text-center">
                            Undergraduate Details
                          </h1>
                          <p className="font-semibold">University:</p>
                          <p> {volunteer.university}</p>
                          <p className="font-semibold">Faculty:</p>
                          <p> {volunteer.faculty}</p>
                          <p className="font-semibold">Degree:</p>
                          <p> {volunteer.degree}</p>
                          <p className="font-semibold">Year of Study:</p>
                          <p> {volunteer.academic_year}</p>
                        </div>
                      ) : null}
                      <div className="p-4 flex flex-col space-y-2">
                        <h1 className="font-bold text-center">
                          Skills Details
                        </h1>
                        <p className="font-semibold">Leadership Rate:</p>
                        <p> {volunteer.rate_leadership}</p>
                        <p className="font-semibold">Leadership Experience:</p>
                        <p> {volunteer.leadership_experience}</p>
                        <p className="font-semibold">Aesthetic Skills:</p>
                        <ul>
                          {volunteer.aesthetic_skills &&
                            volunteer.aesthetic_skills.map((skill: string) => (
                              <li key={volunteer.id}>{skill}</li>
                            ))}
                        </ul>
                        <p className="font-semibold">Computer Skills</p>
                        <ul>
                          {volunteer.computer_skills &&
                            volunteer.computer_skills.map((skill: string) => (
                              <li key={volunteer.id}>{skill}</li>
                            ))}
                        </ul>
                        <p className="font-semibold">Media Skills:</p>
                        <ul>
                          {volunteer.media_skills &&
                            volunteer.media_skills.map((skill: string) => (
                              <li key={volunteer.id}>{skill}</li>
                            ))}
                        </ul>
                        <p className="font-semibold">Acheivements:</p>
                        <p>{volunteer.acheivements}</p>
                        <p className="font-semibold">Interested Areas:</p>
                        <p>{volunteer.interested_areas}</p>
                      </div>
                      <div className="p-4 flex flex-col space-y-2">
                        <h1 className="font-bold text-center">
                          Emergency Details
                        </h1>
                        <p className="font-semibold">Guardian Name:</p>
                        <p> {volunteer.guardian_name}</p>
                        <p className="font-semibold">Guardian Occupation:</p>
                        <p> {volunteer.guardian_occupation}</p>
                        <p className="font-semibold">Guardian Contact Number:</p>
                        <p> {volunteer.guardian_number}</p>
                      </div>
                      <div className="p-4 flex flex-col space-y-2">
                          <h1 className="font-bold text-center">
                            Other Details
                          </h1>
                          <p className="font-semibold">New Member:</p>
                          <p> {volunteer.new_member}</p>
                          <p className="font-semibold">How They Found Us:</p>
                          <ul>
                            {volunteer.about_us &&
                              volunteer.about_us.map((source: string) => (
                                <li key={volunteer.id}>{source}</li>
                              ))}
                          </ul>
                        </div>
                    </ScrollArea>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction onClick={async () => await changeVolunteerStatus(volunteer.id, "rejected")}>Reject</AlertDialogAction>
                    <AlertDialogAction onClick={async () => await changeVolunteerStatus(volunteer.id, "accepted")}>Approve</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default VolunteerApprovalTable;
