import { inject, Injectable } from '@angular/core';
import { UserInterface } from '../types/user.interface';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: UserInterface[] = []
  utilService = inject(UtilsService)
  constructor() { }
  addUser(user: UserInterface){
    this.users = [...this.users, user]
  }
  removeUser(userId: number){
    const updatedUsers = this.users.filter(user => user.id !== userId)
    this.users = updatedUsers
  }
  addUserIds(id1: number, id2: number): number{
    return this.utilService.add(id1, id2)
  }
}
