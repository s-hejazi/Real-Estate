/**
 * Created by shidokht on 2017-08-06.
 */
import {Component} from "@angular/core";
import {TypeService} from "./Type.service";
@Component({
  selector: 'type',
  templateUrl: './Type.component.html'
})
export class TypeItem{

  typeSelected: string
  radioSelected: string = ''
  typeItems
  constructor(private typeService:TypeService){}
  retrieveTypeItems(){

    this.typeService.getTypeItems(this.typeSelected).subscribe(
      resp =>{
        console.log(resp)
        this.typeItems = resp;
        this.radioSelected = ''
      }
    )
  }
  editItem(id){

  }
  removeItem(id){

  }
  newItem(){}
}
