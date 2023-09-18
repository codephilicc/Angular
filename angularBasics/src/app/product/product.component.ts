import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

id:number;
name:string;
price:number;
constructor(){
  this.id=1;
  this.name="Mac Book Pro";
  this.price=1300;
}

public getId(){
  return this.id;
}
public getName(){
  return this.name;
}
public getPrice(){
  return this.price;
}



}
