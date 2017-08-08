/**
 * Created by shidokht on 2017-08-06.
 */
import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
@Injectable()
export class TypeService{

  constructor(private http:Http){}
  getTypeItems(type:string):Observable<any>{
    return this.http.get("http://localhost:8181/REAgency/webapi/type/"+type).map( resp=>
    {
      return resp.json()
    });
  }
  updateType(typeObj){
    let headers = new Headers(({'Content-Type': 'application/json'}));
    let options = new RequestOptions({headers: headers})
    return this.http.post("http://localhost:8181/REAgency/webapi/type/update/type", typeObj, options).catch(
      error => { return Observable.of(false)}
    )
  }
}
