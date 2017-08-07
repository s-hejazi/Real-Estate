/**
 * Created by shidokht on 2017-07-09.
 */
import {Injectable} from '@angular/core'
import {IUser} from "./user.model";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {error} from "util";
@Injectable()
export class AuthService{
    currentUser:IUser
    constructor(private http:Http){}
    loginUser(email: string, password:string){
        let headers = new Headers(({'Content-Type': 'application/json'}));
        let options = new RequestOptions({headers: headers})
        let loginInfo = { email: email, password: password};
        return this.http.post("http://localhost:8181/REAgency/webapi/server/update/sender", loginInfo, options).do(
            resp=> {
                if(resp){
                    console.log(resp)
                }
            }
        ).catch(error=> { return Observable.of(false)})
    }

    isAuthenticated(){

        return !!this.currentUser;
    }

    logout(){
        this.currentUser = undefined;
        let headers = new Headers(({'Content-Type': 'application/json'}));
        let options = new RequestOptions({headers: headers})
        //TODO

    }
}
