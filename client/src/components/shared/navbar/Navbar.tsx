import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import navbarImg from "@/assets/images/bike-logo/bike-img-logo.png";
import { Link } from "react-router-dom";
const menuList=[
  {id:1, name:"HOME"},
  {id:2, name:"ABOUT"},
  {id:3, name:"CONTACT"},
  {id:4, name:"SERVICES"}
]

const Navbar = () => {
  return (
    <section className="py-4 bg-black">
      <div className="container mx-auto">
        <nav className="hidden justify-between lg:flex lg:items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <img src={navbarImg} className="w-28" alt="logo" />
            </div>
            <div className="flex items-center text-white  font-bold">
              <ul className="flex gap-6">
                {
                  menuList.map((item)=>(
                    <li className="relative group" key={item.id}>
                  <span className="cursor-pointer hover:text-primary-red transition-all duration-300">{item.name}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary-red transition-all duration-300 group-hover:w-full"></span>
                </li>))
                }
                {/* <li className="relative group">
                  <span className="cursor-pointer">HOME</span>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group">
                  <span className="cursor-pointer">ABOUT</span>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group">
                  <span className="cursor-pointer">CONTACT</span>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="flex gap-2">
          <Link to="/login">
            <Button variant="outline" size="lg">
              Log in
            </Button>
              </Link>
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
                  <Button variant="outline">Log in</Button>
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
