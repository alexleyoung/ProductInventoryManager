"use client";

import { getItems } from "@/actions/crud";
import { DataTable, columns } from "@/components/dashboard/DataTable";
import { Product } from "@/lib/types";
import { useState, useEffect } from "react";
import Recipes from "@/components/dashboard/Recipes";

const ItemsView = () => {
  const [items, setItems] = useState<Product[]>([]);

  const fetchData = async () => {
    const items = await getItems();
    setItems(items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <DataTable columns={columns} data={items} />
      <Recipes />
    </>
  );
};

export default ItemsView;
