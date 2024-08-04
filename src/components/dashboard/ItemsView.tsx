"use client";

import { getItems } from "@/actions/crud";
import { DataTable, columns } from "@/components/dashboard/DataTable";
import { Product } from "@/lib/types";
import { useState, useEffect } from "react";
import Recipes from "@/components/dashboard/Recipes";

const ItemsView = () => {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const items = await getItems();
      console.log(items);
      setItems(items);
    })();
  }, []);

  return (
    <div className='flex md:flex-col h-full gap-4'>
      <DataTable columns={columns} data={items} />
      <Recipes items={items} />
    </div>
  );
};

export default ItemsView;
