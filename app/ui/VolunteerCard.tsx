import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface VolunteerCardProps {
  name: string
  profile_image: string
  university: string
  degree: string
}

export function VolunteerCard({ name , profile_image,university,degree}: VolunteerCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardContent className="pt-6 flex flex-col items-center">
        <Avatar className="h-16 w-16">
          <AvatarImage src={profile_image} alt={name} />
          <AvatarFallback className="bg-gray-200">
            {name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <h3 className="mt-4 text-lg font-medium">{name}</h3>
        <p className="mt-2 text-sm text-gray-500">{university}</p>
        <p className="mt-2 text-sm text-gray-500">{degree}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View Profile
        </Button>
      </CardFooter>
    </Card>
  )
}