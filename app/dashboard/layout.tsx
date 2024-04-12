import { UserButton } from "@clerk/nextjs";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-defaultBackground">
      <div className="flex justify-between items-center w-full p-4 shadow-md">
        <h1 className="text-white font-bold text-2xl">Dashboard</h1>
        <UserButton afterSignOutUrl="/" />
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
