import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private day = new ReplaySubject<number>(1);
  private month = new ReplaySubject<number>(1);
  private year = new ReplaySubject<number>(1);
  private hour = new ReplaySubject<number>(1);
  private minuts = new ReplaySubject<number>(1);
  
  public get recibirday() {
    return this.day.asObservable()
  }
  public get recibirmes() {
    return this.month.asObservable()
  }
  public get recibiraño() {
    return this.year.asObservable()
  }
  public get recibirhoras() {
    return this.hour.asObservable()
  }
  public get recibirminutos() {
    return this.minuts.asObservable()
  }

  public enviar(day: number, month:number, year:number, hour: number, min: number): void {
    this.day.next(day);
    this.month.next(month);
    this.year.next(year);
    this.hour.next(hour);
    this.minuts.next(min);
  }
}
