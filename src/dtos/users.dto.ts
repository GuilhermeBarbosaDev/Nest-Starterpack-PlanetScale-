import { IsString, IsEmail, IsPhoneNumber, IsDateString } from 'class-validator'

export class UsersDto {
    
  @IsString({ message: ({ value }) => `Value '${value}' is not valid` })
  name: string

  @IsEmail()
  email: string

  @IsPhoneNumber('BR')
  cellphone: string

  @IsDateString()
  birth_date: Date
    
}