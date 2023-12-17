import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



export enum ServceAt {
    Breakfast = 'Breakfast',
    Lunch = 'Lunch',
    Dinner = 'Dinner',
    AllDay = 'All Day'

}

export type TimeMade = {
    hour: number;
    minute: number;
}


@Schema({
    timestamps: true,
    versionKey: false,
})

export class Dish {
    @Prop({
        required: true,
    })
    name: string;

    @Prop({})
    description: string;

    @Prop({
        required: true,
    })
    price: number;

    @Prop({})
    image: string[];

    @Prop({
        required: true,
    })
    serviceAt: ServceAt[];

    @Prop({})
    category: string;

    @Prop({
        required: true,
    })
    timeMade: TimeMade;

    @Prop({
        min: 0,
        max: 100
    })
    discount?: number;

    @Prop({ type: Date, default: Date.now })
    createdAt?: Date;

    @Prop({ type: Date, default: Date.now })
    updatedAt: Date;
}

export const DishSchema = SchemaFactory.createForClass(Dish);