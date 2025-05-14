'use client';

import * as React from 'react';
import { Link } from 'react-router';
import CarouselPic from './CarouselPic';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';

function DropdownMenu() {
  return (
    <NavigationMenu className="">
      <NavigationMenuList className="">
        <NavigationMenuItem className="">
          <NavigationMenuTrigger className="text-lg  hover:text-primary-blue-500 ">Shop</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white rounded-xl shadow-2xl ">
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[572px] lg:grid-cols-2 border-none">
              <li className="">
                <NavigationMenuLink className="">
                  <div className="w-full h-[300px] bg-gray-200 ">
                    <CarouselPic />
                  </div>
                </NavigationMenuLink>
              </li>
              <div className="grid grid-cols-2 gap-8 ">
                <ul className=" text-lg">
                  <li className="text-gray-400">
                    <Link to="#">Collection</Link>
                  </li>
                  <li>
                    <Link to="#">Staff Pick</Link>
                  </li>
                  <li>
                    <Link to="#">Artist</Link>
                  </li>
                  <li>
                    <Link to="#">Trendy</Link>
                  </li>
                </ul>
                <ul className="border-none text-lg">
                  <li className="text-gray-400">
                    <Link to="#">Product</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shirt</Link>
                  </li>
                  <li>
                    <Link to="/shop">Mug</Link>
                  </li>
                  <li>
                    <Link to="/shop">Bag</Link>
                  </li>
                </ul>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="#" legacyBehavior passHref>
            <NavigationMenuLink className="text-lg hover:text-primary-blue-500">How to Work</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="#" legacyBehavior passHref>
            <NavigationMenuLink className="text-lg  hover:text-primary-blue-500">Express yourself</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default DropdownMenu;
