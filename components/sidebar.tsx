import { aboutYou } from "@/lib/data";

export default function Sidebar() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow flex flex-col space-y-2 p-4 h-fit static md:sticky top-24">
      {/* Title/Name */}
      <h1 className="font-semibold leading-none tracking-tight">
        {aboutYou.name}
      </h1>
      {/* Description */}
      <p className="text-sm text-muted-foreground tracking-tight">
        {aboutYou.description}
        <a target="_blank" className="ml-1" href="https://github.com/29deepanshutyagi">My&nbsp;GitHub</a>
      </p>
    </div>
  );
}
