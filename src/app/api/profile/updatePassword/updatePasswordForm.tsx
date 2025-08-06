import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { updatePasswordSchema } from "@/schema/updatePasswordSchema";
import type * as z from "zod";

type UpdatePasswordInputs = z.infer<typeof updatePasswordSchema>;

export default function UpdatePasswordForm() {
  const form = useForm<UpdatePasswordInputs>({
    resolver: zodResolver(updatePasswordSchema),
  });

  const { handleSubmit, formState: { errors, isSubmitting } } = form;

  const onSubmit = async (data: UpdatePasswordInputs) => {
    
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">Update Password</h2>
        <FormField
          control={form.control}
          name="currentPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Current Password" {...field} />
              </FormControl>
              {errors.currentPassword && <span className="text-red-500 text-sm">{errors.currentPassword.message}</span>}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="New Password" {...field} />
              </FormControl>
              {errors.newPassword && <span className="text-red-500 text-sm">{errors.newPassword.message}</span>}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Confirm New Password" {...field} />
              </FormControl>
              {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Updating..." : "Update Password"}
        </Button>
      </form>
    </Form>
  );
}