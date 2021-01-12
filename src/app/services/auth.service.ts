import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { 
    console.log("El servicio es para acceder a recursos externos!");
  }
}
