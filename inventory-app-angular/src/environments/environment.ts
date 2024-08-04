export const environment = {
    APIURL              :   'http://127.0.0.1:8000/api/',
    METHODS             :   {
        GET_INVENTORY                   :   'items/',
        UPDATE_OR_DELETE_INVENTORY      :   'items/'+`${localStorage.getItem('current_inventory_id')}`+'/'
    }
};
