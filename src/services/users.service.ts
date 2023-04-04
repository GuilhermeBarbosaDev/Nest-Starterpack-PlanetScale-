import { Get, Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from "src/users/entities/users.entity";


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

    
}