"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import CardWrapper from "./CardWrapper";
import * as z from "zod";
import { RegisterSchema } from "@/schema/RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "../ui/use-toast";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { register } from "@/actions/register";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    setLoading(true);

    register(data).then((res) => {
      if (res.error) {
        toast({
          title: "User Registeration Failed",
          description: res.error,
          variant: "destructive",
        });
      } else {
        toast({
          title: res.success,
          description: "Login to access dashboard",
        });
        setLoading(false);
        router.replace(`/login`);
      }
    });
    setLoading(false);
  };

  return (
    <div>
      <CardWrapper
        headerLabel="Create an accout"
        backButtonLabel="Already have an account?"
        backButtonHref="/login"
        showSocial
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="john cena" />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="john.cena@gmail.com"
                      type="email"
                    />
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="******" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              {loading ? (
                <Loader2 className="animate-spin w-5 h-5" />
              ) : (
                <span>Create an account</span>
              )}
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
};

export default RegisterForm;
