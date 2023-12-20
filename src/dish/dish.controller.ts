import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { DishService } from './dish.service';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';

@Controller('dish')
export class DishController {
  constructor(private dishService: DishService) {}

  @Get()
  async getAllDishes() {
    return this.dishService.findAll();
  }

  @Post('create')
  async createDish(@Body() dish: CreateDishDto) {
    console.log("success");
    return this.dishService.create(dish);
  }

  @Put('updateByID')
  async updateDishByID(@Body() newDish: { id: string; dish: UpdateDishDto }) {
    return this.dishService.updateDishByID(newDish.id, newDish.dish);
  }

  @Post('deleteByID')
  async deleteDishByID(@Body() id: string) {
    return this.dishService.deleteDishByID(id);
  }
}
