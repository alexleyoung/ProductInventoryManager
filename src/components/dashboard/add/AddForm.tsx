"use client";

import { Button } from "@/components/ui/button";
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

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addItem } from "@/actions/crud";

const formSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.coerce.number().nonnegative(),
  quantity: z.coerce.number().nonnegative().int().min(1),
  unit: z.enum(["unit", "g", "kg", "oz", "lb", "ml", "l", "fl oz", "gal"]),
});

const AddForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      quantity: 1,
      unit: "unit",
    },
  });

  const onSubmit = async (item: z.infer<typeof formSchema>) => {
    console.log(item);
    const err = await addItem(item);

    if (err) {
      console.error("Error adding product: ");
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
                <Input type='number' placeholder='Price' {...field} />
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
                  <Input type='number' placeholder='Quantity' {...field} />
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
        <Button type='submit'>Add</Button>
      </form>
    </Form>
  );
};

export default AddForm;
