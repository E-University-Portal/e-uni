import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex space-x-2 w-3/5">
      <div className="relative items-center w-full">
        <Input
          type="text"
          className="px-3 py-2 pr-10 rounded-3xl border-2 border-gray-900 focus-visible:ring-0 focus-visible:ring-offset-0 block w-full"
          placeholder="Search..."
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <Search />
        </button>
      </div>
    </div>
  );
}
