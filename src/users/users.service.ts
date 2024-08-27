import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  // Ajoutez ici vos méthodes de logique métier pour gérer les utilisateurs
  findAll() {
    return 'This action returns all users';
  }
}
