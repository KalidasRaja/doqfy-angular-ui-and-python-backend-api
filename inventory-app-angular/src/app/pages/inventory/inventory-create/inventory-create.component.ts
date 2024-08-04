import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { InventoryApiService } from '../../../service/inventory-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inventory-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inventory-create.component.html',
  styleUrl: './inventory-create.component.css'
})
export class InventoryCreateComponent {
  inventoryObj : Invertory;
  constructor (private apiServ : InventoryApiService){
    this.inventoryObj = new Invertory;
  }

  ngOnInit() : void{}

  isFormSubmited: boolean = false;

  async onCreateInventory () : Promise <void>{
    const res = await this.apiServ.create_inventory(this.inventoryObj);
    Swal.fire({
      title       :   "Success",
      text        :   "New Inventory data has been added successfully",
      icon        :   "success",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/";
      }
    })
  }
  

  

}


export class Invertory {
  name : string;
  description : string;
  sku : any;
  category : string;
  quantity : string;
  supplier_details : string;
  price : string;
  constructor(){
    this.name = '';
    this.description = '';
    this.sku = '';
    this.category = '';
    this.quantity = '';
    this.supplier_details = ''
    this.price = ''
  }
}
