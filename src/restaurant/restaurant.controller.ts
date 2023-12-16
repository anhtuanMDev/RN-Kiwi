import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './schemas/user.schema';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

@Controller('restaurant')
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}

  //   http://127.0.0.1:3000/restaurant
  @Get()
  async getAllRestaurants(): Promise<Restaurant[]> {
    return this.restaurantService.findAll();
  }

  //   http://127.0.0.1:3000/restaurant/create
  @Post('create')
  async createRestaurant(
    @Body() rest: CreateRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantService.create(rest);
  }

  //   http://127.0.0.1:3000/restaurant/byID/6571e42f825de78ce25325b6
  @Get('byID/:id')
  async getRestaurantByID(@Param('id') id: string): Promise<Restaurant> {
    return this.restaurantService.findByID(id);
  }

  //   http://127.0.0.1:3000/restaurant/byName
  @Get('byName')
  async getRestaurantByName(@Body() name: string): Promise<Restaurant[]> {
    return this.restaurantService.findByName(name);
  }

  //   http://127.0.0.1:3000/restaurant/updateByID/6571e42f825de78ce25325b6
  @Put('updateByID/:id')
  async updateRestaurantByID(
    @Param('id') id: string,
    @Body() rest: CreateRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantService.updateByID(id, rest);
  }

  //   http://127.0.0.1:3000/restaurant/deleteByID/6571e42f825de78ce25325b6
  @Delete('deleteByID/:id')
  async deleteRestaurantByID(@Param('id') id: string): Promise<Restaurant> {
    return this.restaurantService.deleteByID(id);
  }
}
