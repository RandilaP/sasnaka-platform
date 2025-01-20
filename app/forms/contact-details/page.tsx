"use client"
import React from "react";
import { Contact } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import ContactDetailsForm from "@/app/ui/ContactDetailsForm";

function Page() {
  const [progress, setProgress] = React.useState(60)
   
    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(80), 500)
      return () => clearTimeout(timer)
    }, [])
  return (
    <div className="w-full flex justify-center p-4 flex-col pt-24">
      <div className="w-full flex align-center justify-center">
        <h1 className="font-semibold text-md text-center">Emergrency Contact Details</h1>
        <Contact size={18} className="my-auto ml-4" />
      </div>
      <div className="w-full flex justify-center mt-4">
        <Progress value={progress} className="w-1/4" />
      </div>
      <div className="w-full flex justify-center mt-4">
        <ContactDetailsForm />
      </div>
    </div>
  );
}

export default Page;
