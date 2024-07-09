// import { Controller, Get, Post, Put, Param, Body, Query } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

// @ApiTags('users')
// @Controller('users')
// export class UsersController {
//   constructor(private readonly userService: UsersService) {}

//   @Post()
//   @ApiOperation({ summary: 'Create a new user' })
//   @ApiBody({ schema: { example: { name: 'John Doe', address: '123 Main St' } } })
//   @ApiResponse({ status: 201, description: 'User created successfully.' })
//   async createUser(@Body() data: { name: string; address: string }) {
//     return this.userService.createUser(data);
//   }

//   @Put(':id')
//   @ApiOperation({ summary: 'Update an existing user' })
//   @ApiParam({ name: 'id', required: true, description: 'User ID' })
//   @ApiBody({ schema: { example: { name: 'John Doe', address: '123 Main St' } } })
//   @ApiResponse({ status: 200, description: 'User updated successfully.' })
//   async updateUser(
//     @Param('id') id: number,
//     @Body() data: { name?: string; address?: string }
//   ) {
//     return this.userService.updateUser(Number(id), data);
//   }

//   @Get(':id')
//   @ApiOperation({ summary: 'Get user by ID' })
//   @ApiParam({ name: 'id', required: true, description: 'User ID' })
//   @ApiResponse({ status: 200, description: 'User retrieved successfully.' })
//   async getUserById(@Param('id') id: number) {
//     return this.userService.getUserById(Number(id));
//   }

//   @Get()
//   @ApiOperation({ summary: 'Get all users' })
//   @ApiResponse({ status: 200, description: 'Users retrieved successfully.' })
//   async getAllUsers() {
//     return this.userService.getAllUsers();
//   }

//   @Get('search')
//   @ApiOperation({ summary: 'Search users by query' })
//   @ApiResponse({ status: 200, description: 'Search results retrieved successfully.' })
//   async searchUsers(@Query('query') query: string) {
//     return this.userService.searchUsers(query);
//   }
// }


import { Controller, Get, Post, Put, Param, Body, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ schema: { example: { name: 'John Doe', address: '123 Main St' } } })
  @ApiResponse({ status: 201, description: 'User created successfully.' })
  async createUser(@Body() data: { name: string; address: string }) {
    return this.userService.createUser(data);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing user' })
  @ApiParam({ name: 'id', required: true, description: 'User ID' })
  @ApiBody({ schema: { example: { name: 'John Doe', address: '123 Main St' } } })
  @ApiResponse({ status: 200, description: 'User updated successfully.' })
  async updateUser(
    @Param('id') id: number,
    @Body() data: { name?: string; address?: string }
  ) {
    return this.userService.updateUser(Number(id), data);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiParam({ name: 'id', required: true, description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User retrieved successfully.' })
  async getUserById(@Param('id') id: number) {
    return this.userService.getUserById(Number(id));
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Users retrieved successfully.' })
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  // @Get('search')
  // @ApiOperation({ summary: 'Search users by query' })
  // @ApiResponse({ status: 200, description: 'Search results retrieved successfully.' })
  // async searchUsers(@Query('query') query: string) {
  //   return this.userService.searchUsers(query);
  // }
}
