/**
 * Created by shidokht on 2017-07-23.
 */
import {Routes} from '@angular/router'
import {OfferComponent} from './Offer/Offer.component'
import {EstateListComponent} from './Property/Estate-list.component'
import {CreateEstateComponent} from './Property/Create-estate.component'
import {TypeItem} from './TypeItems/Type.component'
export const appRoutes:Routes = [
  {path: '', redirectTo: '/sellinglist', pathMatch:'full'},
  {path: 'offers', component: OfferComponent},
  {path: 'sellinglist', component:EstateListComponent},
  {path: 'addEstate', component:CreateEstateComponent},
  {path: 'setting', component:TypeItem},
  {path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]
