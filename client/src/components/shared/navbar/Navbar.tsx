import {  Menu,  } from "lucide-react";

import { cn } from "@/lib/utils";


import { Button, buttonVariants } from "@/components/ui/button";
import {
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import navbarImg from "@/assets/images/bike-logo/bike-img-logo.png"


const Navbar = () => {
  return (
    <section className="py-4 bg-black">
      <div className="container mx-auto">
        <nav className="hidden justify-between lg:flex lg:items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
            {/* <RiMotorbikeFill className="w-9 h-9 text-orange-500" /> */}
              {/* <span className="text-lg font-semibold">Royal Knight</span> */}
              <img src={navbarImg} className="w-28" alt="logo" />
            </div>
            <div className="flex items-center text-white font-bold">
              <ul className="flex gap-6">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="lg">
              Log in
            </Button>
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

