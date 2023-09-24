import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { ShowAllBusComponent } from './show-all-bus/show-all-bus.component';
import { EditBusComponent } from './show-all-bus/edit-bus/edit-bus.component';
import { AllBusTripComponent } from './all-bus-trip/all-bus-trip.component';
import { AddBusTripComponent } from './add-bus-trip/add-bus-trip.component';
import { EditComponent } from './all-bus-trip/edit/edit.component';
import { DatePipe } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { BookingComponent } from './booking/booking.component';
import { WalletComponent } from './wallet/wallet.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { ConfirmTicketComponent } from './confirm-ticket/confirm-ticket.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminLoginComponent,
    AddBusComponent,
    ShowAllBusComponent,
    EditBusComponent,
    AllBusTripComponent,
    AddBusTripComponent,
    EditComponent,
    ProfileComponent,
    BookingComponent,
    WalletComponent,
    BookTicketComponent,
    FeedbackComponent,
    ViewFeedbackComponent,
    ConfirmTicketComponent,
    TransactionComponent,
    ViewTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
