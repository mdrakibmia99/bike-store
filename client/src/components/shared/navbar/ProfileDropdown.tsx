import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { useLogOutMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import { TUser } from "@/types/types";
import { Button } from "@/components/ui/button";

export function ProfileDropdown({ user }: { user: TUser }) {
  const dispatch = useAppDispatch();
  const [logOut] = useLogOutMutation();
  const handleLogOut = async () => {
    dispatch(logout());
    toast.success("logout!");
    await logOut({});
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="cursor-pointer">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="profile image"
          />
          <AvatarFallback>Profile</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-5 w-56  mr-20">
        <DropdownMenuItem className="flex flex-col items-center">
          <h1 className="w-full text-xl font-semibold text-center">
            {user.name.length >15 ? `${user?.name.slice(0,10)}...` :user.name }
          </h1>
        </DropdownMenuItem>
        <DropdownMenuItem>
          {user?.role === "admin" ? (
            <Link to={"/admin/dashboard"} className="w-full">
              <Button
                variant={"outline"}
                className="w-full hover:text-primary-red"
              >
                 Dashboard
              </Button>
            </Link>
          ) : (
            <Link to={"/user/dashboard"} className="w-full">
              <Button
                variant={"outline"}
                className="w-full hover:text-primary-red"
              >
             Dashboard
              </Button>
            </Link>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            onClick={handleLogOut}
            variant={"outline"}
            className="w-full bg-primary-red text-white hover:bg-red-700 hover:text-white"
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Avatar className="cursor-pointer">
    //       <AvatarImage
    //         src="https://github.com/shadcn.png"
    //         alt="profile image"
    //       />
    //       <AvatarFallback>Profile</AvatarFallback>
    //     </Avatar>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent className="w-48 mt-8 p-2  ">
    //     <DropdownMenuItem className="cursor-pointer border-b hover:text-primary-red">
    //       {user?.name}
    //     </DropdownMenuItem>
    //     <Link to="/dashboard">
    //       <DropdownMenuItem className="cursor-pointer border-b hover:text-primary-red">
    //         Dashboard
    //       </DropdownMenuItem>
    //     </Link>
    //     <DropdownMenuItem
    //       className="cursor-pointer hover:text-primary-red"
    //       onClick={handleLogOut}
    //     >
    //       Log out
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  );
}
