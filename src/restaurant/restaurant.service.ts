import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Restaurant } from './schemas/user.schema';
import mongoose from 'mongoose';
import { UpdateRestaurantDto } from './dto/update-restaurant';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name)
    private restaurantModel: mongoose.Model<Restaurant>,
  ) {}

  async findAll(): Promise<Restaurant[]>{
    const restaurants = await this.restaurantModel.find();
    return restaurants;
  }

  async findByName(name: string): Promise<Restaurant[]> {
    const restaurant = await this.restaurantModel.find({name});
    return restaurant;
  }

  async findByID(id: string): Promise<Restaurant> {
    const restaurant = await this.restaurantModel.findById(id);
    return restaurant;
  }

  async create(restaurant: Restaurant): Promise<Restaurant> {
    const newRestaurant = await this.restaurantModel.create(restaurant);
    return newRestaurant;
  }

  async updateByID(id: string, restaurant: UpdateRestaurantDto): Promise<Restaurant> {
    return  await this.restaurantModel.findByIdAndUpdate(id, restaurant, {
      new: true,
      runValidators: true,
    })
  }

  async deleteByID(id: string): Promise<Restaurant> {
    return await this.restaurantModel.findByIdAndDelete(id,{});
  }

}
