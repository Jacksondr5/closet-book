"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type z } from "zod";

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
import { ColorGroup } from "~/components/color-group";
import { useToast } from "~/hooks/use-toast";
import { api } from "~/trpc/react";
import { createGarmentInputSchema } from "~/server/api/zod";
import { SeasonGroup } from "~/components/season-group";
import { GarmentTypeGroup } from "~/components/garment-type-group";

type FormData = z.infer<typeof createGarmentInputSchema>;

export default function NewGarmentPage() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(createGarmentInputSchema),
    defaultValues: {
      quantity: 1,
      type: "jacket",
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
                <FormControl>
                  <GarmentTypeGroup
                    type="single"
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
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color</FormLabel>
                <FormControl>
                  <ColorGroup
                    type="single"
                    garmentType={form.watch("type")}
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
              name="styleSeasons"
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
              name="weatherSeasons"
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
