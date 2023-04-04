import { Body, Controller, Get, Param, Post, Delete } from "@nestjs/common";
import { UsersService } from "src/services/users.service";
import { Users } from "src/entities/users.entity";
import { UsersDto } from "src/dtos/users.dto";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get()
    findAllUsers(): Promise<Users[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number) {
        return this.usersService.findById(id);
    }

    // Data Transfer Object

    @Post()
    createUser(@Body() user: UsersDto) {
        return this.usersService.create(user)
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this.usersService.delete(id);
    }

}