/**
 * Created by shidokht on 2017-07-23.
 */
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {IOffer} from "./Offer.model";


@Injectable()
export class OfferService{
  constructor(private http:Http){}
  getOffer(id:number):Observable<IOffer>{
    return this.http.get("http://localhost:8181/REAgency/webapi/offer/offers/"+id).map(
      (response:Response) => {return <IOffer>response.json();}
    )
  }
  acceptOffer(id:number){
    //TODO
    }
    addOffer(offerObj) {
      let headers = new Headers(({'Content-Type': 'application/json'}));
      let options = new RequestOptions({headers: headers})
      this.http.post("http://localhost:8181/REAgency/webapi/offer/newOffer", offerObj,
        options).map(((response: Response) => {
        return response.json()
      })).subscribe();
    }
}
