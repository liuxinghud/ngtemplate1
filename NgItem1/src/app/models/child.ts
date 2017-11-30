import { User } from "./user";
import { Grade } from "./grade";
import { Classes } from "./classes";
//学生
export class Child extends User{
  public grade:Grade;
  public classes:Classes;
  public No:string;
 

}