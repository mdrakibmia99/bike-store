import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import CustomInputField from "@/components/custom-input/CustomInputField";

// Schema for contact form validation
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" }),
});

export default function ContactFormPreview() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Simulate a successful contact form submission
      console.log(values);
      toast.success("Your message has been sent successfully!");
    } catch (error) {
      console.error("Error submitting contact form", error);
      toast.error("Failed to send your message. Please try again.");
    }
  }

  return (
    <div className="h-fit grid place-content-center">
         <div className=" flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Contact Us</h1>
          <p className="text-center text-gray-600 mb-8">
            Have any questions or need assistance? Reach out to us through the following channels:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Address Section */}
            <div className="flex flex-col items-center text-center">
              <FaMapMarkerAlt className="text-primary-blue text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-700">Our Address</h3>
              <p className="text-gray-600">Gazipur, Dhaka, Bangladesh</p>
            </div>

            {/* Phone Section */}
            <div className="flex flex-col items-center text-center">
              <FaPhone className="text-primary-blue text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
              <p className="text-gray-600">+880 123-456-7890</p>
            </div>

            {/* Email Section */}
            <div className="flex flex-col items-center text-center">
              <FaEnvelope className="text-primary-blue text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-700">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:devrakibmia@gmail.com" className="hover:text-primary-blue">
                  devrakibmia@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="mx-auto w-full md:w-96 lg:w-96">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Contact Us</CardTitle>

        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4">
                {/* Name Field */}
                <CustomInputField
                  name="name"
                  label="Full Name"
                  placeholder="Enter Full Name"
                  type="text"
                  control={form.control}
                />

                {/* Email Field */}
                <CustomInputField
                  name="email"
                  label="Email"
                  placeholder="Enter email address"
                  type="email"
                  control={form.control}
                />

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="message">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          id="message"
                          placeholder="Your message..."
                          autoComplete="off"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
        </div>
      </div>
    </div>
    </div>
  );
}
