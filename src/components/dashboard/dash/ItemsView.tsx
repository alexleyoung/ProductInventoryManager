import { getItems } from "@/actions/crud";
import { DataTable, columns } from "@/components/dashboard/DataTable";

const ItemsView = async () => {
  const items = await getItems();

  return (
    <div className='container p-4'>
      <DataTable columns={columns} data={items} />
    </div>
  );
};

export default ItemsView;
