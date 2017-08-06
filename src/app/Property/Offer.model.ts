/**
 * Created by shidokht on 2017-07-23.
 */
export interface IOffer{
  offerId: number;
  name: string;
  family: string;
  offerPrice: number;
  offerExtraInfo?:string;
  phone?: string;
  email:string;

}
