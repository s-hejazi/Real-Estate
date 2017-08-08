/**
 * Created by shidokht on 2017-08-06.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
@Injectable()
export class TypeService{

  constructor(private http:Http){}
  getTypeItems(type:string){
    return this.http.get("http://localhost:8181/REAgency/webapi/type/"+type).map( resp=>
    {
      return resp.json()
    });
  }
}
