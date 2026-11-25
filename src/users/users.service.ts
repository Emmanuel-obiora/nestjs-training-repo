import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            fullName: 'John Smith',
            role: 'Admin',
            email: 'john.smith@example.com',
        },
        {
            id: 2,
            fullName: 'Sarah Johnson',
            role: 'Engineer',
            email: 'sarah.johnson@example.com',
        },
        {
            id: 3,
            fullName: 'Michael Brown',
            role: 'Intern',
            email: 'michael.brown@example.com',
        },
        {
            id: 4,
            fullName: 'Emily Davis',
            role: 'Engineer',
            email: 'emily.davis@example.com',
        },
        {
            id: 5,
            fullName: 'David Wilson',
            role: 'Admin',
            email: 'david.wilson@example.com',
        },
    ];

    findAll(role?: 'Intern' | 'Engineer' | 'Admin'){
        if(role){
            return this.users.filter(user => user.role === role);
        }

        return this.users;
    }

    findOne(id: number){
        const user = this.users.find(user => user.id === id);

        return user;
    }

    create(users: CreateUserDTO){
        const userByHighestId = [...this.users].sort((a,b) => b.id - a.id)

        const newUser = {
            id: userByHighestId[0].id + 1,
            ...users
        }
        this.users.push(newUser);
        return newUser;
    }

    update(id: number, updatedUser: UpdateUserDTO){
        this.users = this.users.map(user => {
            if(user.id === id){
                return {...user, ...updatedUser}
            }
            return user;
        })

        return this.findOne(id);
    }

    delete(id: number){
        const removedUser = this.findOne(id);

        this.users = this.users.filter(user => user.id !== id);

        return removedUser;
    }
}
