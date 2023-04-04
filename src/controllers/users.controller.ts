import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "src/services/users.service";
import { Users } from "src/users/entities/users.entity";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Post()
    create(@Body() newUser: Users) {

    }

    @Get()
    findAllUsers(): Promise<Users[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number) {
        return this.usersService.findById(id);
    }
}