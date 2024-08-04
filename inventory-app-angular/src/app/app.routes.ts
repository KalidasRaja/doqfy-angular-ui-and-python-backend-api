import { Routes } from '@angular/router';
import { InventoryListComponent } from './pages/inventory/inventory-list/inventory-list.component';
import { InventoryCreateComponent } from './pages/inventory/inventory-create/inventory-create.component';
import { InventoryUpdateComponent } from './pages/inventory/inventory-update/inventory-update.component';

export const routes: Routes = [
    {
        path        :   '',
        component   :   InventoryListComponent
    },
    {
        path        :   'inventory/create',
        component   :   InventoryCreateComponent
    },
    {
        path        :   'inventory/edit/:id',
        component   :   InventoryUpdateComponent
    }
];
