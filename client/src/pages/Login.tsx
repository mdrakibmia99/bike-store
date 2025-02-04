import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Form,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomInputField from "@/components/custom-input/CustomInputField";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { verifyToken } from "@/utils/verifyToken";
import { selectCurrentUser, setUser } from "@/redux/features/auth/authSlice";
import BackHome from "@/components/shared/navbar/BackHome";

// Improved schema with additional validation rules
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(3, { message: "Password must be at least 6 characters long" })
    .regex(/[a-zA-Z0-9]/, { message: "Password must be alphanumeric" }),
});

export default function LoginPreview() {

  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate=useNavigate()
  const location=useLocation()
  const token = useAppSelector(selectCurrentUser)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "customer@gmail.com",
      password: "customer",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const toastId = toast.loading('Logging in');
    try{
      const userInfo={
          email:values.email,
          password:values.password
      }
      const res=await login(userInfo).unwrap();

      const user = verifyToken(res.data.token)
      dispatch(setUser({user:user,token:res?.data.token}))
      toast.success('Logged in successful', { id: toastId, duration: 2000 });
      navigate(location?.state || '/', { replace: true })


  }catch{
      toast.error('Email or password incorrect!', { id: toastId, duration: 2000 });
  }
  }
if(token){
  return <BackHome message="YOu Are Already Login!"/>
}
  return (
    <div className="h-[100vh] grid place-content-center">
      <Card className="mx-auto w-full md:w-96 lg:w-96 relative">
      <p onClick={()=>navigate('/')} className="border inline font-bold shadow-md hover:shadow-sm hover:cursor-pointer px-3 py-1 rounded-full absolute top-0 right-0 m-2">X</p>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4 ">
                <CustomInputField
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  control={form.control}
                />
                {/* password  */}
                <CustomInputField
                  name="password"
                  label="Password"
                  placeholder="*****"
                  type="password"
                  control={form.control}
                />

                <Link to="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
                <Button type="submit" className="w-full">
                  Login
                </Button>
                {/* <Button variant="outline" className="w-full">
                  Login with Google
                </Button> */}
              </div>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
