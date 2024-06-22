import LoginHeader from "@/components/LoginHeader";
import TabsChange from "@/components/TabsChange";
export default function StudentLoginPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-[#EE0050] to-[#00A6CB]">
      <LoginHeader />
      <TabsChange />
    </div>
  );
}
