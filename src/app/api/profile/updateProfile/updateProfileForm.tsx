import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { updateProfileSchema } from "@/schema/updateProfileSchema";
import type * as z from "zod";

type UpdateProfileInputs = z.infer<typeof updateProfileSchema>;

export default function UpdateProfileForm({ defaultValues }: { defaultValues: UpdateProfileInputs }) {
  const form = useForm<UpdateProfileInputs>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues,
  });

  const { handleSubmit, formState: { errors, isSubmitting } } = form;

  const onSubmit = async (data: UpdateProfileInputs) => {
    // TODO: Implement API call
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">Update Profile</h2>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Updating..." : "Update Profile"}
        </Button>
      </form>
    </Form>
  );
}