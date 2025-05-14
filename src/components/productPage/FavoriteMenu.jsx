import { BiHeart, BiSolidHeart } from "react-icons/bi";
import { useState } from "react";
import { toast } from "sonner";
import logoCustommize from "../../assets/images/custommike-navbar-logo.svg";

import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FavoriteMenu = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
    if (!isOn) {
      toast.success("Favorite added successfully");
    } else {
      toast.error("Favorite removed successfully");
    }
  };

  return (
    
      <Dialog>
      <DialogTrigger asChild>
        <button onClick={handleClick}>
          {isOn ? (
            <BiSolidHeart className="w-8 h-8 cursor-pointer text-primary-blue-500 hover:scale-110 transition-transform duration-300" />
          ) : (
            <BiHeart className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-300 hover:text-primary-blue-500" />
          )}
        </button>
      </DialogTrigger>

      <DialogContent className="bg-white border-none w-[90%] max-w-[600px]">
        <Card className="border-none shadow-none">
          <CardHeader className="text-center">
            <CardTitle className="text-5xl font-semibold text-center mb-10 mt-10">
              Join with one Click
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-center mb-10 w-full">
                    <button className="flex items-center w-[239px] h-[41px] bg-[#334DD8] py-2 rounded-full shadow-sm hover:bg-blue-700 text-white">
                      <img
                        src="https://www.google.com/favicon.ico"
                        alt="Google Logo"
                        className="w-8 h-8 mr-4 ml-1"
                      />
                      Sign in with Google
                    </button>
                  </div>

                  <div className="flex items-center mb-10">
                    <div className="flex-1 border-t border-gray-300"></div>
                    <div className="px-3 text-gray-500 text-sm font-medium">OR</div>
                    <div className="flex-1 border-t border-gray-300"></div>
                  </div>
                </div>

                <label className="block text-xl font-medium text-gray-900">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border p-2 rounded w-full h-[56px]"
                />

                <label className="block text-xl font-medium text-gray-900">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="* * * * * *"
                    className="border p-4 rounded w-full pr-10 h-[56px]"
                  />
                  <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500">
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </span>
                </div>

                <div className="text cursor-pointer text-gray-400 underline hover:underline">
                  Forgot Password?
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="text-2xl placeholder-gray-300 bg-[#334DD8] text-white py-2 px-3 w-[456px] h-[56px] rounded-full hover:bg-blue-700"
                  >
                    Sign in
                  </button>
                </div>

                <p className="text-sm text-center text-gray-400">
                  Don’t have an account with us?{" "}
                  <Link to ="/signup" className="underline text-black font-semibold">
                    Sign up here
                  </Link>
                </p>
                <div className="flex justify-center mb-10">
                  <img src={logoCustommize} alt="Logo" className="w-40" />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
export default FavoriteMenu;
