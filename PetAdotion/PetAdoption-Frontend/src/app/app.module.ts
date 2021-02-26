import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './userTopBar/top-bar.component';
import { ApplyComponent } from './apply/apply.component';
import { PolicyComponent } from './policy/policy.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// homepage
import { HomepageimgComponent } from '../app/homepage/homepageimg/homepageimg.component';
import { HomepageindexComponent } from '../app/homepage/homepageindex/homepageindex.component';
import { AboutusComponent } from '../app/homepage/aboutus/aboutus.component';
import { HomerandompetComponent } from '../app/homepage/homerandompet/homerandompet.component'
// Admin
import { AdminTopBarComponent } from './admin-top-bar/admin-top-bar.component';
import { ReviewApplymentComponent } from './review-applyment/review-applyment.component';
import { ReviewWishListComponent } from './review-wish-list/review-wish-list.component';
//login
import {LogInComponent} from "./log-in/log-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
//wishlist
import {WishComponent} from './wish/wish.component';
//donante
import {DonateComponent} from './donate/donate.component'
//payend
import {PayendComponent} from './payend/payend.component';
import { ApplyDetailComponent } from './apply-detail/apply-detail.component';
import { SearchResultComponent } from './search-result/search-result.component'
import { SearchdetailComponent } from './searchdetail/searchdetail.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PaypalComponent } from './paypal/paypal.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ApplyComponent,
    PolicyComponent,
    AdminTopBarComponent,
    ReviewApplymentComponent,
    ReviewWishListComponent,
    HomepageimgComponent,
    HomepageindexComponent,
    AboutusComponent,
    HomerandompetComponent,
    LogInComponent,
    SignUpComponent,
    WishComponent,
    DonateComponent,
    PayendComponent,
    ApplyDetailComponent,
    SearchResultComponent,
    SearchdetailComponent,
    PaypalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


  
 }
