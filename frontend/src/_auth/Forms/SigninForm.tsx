import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Loader from "@/components/shared/Loader";
import { Link } from "react-router-dom";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SigninValidation } from "@/lib/Validation";
import axios from "axios";
import { useState } from "react";

// Define the functional component
const SigninForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      username: '',
      password: '',
    },
  });



   const caller = async () =>
      {
          try
            {
              alert("Hello");
              var x = await axios.get("http://192.168.0.110:8000/api/testuser");
              console.log(x);
              
            }
          catch
            {
                console.log("Cannot log in.")
            }
      }
    
  // Define the submit handler
  const onLogin = async (values: z.infer<typeof SigninValidation>) => {
    setIsLoading(true);
    try {
      await axios.put("http://192.168.0.110:8000/api/signin", values);
      alert("Logged in successfully!");
    } catch (error) {
      console.error("Unable to log in.", error);
      alert("There was an error creating your account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img src="/assets/images/logo.svg" alt="logo" className="flex" />
        <h2 className="h3-bold md:h2-bold pt-4 sm:pt-10">Login into Digital Yatris.</h2>
        <p className="text-light-3 small-medium md:base-regular">Enter your account details.</p>
        <form onSubmit={form.handleSubmit(onLogin)} className="flex flex-col gap-5 w-full mt-4">

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User Name:</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" placeholder="username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password:</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" placeholder="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="shad-button_primary" onClick={caller}>
            {isLoading ? (
              <div className="flex-center gap-2">
                <Loader /> Loading...
              </div>
            ) : (
              "Sign-up"
            )}
          </Button>
          <p className="text-small-regular text-light-2 text-center mt-2">
            Don't have an account?
            <Link to="/sign-up" className="text-primary-500 text-small-semibold ml-1">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SigninForm;
