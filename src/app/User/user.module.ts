/**
 * Created by shidokht on 2017-07-09.
 */
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {userRoutes} from './user.routes'
import {UserComponent} from './user.component'
import {AuthService} from './auth.service'
@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[
      UserComponent

    ],
    providers:[
        AuthService
    ]

})
export class UserModule{}

//feature module
