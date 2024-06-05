import {
  GraduationCap,
  LineChart,
  Hash,
  Award,
  BookOpenText,
  Layers3,
} from "lucide-react";

export default function ProfileStats() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 p-4">
      <div className="flex p-4 items-center gap-2 hover:shadow-[0_1px_2px_0_rgb(0,0,0)">
        <div className="rounded-full bg-gradient-to-r from-[#A9F9A7] to-[#649363] p-2 w-fit">
          <GraduationCap />
        </div>
        <p className="text-xl font-medium">B Tech</p>
      </div>

      <div className="flex p-4 items-center gap-2 ">
        <div className="rounded-full bg-gradient-to-r from-[#F9A80A] to-[#966301] p-2 w-fit">
          <Layers3 />
        </div>
        <p className="text-xl font-medium">Computer Science</p>
      </div>

      <div className="flex p-4 items-center gap-2 ">
        <div className="rounded-full bg-gradient-to-r from-[#00FFD1] to-[#35A591] p-2 w-fit">
          <LineChart />
        </div>
        <p className="text-xl font-medium">9.8</p>
      </div>

      <div className="flex p-4 items-center gap-2 ">
        <div className="rounded-full bg-gradient-to-r from-[#FFA59F] to-[#99635F] p-2 w-fit">
          <Hash />
        </div>
        <p className="text-xl font-medium">2 Year</p>
      </div>

      <div className="flex p-4 items-center gap-2 ">
        <div className="rounded-full bg-gradient-to-r from-[#A1B0FF] to-[#000B43] p-2 w-fit">
          <BookOpenText />
        </div>
        <p className="text-xl font-medium">Artificial Intelligence</p>
      </div>

      <div className="flex p-4 items-center gap-2 ">
        <div className="rounded-full bg-gradient-to-r from-[#E0C9FD] to-[#867897] p-2 w-fit">
          <Award />
        </div>
        <p className="text-xl font-medium">4</p>
      </div>
    </div>
  );
}
