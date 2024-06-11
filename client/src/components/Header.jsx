import { useState } from "react";
import { Bell, BellOff } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import ThemeBtn from "@/components/ThemeBtn";
export default function Header() {
  const [notificationsOn, setNotificationsOn] = useState(true);

  const toggleNotifications = () => {
    setNotificationsOn(!notificationsOn);
  };

  return (
    <>
      <div className="flex flex-row bg-white items-center justify-end p-4 space-x-4">
        <span className="mr-4">MyUni</span>
        <Popover>
          <PopoverTrigger>
            {notificationsOn ? (
              <Bell className="text-gray-600" />
            ) : (
              <BellOff className="text-gray-600" />
            )}
          </PopoverTrigger>
          <PopoverContent>Notifications:</PopoverContent>
        </Popover>
        {/* <Button onClick={toggleNotifications}>
          {notificationsOn ? "Turn Off Notifications" : "Turn On Notifications"}
        </Button> */}
        <ThemeBtn />
      </div>
    </>
  );
}
