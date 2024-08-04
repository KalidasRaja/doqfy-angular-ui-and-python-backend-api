import { Component } from '@angular/core';
import { InventoryApiService } from '../../../service/inventory-api.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inventory-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent {
  data:any;
  constructor (private apiServ : InventoryApiService){

  }

  ngOnInit() : void {

    this.get_inventroy_list();

    document.addEventListener('click', (event) =>{
      const target = event.target as HTMLElement;
      if (target.closest('.edit-inventory')) {
        const button_edit        = target.closest('.edit-inventory') as HTMLElement;
        const data_id_edit       = button_edit.getAttribute('id');
        if (data_id_edit) {
          localStorage.setItem('current_inventory_id', data_id_edit);
        }
      } else if(target.closest('.delete-inventory')){
        const button_delete        = target.closest('.delete-inventory') as HTMLElement;
        const data_id_delete       = button_delete.getAttribute('id');
        if (data_id_delete) {
          localStorage.setItem('current_inventory_id', data_id_delete);
          this.onDeleteInventory();
        }
      }
    });

  }

  async get_inventroy_list() : Promise <any>{
    const res = await this.apiServ.get_inventory_list();
    this.data = res;
  }

  async onDeleteInventory () : Promise <void>{
    Swal.fire({
      title       :   "Are you sure?",
      text        :   "Are you sure want to delete inventory item : " + localStorage.getItem("current_inventory_id") + "?",
      icon        :   "warning",
      showCancelButton  :     true,
      reverseButtons    :     true,
      confirmButtonText :     "Yes"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await this.apiServ.delete_inventory();
        Swal.fire({
          title     :   "Success",
          text      :   "Successfully deleted the inventory item",
          icon      :   "success"
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/";
          }
        })
      }
    });
  }


}
