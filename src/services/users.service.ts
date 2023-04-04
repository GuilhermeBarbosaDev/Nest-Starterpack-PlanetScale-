import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from "src/entities/users.entity";
import { UsersDto } from "src/dtos/users.dto";

@Injectable()
export class UsersService{

    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ){}


    findAll(): Promise<Users[]> {
        return this.usersRepository.find();
    }

    findById(id: number): Promise<Users | null>{
        return this.usersRepository.findOneBy({id});
    }


    create(user: UsersDto): Promise<Users> {
        let newUser = new Users(user as Users)
        
        return Users.save(newUser)
    }

    async delete(id: number) {
        const deleteUser = await Users.delete({ id })

        return { message: deleteUser.affected ? "success" : "fail" } 
    }

    
}