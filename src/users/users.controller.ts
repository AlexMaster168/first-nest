import { Body, Controller, Delete, Get, Post, UseGuards } from "@nestjs/common"
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto"
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"
import { User } from "./users.model"
import { Roles } from "../auth/roles-auth.decorator"
import { RolesGuard } from "../auth/roles.guards"
import { AddRoleDto } from "./dto/add-role.dto"
import { BanUserDto } from "./dto/ban-user.dto"


@ApiTags('Пользователи')
@Controller("users")
export class UsersController {
   constructor(private usersService: UsersService) {}

   @ApiOperation({summary: 'Создание пользователей'})
   @ApiResponse({status: 200, type: User})
   @Post()
   create(@Body() userDto: CreateUserDto) {
      return this.usersService.createUser(userDto);
   }

   @ApiOperation({summary: 'Получить всех пользователей'})
   @ApiResponse({status: 200, type: [User]})
   @Roles("ADMIN")
   @UseGuards(RolesGuard)
   @Get()
   getAll() {
      return this.usersService.getAllUsers()
   }

   @ApiOperation({summary: 'Выдача ролей'})
   @ApiResponse({status: 200})
   @Roles("ADMIN")
   @UseGuards(RolesGuard)
   @Post('/role')
   addRole(@Body() dto: AddRoleDto) {
      return this.usersService.addRole(dto)
   }

   @ApiOperation({summary: 'Удаление ролей'})
   @ApiResponse({status: 200})
   @Roles("ADMIN")
   @UseGuards(RolesGuard)
   @Delete('/role')
   deleteRole(@Body() dto: AddRoleDto) {
      return this.usersService.deleteRole(dto)
   }

   @ApiOperation({summary: 'Забанить пользователя'})
   @ApiResponse({status: 200})
   @Roles("ADMIN")
   @UseGuards(RolesGuard)
   @Post('/ban')
   ban(@Body() dto: BanUserDto) {
      return this.usersService.ban(dto)
   }

   @ApiOperation({summary: 'Разбанить пользователя'})
   @ApiResponse({status: 200})
   @Roles("ADMIN")
   @UseGuards(RolesGuard)
   @Post('/antiban')
   antiBan(@Body() dto: BanUserDto) {
      return this.usersService.antiBan(dto)
   }
}
