const { z } = require("zod");

// creating an object schema
const donorSchema = z.object({
  fullName: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast of 3 character." })
    .max(255, { message: "Name must not be more than 255 characters" }),
  Email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Email address Invalid" })
    .min(3, { message: "Email format must be more than 3 characters." })
    .max(255, { message: "Email must not be more than 255 characters" }),
  Password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(7, { message: "Password must be atleast of 7 character." })
    .max(1024, { message: "Password must not be more than 1024 characters" }),
  Address: z
    .string({ required_error: "Address is required" })
    .trim()
    .min(3, { message: "Address must be atleast of 3 character." })
    .max(255, { message: "Address must not be more than 255 characters" }),
  Phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10, { message: "Phone must be atleast of 10 character." })
    .max(20, { message: "Phone must not be more than 255 characters" }),
  Age: z
    .string({ required_error: "Age is required" })
    // .number({required_error:"Age is required"})
    // .int()
    .min(2, { message: "Age must be atleast of 2 character." })
    .max(255, { message: "Age must not be more than 255 characters" }),
  bloodGroup: z
    .string({ required_error: "Blood Group is required" })
    .trim()
    .min(1, { message: "Blood must be atleast of 1 character." })
    .max(255, { message: "Blood must not be more than 255 characters" }),
  LastDonation: z
    .string({ required_error: "Last Donation data is required" })
    //.date()
    .trim(),
  disease: z.string({ required_error: "Medical History is required" }),
});
module.exports = donorSchema;
