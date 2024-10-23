import { Calendar } from "lucide-react";

interface DateRangeProps {
  date: string;
}

export default function DateRange({ date }: DateRangeProps) {
  return (
    <div className="inline-flex items-center justify-center rounded-md md:text-xs font-medium border border-input bg-transparent shadow-sm h-9 px-4 py-2 mr-2 text-[10px]">
      <Calendar className="mr-2 h-[12px] w-[12px]" />
      {date}
    </div>
  );
}
