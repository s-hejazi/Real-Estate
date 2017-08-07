/**
 * Created by shidokht on 2017-07-09.
 */
import {Component} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
@Component({
    templateUrl: 'app/User/user.component.html'
})
export class UserComponent{

    loginInvalid = false
    constructor (private authservice:AuthService, private router:Router){

    }
    login(formValues){
        this.authservice.loginUser(formValues.email, formValues.password).subscribe(
            resp => {
                if(!resp){
                    this.loginInvalid = true
                }
                else {
                    this.router.navigate(['offers'])
                }
            }
        );

    }
    cancel(){
        this.router.navigate(['sellinglist'])
    }
}
