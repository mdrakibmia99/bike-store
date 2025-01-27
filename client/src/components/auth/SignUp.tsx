/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { PasswordInput } from "@/components/ui/password-input";
import { useSignUpMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";

export default function SignUp() {
  const navigate = useNavigate();
  const [signUp] = useSignUpMutation();
  // Use `react-hook-form` with validation schema
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onBlur", // Validate fields when they lose focus
  });

  async function onSubmit(values: FieldValues) {
    try {
      const result = await signUp(values);
      // console.log(result, "result");
      if (result.error) {
        toast.error("Email already exists");
      } else {
        toast.success("Signed up successfully", { duration: 2000 });
        form.reset();
        navigate('/login')
      }
    } catch (error) {
      if ((error as any).statusCode == 409) {
        toast.error("ALready signed up use this Email");
      } else {
        toast.error("Something went wrong");
      }
    }
  }

  return (
    <div className="h-svh w-full grid place-items-center">
      <Form {...form}>
        <div className="mx-auto p-1 relative lg:p-10 md:p-10 shadow-lg hover:shadow-xl rounded-sm w-full lg:w-96 md:w-96">
          <p
            onClick={() => navigate("/")}
            className="border inline font-bold shadow-md hover:shadow-sm hover:cursor-pointer px-3 py-1 rounded-full absolute top-0 right-0 m-2"
          >
            X
          </p>
          <h2 className="text-center mt-5 text-2xl font-semibold uppercase my-3">sign up</h2>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              SIGN UP
            </Button>
          </form>

          <div className="pt-5 text-center">
            <div className="flex w-full justify-between items-center gap-3">
              <div className="border-2 w-full"></div> <span>X</span>{" "}
              <div className="border-2 w-full"></div>
            </div>

            <Link
              to={"/login"}
              className="text-center w-full hover:text-blue-500"
            >
              ALREADY HAVE AN ACCOUNT?
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
}