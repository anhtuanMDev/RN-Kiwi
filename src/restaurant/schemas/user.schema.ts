import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

@Schema({
    timestamps: true,
    versionKey: false,
})

export class Restaurant {

    @Prop({
        required: true,
        unique: true,
    })
    owner: string;

    @Prop({
        required: true,
    })
    name: string;

    @Prop({})
    description: string;

    @Prop({
        required: true
    })
    address: string;

    @Prop({
        required: true
    })
    city: string;

    @Prop({})
    state: string;

    @Prop({})
    country: string;

    @Prop({
        required: true
    })
    phone: string;

    @Prop({
        required: true,
        unique: true,
    })
    email: string;

    @Prop({type: Date, default: Date.now})
    createdAt?: Date;

    @Prop({type: Date, default: Date.now})
    updatedAt: Date;

}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);