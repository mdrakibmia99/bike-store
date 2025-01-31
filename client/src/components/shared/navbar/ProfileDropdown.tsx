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

export function ProfileDropdown({user}:{user: TUser}) {

  const dispatch = useAppDispatch();
  const [logOut] = useLogOutMutation();
  const handleLogOut = async () => {
    dispatch(logout());
    toast.success("logout!");
    await logOut({});
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="profile image"
          />
          <AvatarFallback>Profile</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 mt-8 p-2  ">
        <DropdownMenuItem className="cursor-pointer border-b hover:text-primary-red">
          {user?.name}
        </DropdownMenuItem>
        <Link to="/dashboard">
          <DropdownMenuItem className="cursor-pointer border-b hover:text-primary-red">
            Dashboard
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem
          className="cursor-pointer hover:text-primary-red"
          onClick={handleLogOut}
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
