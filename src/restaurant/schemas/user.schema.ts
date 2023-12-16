import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

@Schema({
    timestamps: true,
    versionKey: false,
})

export class Restaurant {

    @Prop({})
    owner: string;

    @Prop({})
    name: string;

    @Prop({})
    description: string;

    @Prop({})
    address: string;

    @Prop({})
    city: string;

    @Prop({})
    state: string;

    @Prop({})
    country: string;

    @Prop({})
    phone: string;

    @Prop({})
    email: string;

    @Prop({type: Date, default: Date.now})
    createdAt?: Date;

    @Prop({type: Date, default: Date.now})
    updatedAt: Date;

}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);