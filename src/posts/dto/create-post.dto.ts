import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString, Length } from "class-validator"

export class CreatePostDto {
   @ApiProperty({example: 'Привет', description: 'Текст поста'})
   @IsString({message: "Должно быть строкой"})
   @Length(4, 16, {message: "Не меньше 4 и не больше 16"})
   readonly title: string
   @ApiProperty({example: 'Как дела? Расскажи о себе', description: 'Подробный текст поста'})
   @IsString({message: "Должно быть строкой"})
   @Length(4, 16, {message: "Не меньше 4 и не больше 16"})
   readonly content: string
   @ApiProperty({example: '1', description: 'Id Пользователя'})
   @IsNumber({}, {message: "Должно быть числом"})
   readonly userId: number
}