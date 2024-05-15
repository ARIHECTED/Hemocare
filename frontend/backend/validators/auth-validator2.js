const { z } = require("zod");

// Creating an object schema
const hospitalSchema = z.object({
  hospital_name: z
    .string({ required_error: "Hospital Name is required" })
    .trim()
    .min(3, { message: "Hospital name must be atleast of 3 characters" })
    .max(255, {
      message: "Hospital name must not be more than 255 characters",
    }),
  Email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Email is Invalid" })
    .min(3, { message: "Email must be atleast of 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  Password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(7, { message: "Password must be atleast of 7 characters" })
    .max(1024, { message: "Password must not be more than 1024 characters" }),
  Address: z
    .string({ required_error: "Address is required" })
    .trim()
    .min(1, { message: "Address must be atleast of 7 characters" })
    .max(255, { message: "Address must not be more than 255 characters" }),
  Phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10, { message: "Phone number must be atleast of 10 characters" })
    .max(255, { message: "Phone number must not be more than 255 characters" }),
});
module.exports = hospitalSchema;
