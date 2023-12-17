import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Gender {
    male = "Male",
    female = "Female",
}

@Schema({
    timestamps: true,
    versionKey: false,
})

export class User {
    @Prop({
        required: true,
    })
    name: string;

    @Prop({
        required: true,
        unique: true,
    })
    email: string;

    @Prop({})
    password: string;

    @Prop({})
    phone: string;

    @Prop({})
    gender: Gender;

    @Prop({})
    age: number;

    @Prop({})
    country: string;

    @Prop({})
    city: string;

    @Prop({})
    state: string;

    @Prop({
        required: true,
    })
    address: string;

    @Prop({ type: Date, default: Date.now })
    createdAt?: Date;

    @Prop({ type: Date, default: Date.now })
    updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);