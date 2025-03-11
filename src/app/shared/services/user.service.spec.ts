import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { UserInterface } from '../types/user.interface';
import { UtilsService } from './utils.service';
import { inject } from '@angular/core';

describe('UserService', () => {
  let userService: UserService;
  let utilService: UtilsService
  // let mockUtilService = {
  //   add: jest.fn()
  // }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        UtilsService
        // {provide: UtilsService, useValue: mockUtilService}
      ]
    });
    userService = TestBed.inject(UserService);
    utilService = TestBed.inject(UtilsService)
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });
  describe('addUser', () => {
    it('should add a new user', () => {
      const user: UserInterface = {
        id: 10,
        name: 'Mukilan',
      }
      userService.addUser(user)
      expect(userService.users).toEqual([user])
    })
  })
  describe('removeUser', () => {
    it('should remove an existing user', () => {
      const user: UserInterface = {
        id: 10,
        name: 'Mukilan',
      }
      userService.users = [user]
      userService.removeUser(10)
      expect(userService.users).toEqual([])
    })
  })
  describe('addUserIds', () => {
    it('should add user id', () => {
      // mockUtilService.add.mockReturnValue(8)
      // expect(userService.addUserIds(3, 5)).toEqual(8)
      jest.spyOn(utilService, 'add')
      const user: UserInterface = {
        id: 10,
        name: 'Mukilan',
      }
      userService.users = [user]
      expect(userService.addUserIds(5, 7)).toEqual(12)
      expect(utilService.add).toHaveBeenCalledWith(5, 7)
    })

  })
});
