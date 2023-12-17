import { Gender } from "../schemas/user.schemas";

export class UpdateUserDto{
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
    readonly updatedAt: Date;
    
}