// import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useState } from 'react';

export default function ProfilePage() {
  const [date, setDate] = useState();
  return (
    <div className='space-y-6'>
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className='grid w-full items-center gap-4'>
              <div className='flex flex-col Input relative'>
                <Textarea />
                <Button
                  variant='outline'
                  size='sm'
                  className='absolute right-2 bottom-2 border-black'
                >
                  Save
                </Button>
              </div>

              <div className='grid grid-cols-3 grid-rows-2 gap-4 p-4'>
                <div className='bg-red-500 p-4 rounded'>Item 1</div>
                <div className='bg-green-500 p-4 rounded'>Item 2</div>
                <div className='bg-blue-500 p-4 rounded'>Item 3</div>
                <div className='bg-yellow-500 p-4 rounded'>Item 4</div>
                <div className='bg-purple-500 p-4 rounded'>Item 5</div>
                <div className='bg-pink-500 p-4 rounded'>Item 6</div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Personal Info</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className='grid w-full items-center gap-4'>
              <div className='flex flex-row space-x-4 '>
                <div className='flex flex-col space-y-2'>
                  <Label htmlFor='name'>Name</Label>
                  <Input id='name' placeholder='Enter your name' />
                </div>
                <div className='flex flex-col space-y-2'>
                  <Label htmlFor='dob'>Date of Birth</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant='outline'
                        className={cn(
                          'w-[280px] justify-start text-left font-normal',
                          !date && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className='mr-2 h-4 w-4' />
                        {date ? format(date, 'PPP') : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0'>
                      <Calendar
                        mode='single'
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className='flex flex-col space-y-2'>
                  <Label htmlFor='age'>Age</Label>
                  <Input id='age' placeholder='Enter your age' />
                </div>
              </div>
              <div className='flex flex-row space-x-4 '>
                <div className='flex flex-col space-y-2'>
                  <Label htmlFor='mobile'>Mobile</Label>
                  <Input id='mobile' placeholder='Enter your mobile number' />
                </div>
                <div className='flex flex-col space-y-2'>
                  <Label htmlFor='email'>Email-ID</Label>
                  <Input id='email' placeholder='Enter your email' />
                </div>
              </div>
              <div className='flex flex-row space-x-4 '>
                <div className='flex flex-col space-y-2'>
                  <Label htmlFor='address'>Address</Label>
                  <Input id='address' placeholder='Enter your address' />
                </div>
                <div className='flex flex-col  space-y-2'>
                  <Label htmlFor='state'>State</Label>
                  <Input id='state' placeholder='Enter your state' />
                </div>
                <div className='flex flex-col space-y-2'>
                  <Label htmlFor='pincode'>PIN Code</Label>
                  <Input id='pincode' placeholder='Enter your PIN code' />
                </div>
              </div>
              <div className='flex flex-row space-x-4 '>
                <div className='flex flex-col space-y-2'>
                  <Label htmlFor='branch'>Branch</Label>
                  <Input id='branch' placeholder='Enter your branch' />
                </div>
                <div className='flex flex-col space-y-2'>
                  <Label htmlFor='degree'>Degree</Label>
                  <Input id='degree' placeholder='Enter your degree' />
                </div>
                <div className='flex flex-col space-y-2'>
                  <Label htmlFor='section'>Section</Label>
                  <Input id='section' placeholder='Enter your section' />
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea />
        </CardContent>
      </Card>
    </div>
  );
}
