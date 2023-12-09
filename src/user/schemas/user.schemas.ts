import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";




@Schema({
    timestamps: true,
    versionKey: false,
})

export class User {

    @Prop({})
    name: string;

    @Prop({})
    email: string;

    @Prop({})
    password: string;

    @Prop({})
    phone: string;

    @Prop({})
    gender: string;

    @Prop({})
    age: number;

    @Prop({})
    country: string;

    @Prop({})
    city: string;

    @Prop({})
    state: string;

    @Prop({})
    address: string;

    @Prop({ type: Date, default: Date.now })
    createdAt: Date;

    @Prop({ type: Date, default: Date.now })
    updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);