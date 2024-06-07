import {
  Card,
  CardContent,
  CardDescription,
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

export default function UploadPatentForm() {
  const [date, setDate] = useState();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Patent Form</CardTitle>
        <CardDescription>Please fill in all the details</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-row space-x-4 ">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="type">Type</Label>
                <Input id="type" placeholder="Enter Conference Type" />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="date">Conference Date</Label>
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
              <Label htmlFor="age">Title</Label>
              <Input id="title" placeholder="Enter Title" />
            </div>

            <div className="flex flex-col space-y-2">
              <Label htmlFor="authors">Author List</Label>
              <Input id="authors" placeholder="Enter authors" />
            </div>
            <div className="flex flex-col  space-y-2">
              <Label htmlFor="supervisor">Main Supervisor</Label>
              <Input id="supervisor" placeholder="Enter name of Supervisor" />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="roles">Role of Person Uploading</Label>
              <Input id="roles" placeholder="Your Role" />
            </div>

            <div className="flex flex-row space-x-4 ">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="address">No. of Co-Authors</Label>
                <Input id="address" placeholder="" />
              </div>
              <div className="flex flex-col  space-y-2">
                <Label htmlFor="pages">No. of Pages</Label>
                <Input id="pages" placeholder="" />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="value">Publication Date</Label>
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
