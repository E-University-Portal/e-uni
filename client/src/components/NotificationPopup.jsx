import { Card, CardHeader, CardTitle } from "./ui/card";

export default function NotificationPopup() {
  return (
    <Card className="z-[10000] mt-4">
      <CardHeader>
        <CardTitle className="text-xl">Notifications</CardTitle>
        <hr />
      </CardHeader>
    </Card>
  );
}
