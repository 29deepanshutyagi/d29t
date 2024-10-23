import { IconType } from "react-icons";

interface SocialOutlineProps {
  name: string;
  link: string;
  Icon: IconType;
}

export default function SocialOutline({ name, link, Icon }: SocialOutlineProps) {
  return (
    <a href={link} target="_blank" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
      <Icon className="h-4 w-4" />
    </a>
  );
}
