import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,} from "@angular/forms";
import {CustomerType} from "../../model/CustomerType";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customer: FormGroup;
  customerTypes: CustomerType[] = [];
  customerType = null;

  constructor() {
    this.customer=new FormGroup({
      code:new FormControl(""),name:new FormControl(""),Birthday:new FormControl(""),
      gender:new FormControl(""),customerIdCard:new FormControl(""),customerPhone:new FormControl(""),
      email:new FormControl(""),customerAddress:new FormControl(""),customerType:new FormControl(this.customerType)
    })
  }

  ngOnInit(): void {
  }

  getInfoCustomer() {
    // @ts-ignore
    console.log(this.customer.value.name);
  }
}
