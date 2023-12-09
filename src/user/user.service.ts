import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './schemas/user.schemas';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) {}

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async create(user: User): Promise<User> {
    const newUser = await this.userModel.create(user);
    return newUser;
  }

  async findUserByID(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException(`User with id: ${id} not found`);
    }
    return user;
  }

  async updateUserByID(id: string, user: User): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, user, {
      new: true,
      runValidators: true,
    });
  }

  async deleteUserByID(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id,{});
  }
}
