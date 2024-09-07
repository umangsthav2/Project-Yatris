import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";

import { SignupValidation } from "@/lib/Validation";
import { Button } from "@/components/ui/button";
import Loader from "@/components/shared/Loader";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const SignupForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    
    // Define your form
    const form = useForm<z.infer<typeof SignupValidation>>({
        resolver: zodResolver(SignupValidation),
        defaultValues: {
            name: '',
            username: '',
            email: '',
            password: '',
        },
    });

    // Define a submit handler
    async function onSubmit(values: z.infer<typeof SignupValidation>) {
        setIsLoading(true);
        try {
            await axios.post("http://192.168.0.110:8000/api/signup", values);
            alert("User created successfully!");
        } catch (error) {
            console.error("Error creating user", error);
            alert("There was an error creating your account. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Form {...form}>
            <div className="sm:q-420 flex-center flex-col">
                <img src="/assets/images/logo.svg" alt="logo" />
                <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
                    Create an Account
                </h2>
                <p className="text-light-3 small-medium md:base-regular mt-2">
                    Enter your details for using Digital Yatris.
                </p>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name:</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
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
                                <FormLabel>Username:</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
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
                                    <Input type="email" className="shad-input" {...field} />
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
                                    <Input type="password" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="shad-button_primary">
                        {isLoading ? (
                            <div className="flex-center gap-2">
                                <Loader />Loading...
                            </div>
                        ) : "Sign up"}
                    </Button>
                </form>
                <p className="text-light-3 small-medium md:base-regular mt-2">
                    Already have an account? <Link className="custom-link" to="/sign-in"> Sign-in</Link>
                </p>
            </div>
        </Form>
    );
};

export default SignupForm;
