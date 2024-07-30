import ItemsView from "@/components/dashboard/dash/ItemsView";

export default function Home() {
  return (
    <section className='p-4 h-screen grid gap-4 grid-cols-1 lg:grid-cols-2'>
      <div className='flex flex-col gap-2 col-span-2 lg:col-span-1'>
        <h1 className='text-2xl font-medium'>Inventory</h1>
        <ItemsView />
      </div>
      <div className='size-full bg-blue-500'></div>
    </section>
  );
}
