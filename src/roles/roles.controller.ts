import { Body, Controller, Get, Post, Param } from "@nestjs/common"
import { RolesService } from "./roles.service"
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"
import { Role } from "./roles.model"
import { CreateRoleDto } from "./dto/create-role.dto"

@ApiTags('Роли')
@Controller('roles')
export class RolesController {
   constructor(private rolesService: RolesService) {}
   @ApiOperation({summary: 'Создание роли'})
   @ApiResponse({status: 200, type: Role})
   @Post()
   create(@Body() dto: CreateRoleDto) {
     return this.rolesService.createRoles(dto)
   }

   @ApiOperation({summary: 'Получения роли по значению'})
   @ApiResponse({status: 200, type: [Role]})
   @Get('/:value')
   getByValue(@Param("value") value: string) {
     return this.rolesService.getRoleByValue(value)
   }
}
