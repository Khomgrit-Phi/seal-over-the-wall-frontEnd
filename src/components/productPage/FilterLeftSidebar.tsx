"use client"
// @ts-ignore
import Filter from "../productPage/Filter"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"

import { BiSliderAlt } from "react-icons/bi";

const SHEET_SIDES = ["left"] as const;
type SheetSideType = (typeof SHEET_SIDES)[number];

export default function FilterLeftSidebar() {
  return (
    <div className="px-32">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button className="bg-[#334DD8] text-white w-24 px-3 py-2">
              Filter
              <BiSliderAlt className="ml-2" size={20} />
              </Button>
          </SheetTrigger>
          <SheetContent side={side} className=" w-full bg-white">

            <div className="grid gap-4 p-6">
              <Filter/>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
