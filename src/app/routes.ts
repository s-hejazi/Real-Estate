/**
 * Created by shidokht on 2017-07-23.
 */
import {Routes} from '@angular/router'
import {OfferComponent} from './Property/Offer.component'
import {EstateListComponent} from './Property/Estate-list.component'
import {CreateEstateComponent} from './Property/Create-estate.component'
export const appRoutes:Routes = [
  {path: '', redirectTo: '/offers', pathMatch:'full'},
  {path: 'offers', component: OfferComponent},
  {path: 'sellinglist', component:EstateListComponent},
  {path: 'addEstate', component:CreateEstateComponent}
]
