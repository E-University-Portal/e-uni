//import { Button } from "@/components/ui/button"
import LoginForm from "@/components/LoginForm";

// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function TabsChange() {
  return (
    <Tabs defaultValue="student" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="student">Student</TabsTrigger>
        <TabsTrigger value="faculty">Faculty</TabsTrigger>
      </TabsList>
      <TabsContent value="student">
        <LoginForm />
      </TabsContent>
      <TabsContent value="faculty">
        <LoginForm />
      </TabsContent>
    </Tabs>
  );
}
