import { ZodValidationUserMessage } from '@/constants/Zod_validationMessage'
import {object, string} from 'zod'

export const userSignupZodValidation=object({
    username:string({
        required_error:ZodValidationUserMessage.REQUIRED_USERNAME_MESSAGE,
        invalid_type_error:ZodValidationUserMessage.INVALID_USERNAME_MESSAGE,
    }),
    email:string({
        required_error:ZodValidationUserMessage.REQUIRED_EMAIL_MESSAGE,
        invalid_type_error:ZodValidationUserMessage.INVALID_EMAIL_MESSAGE,
    }).email(),
    password:string({
        required_error:ZodValidationUserMessage.REQUIRED_PASSWORD_MESSAGE,
        invalid_type_error:ZodValidationUserMessage.INVALID_PASSWORD_MESSAGE,
    }).min(6)
 
})
.strict()



export const userLoginZodValidation=object({
    email:string({
        required_error:ZodValidationUserMessage.REQUIRED_EMAIL_MESSAGE,
        invalid_type_error:ZodValidationUserMessage.INVALID_EMAIL_MESSAGE,
    }).email(),
    password:string({
        required_error:ZodValidationUserMessage.REQUIRED_PASSWORD_MESSAGE,
        invalid_type_error:ZodValidationUserMessage.INVALID_PASSWORD_MESSAGE,
    }).min(6)
 
})
.strict()