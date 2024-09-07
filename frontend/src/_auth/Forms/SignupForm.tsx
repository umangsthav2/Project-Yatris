import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Loader from "@/components/shared/Loader"

import {Link} from "react-router-dom"

import {Form, FormControl, FormField, FormItem,FormLabel, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {SignupValidation} from "@/lib/Validation"



const SignupForm = () => {
    const isloading = false;

    // 1. Define your form.
   const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      username: '',
      password: '',
      name:'',
      email:'',
    },
  })
 
    // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SignupValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

    return (
        <Form {...form}>
            <div className="sm:w-420 flex-center flex-col">
                <img src="./assets/images/logo.svg" alt="logo" className="flex "/>
                <h2 className="h3-bold md:h2-bold pt-4 sm:pt-10">Create a new account.</h2>
                <p className="text-light-3 small-medium md:base-regular">To use Digital Yatris, enter your account details.</p>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
                    
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name:</FormLabel>
                                        <FormControl>
                                            <Input type="text" className="shad-input" placeholder="Enter full name" {...field} />
                                    </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>User Name:</FormLabel>
                                        <FormControl>
                                            <Input type="text" className="shad-input" placeholder="Create username" {...field} />
                                    </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email:</FormLabel>
                                        <FormControl>
                                            <Input type="email" className="shad-input" placeholder="Enter your email" {...field} />
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
                                            <Input type="password" className="shad-input" placeholder="Create password" {...field} />
                                    </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />

                <Button type="submit" className="shad-button_primary">
                    {isloading ? (
                    <div className="flex-center gap-2">
                        <Loader />Loading...
                    </div> 
                    ): "Sign-up"
                    }
                </Button>
                <p className="text-small-regular text-light-2 text-center mt-2">
                    Already have an account?
                    <Link to="/sign-in" className="text-primary-500 text-small-semibold ml-1">Log in</Link>
                </p>
            </form>
          </div>
        </Form>
      )
}

export default SignupForm