import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key: string, value: any): void {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  }

  getItem(key: string): any {
    const jsonValue = localStorage.getItem(key);
    return jsonValue ? JSON.parse(jsonValue) : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
