import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusTripComponent } from './add-bus-trip/add-bus-trip.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AllBusTripComponent } from './all-bus-trip/all-bus-trip.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { BookingComponent } from './booking/booking.component';
import { ConfirmTicketComponent } from './confirm-ticket/confirm-ticket.component';
import { EditBusComponent } from './show-all-bus/edit-bus/edit-bus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ShowAllBusComponent } from './show-all-bus/show-all-bus.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {path: '' , component : HomeComponent},
  {path: 'login' , component : LoginComponent},
  {path: 'register' , component : RegisterComponent},
  {path: 'AdminLogin', component: AdminLoginComponent},
  {path: 'addBus', component:AddBusComponent},
  {path: 'showAllBus', component:ShowAllBusComponent},
  {path: 'editBus', component:EditBusComponent},
  {path: 'showAllBusTrip', component:AllBusTripComponent},
  {path: 'addBusTrip', component:AddBusTripComponent},
  {path: 'userProfile', component:ProfileComponent },
  {path: 'bookTicket', component:BookingComponent},
  {path: 'userWallet', component:WalletComponent},
  {path: 'booktripticket/:id', component:BookTicketComponent},
  {path: 'confirmticket/:id', component:ConfirmTicketComponent},
  {path: 'transaction', component:TransactionComponent},
  {path: 'feedback', component:FeedbackComponent},
  {path: 'viewfeedback', component:ViewFeedbackComponent},
  {path: 'viewticket', component:ViewTicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
