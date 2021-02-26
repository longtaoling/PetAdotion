import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolicyComponent } from './policy/policy.component';
import { ApplyComponent } from './apply/apply.component';
import { ReviewApplymentComponent } from './review-applyment/review-applyment.component';
import { ReviewWishListComponent } from './review-wish-list/review-wish-list.component';
import { HomepageindexComponent } from './homepage/homepageindex/homepageindex.component';
import {LogInComponent} from "./log-in/log-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import { WishComponent } from './wish/wish.component';
import { DonateComponent } from './donate/donate.component';
import { PayendComponent } from './payend/payend.component'
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchdetailComponent } from './searchdetail/searchdetail.component';




const routes: Routes = [

  {path:'',redirectTo:'/login',pathMatch:'full'},
  { path: 'policy/:type/:username', component: PolicyComponent},
  { path: 'apply/:type/:username', component: ApplyComponent},
  { path: 'reviewapplyment/:type/:username', component: ReviewApplymentComponent},
  { path: 'reviewwishlist/:type/:username', component: ReviewWishListComponent},
  { path: 'homepage/:type/:username', component: HomepageindexComponent},
  { path: 'login',component:LogInComponent},
  { path: 'signup',component:SignUpComponent},
  { path: 'wishlist/:type/:username', component:WishComponent},
  { path: 'donate/:type/:username',component:DonateComponent},
  { path: 'payend/:type/:username',component:PayendComponent},
  {path:'search/:type/:username/:test_type',component:SearchResultComponent},
  {path:'details/:i/:test_type/:test_page/:token/:type/:username',component:SearchdetailComponent},
  { path: 'apply/:type/:username/:i', component: ApplyComponent},
  {path:'wishreview/:type/:username',component:ReviewWishListComponent}

  // {path:'main', component:AppComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
