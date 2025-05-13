import {
  Menubar,
  // MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  // MenubarRadioGroup,
  // MenubarRadioItem,
  MenubarSeparator,
  // MenubarShortcut,
  // MenubarSub,
  // MenubarSubContent,
  // MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { BiUser } from "react-icons/bi";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { logoutUser } from "../../services/authService";

const ProfileMenu = () => {

  const { user, loading, setUser } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logoutUser();
      setUser(null);
      console.log(user);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Menubar className="border-none">
        <MenubarMenu>

          {/* อันนี้ปุ่ม User */}
          {!user ?
            (<Link to="/login"><BiUser className="w-6 h-6 border-none hover:text-primary-blue-500" /></Link>)
            : (<MenubarTrigger><BiUser className="w-6 h-6 border-none hover:text-primary-blue-500" /></MenubarTrigger>)}

          {user && !loading && (
            <MenubarContent className="bg-white border-gray-200 border-1">

              {/* TODO: ให้แก้ตรงนี้ให้ดึง firstName + lastName จากหลังบ้านมา (ต้องแก้ Controller ก่อน) */}
              {/* <MenubarItem inset className="text-lg ">{user.firstName} {user.lastName}</MenubarItem> */}
              <MenubarItem inset className="text-lg ">{user.firstName} {user.lastName}</MenubarItem>
              <MenubarItem inset >{user.email}</MenubarItem>
              <MenubarSeparator className="border-gray-200 border-1" />
              <MenubarItem inset className="text-lg cursor-pointer ">Dashboard</MenubarItem>
              <MenubarItem inset asChild className="text-lg cursor-pointer"><Link to="/cart">Order</Link></MenubarItem>
              <MenubarItem inset className="text-lg cursor-pointer ">Create Hub</MenubarItem>
              <MenubarSeparator className="border-gray-200 border-1" />
              <MenubarItem inset className="text-lg cursor-pointer ">Following</MenubarItem>
              <MenubarItem inset className="text-lg cursor-pointer ">Account Setting</MenubarItem>
              <MenubarSeparator className="border-gray-200 border-1" />
              <MenubarItem inset onSelect={() => handleSignOut()} className="text-lg cursor-pointer ">Sign out</MenubarItem>
            </MenubarContent>
          )}

        </MenubarMenu>
      </Menubar>
    </div>
  )
}
export default ProfileMenu