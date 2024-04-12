"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Datepicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { trustAccFormSchema } from "@/lib/validator";
import { trustAccDefaultValues } from "@/constants";

const EditForm = () => {
  const form = useForm<z.infer<typeof trustAccFormSchema>>({
    resolver: zodResolver(trustAccFormSchema),
    defaultValues: trustAccDefaultValues,
  });

  const onSubmit = (values: z.infer<typeof trustAccFormSchema>) => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-wrap gap-5">
          <FormField
            control={form.control}
            name="bankId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bank ID</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="reportingDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>REPORTING DATE</FormLabel>
                <FormControl>
                  <div className="flex items-center justify-center">
                    <Datepicker
                      selected={field.value}
                      onChange={(date: Date) => field.onChange(date)}
                      dateFormat={"dd/MM/yyyy"}
                      wrapperClassName="datePicker"
                      className="border px-3 py-2.5 rounded-md border-slate-200"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bankAcc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>BANK ACCOUNT NO.</FormLabel>
                <FormControl>
                  <Input placeholder="XXXXXXXXXXXX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="trustAccCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>TRUST A/C TYPE CODE</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="orgReceivingDonation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ORG RECEIVING DONATION</FormLabel>
                <FormControl>
                  <Input placeholder="Amref Health Africa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sectorCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SECTOR CODE</FormLabel>
                <FormControl>
                  <Input placeholder="-" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="trustAccIntCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>TRUST A/C INT UTILIZED</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="openingBal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>OPENING BALANCE</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="interestEarned"
            render={({ field }) => (
              <FormItem>
                <FormLabel>INTEREST EARNED</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="trustAccUtilized"
            render={({ field }) => (
              <FormItem>
                <FormLabel>TRUST A/C UTILIZED</FormLabel>
                <FormControl>
                  <Input placeholder="-" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default EditForm;
