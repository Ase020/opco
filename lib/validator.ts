import * as z from "zod";

export const trustAccFormSchema = z.object({
  bankId: z.string().length(7, { message: "Bank ID must be 7 characters." }),
  reportingDate: z.date(),
  bankAcc: z
    .string()
    .length(12, { message: "Bank Account No. must be 12 characters." }),
  trustAccCode: z.string(),
  orgReceivingDonation: z
    .string()
    .min(3, { message: "Organisation name must be atleast 3 characters." })
    .max(200, {
      message: "Organisation name must be less than 200 characters.",
    }),
  sectorCode: z.string(),
  trustAccIntCode: z.string(),
  openingBal: z
    .number()
    .min(0, { message: "Opening balance cannot be a negative value." }),
  interestEarned: z.number(),
  trustAccUtilized: z.string(),
});
