export class BusTrip{
    tripId: number;
    busId: number=0;
    source: string;
    destination: string="";
    fromDatetime: any;
    toDatetime: any;
    availableSeats: number;
    isActive: number;
    busname: string="";
    busType: string="";   
    cost: number=0;
    totalseats: number;
}

// export class Bus{
//     busId : number=0;
//     busname : string="";
//     busType : string="";
//     isActive : number;
//     TotalSeats : number;

// }