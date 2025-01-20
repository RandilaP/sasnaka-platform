import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface VolunteerCardProps {
  name: string
  level: number
  memberCount: number
}

export function VolunteerCard({ name, level, memberCount }: VolunteerCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardContent className="pt-6 flex flex-col items-center">
        <Avatar className="h-16 w-16">
          <AvatarFallback className="bg-gray-200">
            {name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <h3 className="mt-4 text-lg font-medium">{name}</h3>
        <p className="text-sm text-gray-500">Volunteer Level {level}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View Profile
        </Button>
      </CardFooter>
    </Card>
  )
}