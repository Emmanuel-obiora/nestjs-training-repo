import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get() // Get /users
    findAll(@Query('role') role?: 'Engineer' | 'Admin' | 'Intern'){
        return this.usersService.findAll(role);
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id', ParseIntPipe) id:number){
        return this.usersService.findOne(id);
    }

    @Post()  // POST /users
    create(@Body(ValidationPipe) createUserDTO: CreateUserDTO){
        return this.usersService.create(createUserDTO);
    }

    @Patch(':id') // PATCH /users/:id
    update(@Param('id', ParseIntPipe) id:number, @Body(ValidationPipe) userUpdate: UpdateUserDTO){
        return this.usersService.update(id, userUpdate);
    }

    @Delete(':id') // GET /users/:id
    delete(@Param('id', ParseIntPipe) id:number){
        return this.usersService.delete(id);
    }
}
