import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "./ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function UploadJournalForm() {
  const [date, setDate] = useState();
  const [selectedIndex, setSelectedIndex] = useState("");

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Journal Form</CardTitle>
        <CardDescription>Please fill in all the details</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-row space-x-6 ">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="index">Index</Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Input
                      id="index"
                      placeholder="Select Index Used"
                      value={selectedIndex}
                      readOnly
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Index Types</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onSelect={() => handleSelect("SCI")}>
                      SCI
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => handleSelect("SCIE")}>
                      SCIE
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => handleSelect("SSCI")}>
                      SSCI
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => handleSelect("ESCI")}>
                      ESCI
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => handleSelect("SCOPUS")}>
                      SCOPUS
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => handleSelect("Other")}>
                      Other
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="dob">Publication Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <Label htmlFor="Title">Title</Label>
              <Input id="title" placeholder="Enter Title" />
            </div>

            <div className="flex flex-col space-y-2">
              <Label htmlFor="AuthorList">Author List</Label>
              <Input id="AuthorList" placeholder="Enter List of Authors" />
            </div>

            <div className="flex flex-col space-y-2">
              <Label htmlFor="supervisor">Main Supervisor</Label>
              <Input
                id="supervisor"
                placeholder="Enter Name of Main Supervisor"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <Label htmlFor="role">Role of Person Uploading</Label>
              <Input id="role" placeholder="What is your role?" />
            </div>

            <div className="flex flex-row space-x-4 ">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="address">No. of Co-Authors</Label>
                <Input id="address" placeholder="" />
              </div>
              <div className="flex flex-col  space-y-2">
                <Label htmlFor="state">No. of Pages</Label>
                <Input id="state" placeholder="" />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="pincode">Paid/Unpaid</Label>
                <Input id="pincode" placeholder="" />
              </div>
            </div>

            <div className="flex flex-row space-x-4 ">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="branch">Branch</Label>
                <Input id="branch" placeholder="Enter your branch" />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="degree">Degree</Label>
                <Input id="degree" placeholder="Enter your degree" />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="section">Section</Label>
                <Input id="section" placeholder="Enter your section" />
              </div>
            </div>
            <div className="flex flex-row space-x-10">
              <Button>Upload Documents</Button>
              <Button>Submit</Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
