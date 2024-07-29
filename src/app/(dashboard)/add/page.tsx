import AddForm from "@/components/dashboard/add/AddForm";

const Add = () => {
  return (
    <section className='w-full h-screen p-4 grid place-items-center'>
      <div className='w-96 p-4 flex flex-col gap-4'>
        <h1 className='text-2xl font-medium'>Add a New Product</h1>
        <AddForm />
      </div>
    </section>
  );
};

export default Add;
