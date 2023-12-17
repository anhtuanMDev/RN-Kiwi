import { Prop } from "@nestjs/mongoose";
import { ServceAt, TimeMade } from "../schemas/dish.schemas";

export class CreateDishDto {
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