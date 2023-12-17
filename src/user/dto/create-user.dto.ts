import { Gender } from "../schemas/user.schemas";

export class CreateUserDto{
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly phone: string;
    readonly gender: Gender;
    readonly age: number;
    readonly country: string;
    readonly city: string;
    readonly state: string;
    readonly address: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    
}