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
  editMode:number = -1
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

    this.editMode = id

  }
  updateItem(id: number, name : string){
    this.editMode = -1
    var updatedtype = { id: id, type: name };
    this.typeService.updateType(updatedtype).subscribe()
  }
  removeItem(id){

  }
  newItem(){}
}
