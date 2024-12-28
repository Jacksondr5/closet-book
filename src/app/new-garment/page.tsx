"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { ColorSelect } from "~/components/color-select";
import { useToast } from "~/hooks/use-toast";
import { api } from "~/trpc/react";
import { createGarmentInputSchema } from "~/server/api/routers/garment";
import { garmentType, season } from "~/server/db/schema";
import { SeasonGroup } from "~/components/season-group";

type FormData = z.infer<typeof createGarmentInputSchema>;

export default function NewGarmentPage() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(createGarmentInputSchema),
    defaultValues: {
      quantity: 1,
    },
  });

  const createGarment = api.garment.create.useMutation({
    onSuccess: () => {
      toast({ title: "Success", description: "Garment created successfully" });
      router.push("/garments");
      router.refresh();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return (
    <div className="container py-10">
      <h1 className="mb-8 text-3xl font-bold">Add New Garment</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => createGarment.mutate(data))}
          className="max-w-md space-y-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Navy Blazer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {garmentType.enumValues.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color</FormLabel>
                <FormControl>
                  <ColorSelect
                    type={
                      form.watch("type") as
                        | "jacket"
                        | "shirt"
                        | "trousers"
                        | "shoes"
                    }
                    value={field.value}
                    onValueChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={1}
                    {...field}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="styleSeason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Style Season</FormLabel>
                  <FormControl>
                    <SeasonGroup
                      type="multiple"
                      onValueChange={field.onChange}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="weatherSeason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weather Season</FormLabel>
                  <FormControl>
                    <SeasonGroup
                      type="multiple"
                      onValueChange={field.onChange}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full">
            Create Garment
          </Button>
        </form>
      </Form>
    </div>
  );
}
