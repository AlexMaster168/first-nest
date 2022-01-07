import { Body, Controller, Post } from "@nestjs/common"
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"
import { CreateUserDto } from "../users/dto/create-user.dto"
import { AuthService } from "./auth.service"
import { User } from "../users/users.model"

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {

   constructor(private authService: AuthService) {}

   @ApiOperation({summary: 'Авторизация пользователей'})
   @ApiResponse({status: 200, type: User})
   @Post('/login')
   login(@Body() userDto: CreateUserDto) {
      return this.authService.login(userDto)
   }

   @ApiOperation({summary: 'Создание пользователей'})
   @ApiResponse({status: 200, type: User})
   @Post('/registration')
   registration(@Body() userDto: CreateUserDto) {
      return this.authService.registration(userDto)
   }
}
