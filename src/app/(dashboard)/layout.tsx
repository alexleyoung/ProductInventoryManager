import Sidebar from "@/components/dashboard/Sidebar";

const DashLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <main className='ml-[4.3rem]'>{children}</main>
    </>
  );
};

export default DashLayout;
