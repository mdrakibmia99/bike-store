import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BiCartAdd } from "react-icons/bi";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import navbarImg from "@/assets/images/bike-logo/bike-img-logo.png";
import { Link, useLocation } from "react-router-dom";
import { ProfileDropdown } from "./ProfileDropdown";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentToken } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { TUser } from "@/types/types";

const menuList = [
  { id: 1, name: "HOME", link: "/" },
  { id: 2, name: "All PRODUCTS", link: "/bikes" },
  { id: 3, name: "SERVICES", link: "/service" },
  { id: 4, name: "ABOUT", link: "/about" },
  { id: 5, name: "CONTACT", link: "/contact" },
];

const Navbar = () => {
  const token = useAppSelector(selectCurrentToken);
  const location = useLocation();
  const cartItems = 22;
  let isUser;
  if (token) {
    isUser = verifyToken(token)  ;
  }

  return (
    <section className="py-4 bg-black sticky top-0 z-50">
      <div className="container mx-auto">
        <nav className="hidden justify-between gap-5 lg:flex lg:items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <img src={navbarImg} className="w-28" alt="logo" />
            </div>
            <div className="flex items-center text-white  font-bold">
              <ul className="flex gap-6">
                {menuList.map((item) => (
                  <li className="relative group" key={item.id}>
                    <Link to={item.link}>
                      <span
                        className={`cursor-pointer hover:text-primary-red transition-all duration-300 ${
                          item.link === location.pathname
                            ? "text-primary-red"
                            : ""
                        }`}
                      >
                        {item.name}
                      </span>
                    </Link>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary-red transition-all duration-300 group-hover:w-full"></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* right side like search add login buton option  */}
          <div className="flex gap-5 flex-1 items-center ">
            <input
              type="text"
              placeholder="Search by brand, name, or category"
              className="border border-gray-300 rounded-md flex-1 p-3 h-10 text-black" // Adjusted height and padding
            />
            <div className="text-white flex gap-2 space-x-2">
              <Link
                to="/cart"
                className="relative p-2 hover:scale-105 transition-all duration-300"
              >
                <BiCartAdd className="w-8 h-8 " />
                {cartItems > 0 && (
                  <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-2 py-1">
                    {cartItems}
                  </span>
                )}
              </Link>
            </div>
            {isUser ? (
              <ProfileDropdown user={isUser as TUser}/>
            ) : (
              <Link to="/login">
                <Button
                  variant="outline"
                  className="text-primary-red font-semibold text-lg hover:shadow-md h-10" // Ensure button height matches
                  size="lg"
                >
                  Log in
                </Button>
              </Link>
            )}
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <img src={navbarImg} className="w-20" alt="logo" />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold">
                        ROYAL KNIGHT
                      </span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="mb-6 mt-6 flex flex-col gap-4">
                  <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <Button
                    variant="outline"
                    className="text-primary-red font-semibold"
                  >
                    Log in
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
