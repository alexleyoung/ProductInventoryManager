import ItemsView from "@/components/dashboard/ItemsView";

const Home = async () => {
  return (
    <section className='py-4 px-8 h-screen grid gap-4'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-medium'>Pantry</h1>
        <ItemsView />
      </div>
    </section>
  );
};

export default Home;
