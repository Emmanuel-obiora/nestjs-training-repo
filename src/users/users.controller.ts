import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get() // Get /users
    findAll(){
        console.log('GET /users endpoint reached');
        return []
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id') id:string){
        return {id}
    }

    @Post()  // POST /users
    create(@Body() user: {}){
        return user
    }

    @Patch(':id') // PATCH /users/:id
    update(@Param('id') id:string, @Body() userUpdate: {}){
        return {id, ...userUpdate}
    }

    @Delete(':id') // GET /users/:id
    delete(@Param('id') id:string){
        return {id}
    }
}
