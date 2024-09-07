import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, {message:('Name is too short.')}).max(50,{message:('Name is to long.')}),
    username: z.string().min(2, {message:('Username is too short.')}).max(50,{message:('Username is to long.')}),
    password: z.string().min(8, {message:('Password must be of 8 characters.')}).max(16,{message:('Password is to long.')}),
    email: z.string().email(),
    phone: z.number().min(10, {message:('Number must consist of 8 digits.')}).max(10,{message:('Number should consist of only 10 digit.')}),
})

export const SigninValidation = z.object({
    username: z.string().min(2, {message:('Username is too short.')}).max(50,{message:('Username is to long.')}),
    password: z.string().min(8, {message:('Password must be of 8 characters.')}).max(16,{message:('Password is to long.')}),
})