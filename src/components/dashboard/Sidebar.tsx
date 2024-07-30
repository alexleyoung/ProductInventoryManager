"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { LayoutPanelLeft, Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FigmaLogoIcon } from "@radix-ui/react-icons";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className='bg-background border-r border-primary-border w-[4.3rem] h-screen fixed flex flex-col justify-between items-center py-4 z-50'>
      {/* top half */}
      <div className='flex flex-col items-center justify-around gap-2'>
        <FigmaLogoIcon className='w-8 h-8' />
        <Separator />
        <Button variant='ghost' asChild>
          <Link href='/'>
            <LayoutPanelLeft
              className={pathname == "/" ? "text-selected" : ""}
            />
          </Link>
        </Button>
        <Button variant='ghost' asChild>
          <Link href='/add'>
            <Plus className={pathname == "/add" ? "text-selected" : ""} />
          </Link>
        </Button>
        <Separator />
      </div>

      {/* bottom half */}
      <div className='flex flex-col items-center justify-around gap-2'>
        <Separator />
        <Sheet>
          <SheetTrigger className='w-12'>
            <div className='hover:bg-accent transition-colors rounded-md'>
              {">"}
            </div>
          </SheetTrigger>
          <SheetContent side='left'>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </aside>
  );
};

export default Sidebar;
