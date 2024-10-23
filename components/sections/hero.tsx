import { aboutYou, marketingHeadlines, skills } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import ActionButton from "@/components/action-button";
import SkillOutline from "@/components/skill-outline";

export default function Hero() {
  return (
    <section id="home" key="home" className="space-y-5">
      <div className="text-2xl font-bold tracking-tight">
        {marketingHeadlines.mainHeadline}
      </div>
      <div className="text-muted-foreground">
        {marketingHeadlines.subHeadline}
      </div>
      <div>
        <Separator />
      </div>
      <div className="flex justify-between">
        <ActionButton actionText="Get in Touch" />
        <div className="space-y-1">
          <h3 className="font-medium leading-none">
            {aboutYou.yearsOfExperience}
          </h3>
          <p className="text-xs text-muted-foreground">Experience</p>
        </div>
        <div className="space-y-1">
          <h3 className="font-medium leading-none">{aboutYou.location}</h3>
          <p className="text-xs text-muted-foreground">Location</p>
        </div>
      </div>
      <div className="space-y-1">
        <div className="space-y-2">
          {skills.map((skill) => (
            <SkillOutline
              key={skill.text}
              Icon={skill.icon}
              text={skill.text}
            />
          ))}
        </div>
        <p className="text-xs text-muted-foreground">Tech stack</p>
      </div>
    </section>
  );
}
