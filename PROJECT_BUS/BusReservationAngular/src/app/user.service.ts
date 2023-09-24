import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './Models/Users';
import { Bus } from './Models/Bus';
import { Observable } from 'rxjs';
import { BusTrip } from './Models/BusTrip';
import { FeedBack } from './Models/FeedBack';
import { Booking } from './Models/Booking';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  url : string = 'https://localhost:44358/api/userLogin';
  adminloginurl: string ='https://localhost:44358/api/AdminLogin';
  busurl: string = 'https://localhost:44358/api/buses';
  bustripurl: string = 'https://localhost:44358/api/AdminLogin/bustrip';
  bookingurl: string ='https://localhost:44358/api/booking';
  bookTicketUrl: string ='https://localhost:44358/api/bookings/allbustrip';
  bookseat: string='https://localhost:44358/api/seats';
  feedbackUrl: string='https://localhost:44358/api/feedbacks';
  transactionurl: string='https://localhost:44358/api/seats/transaction';
  userList:Users[]=[];
  tripData: BusTrip[]=[];
  booktripdt: BusTrip[]=[];
  busData: Bus[]=[];
  busdetails: Bus=new Bus();
  bustrip: BusTrip=new BusTrip();
  bookTripdata: BusTrip=new BusTrip();
  bookedSeats: Booking=new Booking();
  viewseats: Booking[]=[];
  

  /*getAll(){
    return this.http.get<any>(this.url)
  }*/

  register(data: Users) {
    console.log(data);
    return this.http.post<any>(`${this.url}`, data);
  }

  userlogin(data: any) {
    console.log(data);
    return this.http.post<any>(`${this.url}/Login`, data);
  }

  bookingshow(data: any){
    console.log(data);
    return this.http.post<any>(`${this.bookingurl}`,data);
  }

  adminlogin(data: any) {
    console.log(data);
    return this.http.post<any>(`${this.adminloginurl}`, data);
  }

  add_bus(data: Bus) {
    console.log(data);
    return this.http.post<any>(`${this.busurl}`, data);
  }

  showAllbuses():Observable<any>{
    return this.http.get<any>(this.busurl);
  }
  editBus(data: Bus){
    return this.http.put(`${this.busurl}/${this.busdetails.busId}`,data);
  }
  // getBus(id: number){
  //   return this.http.get<any>(`${this.busurl}/${id}`);
  // }

  showBusTrip():Observable<BusTrip[]>{
    return this.http.get<BusTrip[]>(this.bustripurl);
  }

  addBusTrip(data: BusTrip){
    return this.http.post<any>(`${this.bustripurl}`,data);
  }

  editBusTrip(data: BusTrip){
    return this.http.put(`${this.bustripurl}/${this.bustrip.tripId}`,data);
  }


  getBusTripbyId(id: number){
    return this.http.get<any>(`${this.bookingurl}/${id}`);
  }

  giveFeedback(data: FeedBack){
    console.log(data);
    return this.http.post<any>(`${this.feedbackUrl}`, data);
  }
  getAllFeedback(){
  return this.http.get<any>(`${this.feedbackUrl}`);
  }

  getSeat(id:number):Observable<any>{
    return this.http.get<any>(`${this.bookseat}/${id}`);
  }

  addSeat(data: any){
    return this.http.post<any>(`${this.bookseat}`,data);
  }


  getbookedSeat():Observable<any>{
    return this.http.get<any>(`${this.bookseat}`);
  }

  gettransactions():Observable<any>{
    return this.http.get<any>(`${this.transactionurl}`);
  }

  addtransaction(data: any){
    console.log(data);
    return this.http.post<any>(`${this.transactionurl}`,data);
  }
}