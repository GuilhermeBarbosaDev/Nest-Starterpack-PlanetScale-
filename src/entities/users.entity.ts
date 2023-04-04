import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';


@Entity()
export class Users extends BaseEntity {

    constructor(user?: Users) {
        super()
        Object.assign(this, user)
    }
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    cellphone: string;

    @Column()
    birth_date: Date;

}
