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
export default function UploadBookForm() {
  const [date, setDate] = useState();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Book Form</CardTitle>
        <CardDescription>Please fill in all the details</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-row space-x-4 ">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
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
              <div className="flex flex-col space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" placeholder="Enter your age" />
              </div>
            </div>
            <div className="flex flex-row space-x-4 ">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="mobile">Mobile</Label>
                <Input id="mobile" placeholder="Enter your mobile number" />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email">Email-ID</Label>
                <Input id="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="flex flex-row space-x-4 ">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Enter your address" />
              </div>
              <div className="flex flex-col  space-y-2">
                <Label htmlFor="state">State</Label>
                <Input id="state" placeholder="Enter your state" />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="pincode">PIN Code</Label>
                <Input id="pincode" placeholder="Enter your PIN code" />
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
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
