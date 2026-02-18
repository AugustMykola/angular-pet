import { User } from '../models/interfaces';

export const MOCK_USERS: User[] = [  {
    id: '1',
    email: 'andrey@example.com',
    password: 'password123',
    firstName: 'Andrey',
    lastName: 'Test',
    avatar: 'images/logo2.jpg',
    location: 'Dnipro',
    country: 'Ukraine',
    phoneNumber: '+7 (999) 123-45-67'
  },
  {
    id: '2',
    email: 'anna@example.com',
    password: 'password123',
    firstName: 'Анна',
    lastName: 'Сидорова',
    location: 'Lviv',
    country: 'Ukraine',
    phoneNumber: '+7 (999) 234-56-78',
    avatar:''
  },
  {
    id: '3',
    email: 'john@example.com',
    password: 'password123',
    firstName: 'John',
    lastName: 'Smith',
    location: 'New York',
    country: 'United States',
    phoneNumber: '+1 (555) 123-4567',
    avatar:''
  },
  {
      id: '4',
      email: 'maria@example.com',
      password: 'password123',
      firstName: 'Maria',
      lastName: 'Kozlova',
      location: 'Kiev',
      country: 'Ukraine',
      phoneNumber: '+380 (99) 123-45-67',
      avatar:''
  },
  {
    id: '5',
    email: 'alex@example.com',
    password: 'password123',
    firstName: 'Alexander',
    lastName: 'Novikov',
    location: 'Minsk',
    country: 'Belarus',
    phoneNumber: '+375 (29) 123-45-67',
    avatar:''
  },
  {
    id: '6',
    email: 'test@test.com',
    password: 'test',
    firstName: 'Test',
    lastName: 'User',
    location: 'Astana',
    country: 'Kazakhstan',
    phoneNumber: '+7 (777) 123-45-67',
    avatar:''
  }
];