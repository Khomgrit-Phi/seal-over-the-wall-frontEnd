import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

import {BiUser } from "react-icons/bi";
import { useAuth } from "../../context/AuthContext";


const ProfileMenu = () => {
  const {user} = useAuth();
  return (
    <div>
      <Menubar className="border-none">
      <MenubarMenu  >
        <MenubarTrigger ><BiUser className="w-6 h-6 hover:text-primary-blue-500 border-none" /></MenubarTrigger>
        <MenubarContent className="border-1 border-gray-200 bg-white">
        <MenubarItem inset className="text-lg ">Somchai Kitkardee</MenubarItem>
        <MenubarItem inset >{user.email}</MenubarItem>
        <MenubarSeparator className="border-1 border-gray-200" />
        <MenubarItem inset className="text-lg cursor-pointer ">Dashboard</MenubarItem>
        <MenubarItem inset className="text-lg cursor-pointer ">Order</MenubarItem>
        <MenubarItem inset className="text-lg cursor-pointer ">Create Hub</MenubarItem>
          <MenubarSeparator className="border-1 border-gray-200" />
          <MenubarItem inset className="text-lg cursor-pointer ">Following</MenubarItem>
          <MenubarItem inset className="text-lg cursor-pointer ">Account Setting</MenubarItem>
          <MenubarSeparator className="border-1 border-gray-200" />
          <MenubarItem inset className="text-lg cursor-pointer ">Sign out</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      </Menubar>
    </div>
  )
}
export default ProfileMenu