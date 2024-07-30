import ItemsView from "@/components/dashboard/dash/ItemsView";

export default function Home() {
  return (
    <section className='p-4 h-screen grid place-items-center'>
      <div className='p-4'>
        <h1 className='text-2xl font-medium'>Inventory</h1>
        <ItemsView />
      </div>
    </section>
  );
}
