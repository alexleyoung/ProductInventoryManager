import Sidebar from "@/components/dashboard/Sidebar";

const DashLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <section className='ml-[4.3rem]'>{children}</section>
    </>
  );
};

export default DashLayout;
