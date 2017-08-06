/**
 * Created by shidokht on 2017-07-24.
 */
import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/Rx';
import {IEstate, IEstateDetail} from "./Estate.model";
import {Observable} from "rxjs/Observable";
@Injectable()
export class EstateService{


  constructor(private http:Http){}
  getAll():Observable<IEstate[]>{
    return this.http.get("http://localhost:8181/REAgency/webapi/sellingOffer/all").map(
      (response:Response) => {return  <IEstate[]> response.json()}
    )

  }
  getEstateDetails(id:number):Observable<IEstateDetail>{
    return this.http.get("http://localhost:8181/REAgency/webapi/sellingOffer/details/" + id).map(
      (response:Response)=> {return <IEstateDetail> response.json()}
    )
  }
  getCountries():Observable<any>{
    return this.http.get("http://localhost:8181/REAgency/webapi/location/countries").map(
      (resp)=>{
        return resp.json();}
    )
  }
  getCities(id:number):Observable<any>{
    return this.http.get("http://localhost:8181/REAgency/webapi/location/city/" + id).map(
      (resp:Response)=>{return resp.json();}
    )
  }
  getStates(id:number):Observable<any>
  {
    return this.http.get("http://localhost:8181/REAgency/webapi/location/state/" + id).map(
      (resp:Response)=>{return resp.json();}
    )

  }
  getDistricts(id:number):Observable<any>{
    return this.http.get("http://localhost:8181/REAgency/webapi/location/district/" + id).map(
      (resp:Response)=>{return resp.json();}
    )
  }
  getSellingOfferTypes():Observable<any>{
    return this.http.get("http://localhost:8181/REAgency/webapi/type/SellingOfferType").map(
      (resp:Response)=>{return resp.json();})
  }
  getEstateTypes():Observable<any>{
    return this.http.get("http://localhost:8181/REAgency/webapi/type/EstateType").map(
      (resp:Response)=>{return resp.json();})
  }
  addEstate(estateObj){
    let headers = new Headers(({'Content-Type': 'application/json'}));
    let options = new RequestOptions({headers: headers})
    this.http.post("http://localhost:8181/REAgency/webapi/estate/newEstate", estateObj,
      options).map(((response: Response) => {
      return response.json()
    })).subscribe();
  }
}
