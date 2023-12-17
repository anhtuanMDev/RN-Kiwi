import { Module } from '@nestjs/common';
import { DishController } from './dish.controller';
import { DishService } from './dish.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DishSchema } from './schemas/dish.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Dish',
        schema: DishSchema
      }
    ])
  ],
  controllers: [DishController],
  providers: [DishService]
})
export class DishModule {}
