import { generateText } from "@/actions/gemini";
import ItemsView from "@/components/dashboard/ItemsView";

const Home = async () => {
  return (
    <section className='p-4 h-screen grid gap-4'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-medium'>Inventory</h1>
        <ItemsView />
      </div>
    </section>
  );
};

export default Home;
