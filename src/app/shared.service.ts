import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private data = new BehaviorSubject<any[]>([]);
  currentData = this.data.asObservable();

  constructor() { }

  changeData(newData: any[]) {
    this.data.next(newData);
  }
}
