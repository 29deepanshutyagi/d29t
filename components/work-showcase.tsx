import { WorkExperience } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import DateRange from "./date-range";
import { ExternalLink } from "lucide-react";

interface WorkShowcaseProps {
  experience: WorkExperience;
  whetherlast: boolean;
}

export default function WorkShowcase({
  experience,
  whetherlast,
}: WorkShowcaseProps) {
  return (
    <div className="">
      <div className="space-y-2 ">
        <div className="flex justify-between">
          <div className="flex items-center md:space-x-4 space-x-2 mr-2">
            <Avatar>
              <AvatarImage src={experience.logo} />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <h3 className="font-semibold leading-none tracking-tight">
              {experience.company}
            </h3>
          </div>
          <DateRange date={experience.years} />
        </div>
        <p className="text-sm text-muted-foreground pb-2">
          {experience.position}: &nbsp;
          {experience.description}
        {!!experience.link ? <a target="_blank" className="ml-1" href={experience.link}>visit</a> : null}
        </p>
        {whetherlast ? <></> : <Separator />}
      </div>
    </div>
  );
}
