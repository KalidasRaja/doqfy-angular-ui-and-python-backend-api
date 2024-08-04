import { Component } from '@angular/core';
import { InventoryApiService } from '../../../service/inventory-api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inventory-update',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inventory-update.component.html',
  styleUrl: './inventory-update.component.css'
})
export class InventoryUpdateComponent {

  inventoryObj : Invertory;
  constructor ( private apiServ : InventoryApiService){
    this.inventoryObj = new Invertory;
  }

  ngOnInit() : void{

    this.get_inventory_data();
  }

  async get_inventory_data() : Promise <void>{
    const res = await this.apiServ.get_inventory_data();
    this.inventoryObj = res;
  }

  isFormSubmited: boolean = false;

  async onUpdateInventory () : Promise <void>{
    const res = await this.apiServ.update_inventory(this.inventoryObj);
    Swal.fire({
      title       :   "Success",
      text        :   "Inventory data has been updated successfully",
      icon        :   "success",
    }).then((result) => {
      if (result.isConfirmed) {
        // window.location.href = "/";
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
