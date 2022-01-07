import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class BanUserDto {
   @ApiProperty({example: 1, description: 'Id пользователя'})
   @IsNumber({}, {message: "Должно быть числом"})
   readonly userId: number
   @ApiProperty({example: "За хулиганство", description: 'Причина бана'})
   @IsString({message: "Должно быть строкой"})
   readonly banReason: string
}