import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dish } from './schemas/dish.schemas';
import mongoose from 'mongoose';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';

@Injectable()
export class DishService {
  constructor(
    @InjectModel(Dish.name)
    private dishModel: mongoose.Model<Dish>,
  ) {}

  async findAll(): Promise<Dish[]> {
    const dishes = await this.dishModel.find();
    return dishes;
  }

  async create(dish: CreateDishDto): Promise<Dish> {
    const newDish = await this.dishModel.create(dish);
    return newDish;
  }

  async findDishByID(id: string): Promise<Dish> {
    const dish = await this.dishModel.findById(id);
    if (!dish) {
      throw new NotFoundException(`Dish with id: ${id} not found`);
    }
    return dish;
  }

  async findDishByName(name: string): Promise<Dish> {
    const dish = await this.dishModel.findOne({name});
    if (!dish) {
      throw new NotFoundException(`Dish with name: ${name} not found`);
    }
    return dish;
  }

  async updateDishByID(id: string, dish: UpdateDishDto): Promise<Dish> {
    const afterDish = await this.dishModel.findByIdAndUpdate(id, dish, {new: true});
    return afterDish;
  }

    async deleteDishByID(id: string): Promise<Dish> {
        return await this.dishModel.findByIdAndDelete(id,{});
    }


}
