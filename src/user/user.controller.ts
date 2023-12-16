import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schemas';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  //   http://127.0.0.1:3000/user
  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  //   http://127.0.0.1:3000/user/register
  @Post('register')
  async createUser(@Body() user: CreateUserDto): Promise<User> {
    const res = await this.userService.create(user);
    return res;
  }

  //   http://127.0.0.1:3000/user/byID/6571e42f825de78ce25325b6
  @Get('byID/:id')
  async getUserByID(@Param('id') id: string): Promise<User> {
    return this.userService.findUserByID(id);
  }

  //   http://127.0.0.1:3000/user/login
  @Post('login')
  async login(@Body() user: LoginUserDto): Promise<User>{
    return this.userService.login(user.email,user.password);
  }

  //   http://127.0.0.1:3000/user/updateByID/6571e42f825de78ce25325b6
  @Put('updateByID/:id')
  async updateUserByID(
    @Param('id') id: string,
    @Body() user: UpdateUserDto,
  ): Promise<User> {
    return this.userService.updateUserByID(id, user);
  }

  //   http://127.0.0.1:3000/user/deleteByID/6571e42f825de78ce25325b6
  @Delete('deleteByID/:id')
  async deleteUserByID(@Param('id') id: string): Promise<User> {
    return this.userService.deleteUserByID(id);
  }
}
