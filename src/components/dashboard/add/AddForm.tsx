"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addItem, updateItem } from "@/actions/crud";
import { Product } from "@/lib/types";

const formSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
  price: z.coerce.number().nonnegative(),
  quantity: z.coerce.number().nonnegative().min(0.000000000000001),
  unit: z.enum(["unit", "g", "kg", "oz", "lb", "ml", "l", "fl oz", "gal"]),
});

const AddForm = ({
  children,
  item,
  req,
}: {
  children: React.ReactNode;
  item?: Product;
  req: "create" | "update";
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: item ? item.name : "",
      description: item ? item.description : "",
      price: item ? item.price : 0,
      quantity: item ? item.quantity : 1,
      unit: item ? item.unit : "unit",
    },
  });

  const { toast } = useToast();

  const onSubmit = async (item: z.infer<typeof formSchema>) => {
    // Add the item to the database
    if (req === "create") {
      const err = await addItem(item);

      if (err) {
        console.error("Error adding product: ");
        toast({
          variant: "destructive",
          title: "Error!",
          description: "There was an issue creating the item.",
        });
      }

      toast({
        title: "Success!",
        description: "Item has been added to the database.",
      });
    } else if (req === "update") {
      // Update the item in the database
      const err = await updateItem(item);

      if (err) {
        console.error("Error updating product: ");
        toast({
          variant: "destructive",
          title: "Error!",
          description: "There was an issue updating the item.",
        });
      }
      toast({
        title: "Success!",
        description: "Item has been updated in the database.",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-4'>
        <FormField
          control={form.control}
          name='name'
          defaultValue={item ? item.name : ""}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='Name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder='Description' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='price'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input type='number' placeholder='0' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='grid grid-cols-3 gap-2'>
          <FormField
            control={form.control}
            name='quantity'
            render={({ field }) => (
              <FormItem className='col-span-2'>
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                  <Input type='number' placeholder='1' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='unit'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unit</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a timezone' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Generic</SelectLabel>
                        <SelectItem value='unit'>unit</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Mass</SelectLabel>
                        <SelectItem value='g'>g</SelectItem>
                        <SelectItem value='kg'>kg</SelectItem>
                        <SelectItem value='oz'>oz</SelectItem>
                        <SelectItem value='lb'>lb</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Volume</SelectLabel>
                        <SelectItem value='mL'>ml</SelectItem>
                        <SelectItem value='L'>L</SelectItem>
                        <SelectItem value='fl oz'>fl oz</SelectItem>
                        <SelectItem value='gal'>gal</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {children}
      </form>
    </Form>
  );
};

export default AddForm;
