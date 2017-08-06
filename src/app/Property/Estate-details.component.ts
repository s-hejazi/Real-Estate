/**
 * Created by shidokht on 2017-07-24.
 */
import {Component, Input} from "@angular/core";
import {IEstateDetail} from "./Estate.model";
@Component({
  selector: 'details',
  templateUrl: './Estate-details.component.html'
})
export class EstateDetails{

  @Input() propertyDetail: IEstateDetail
}
