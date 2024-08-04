import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryApiService {

  constructor(private http:HttpClient, private errorHandler : ErrorHandlerService) { }
  
  private header_params = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json"
    })
  };

  async get_inventory_list() : Promise <any>{
    try {
      return await this.http.get<any>(`${environment.APIURL}${environment.METHODS.GET_INVENTORY}`, this.header_params).toPromise();
    } catch (error) {
      this.errorHandler.handleError(error as HttpErrorResponse);
      return Promise.reject(error);
    }
  }

  async create_inventory(data: any): Promise<any> {
    try {
      return await this.http.post<any>(`${environment.APIURL}${environment.METHODS.GET_INVENTORY}`, data, this.header_params).toPromise();
    } catch (error) {
      this.errorHandler.handleError(error as HttpErrorResponse);
      return Promise.reject(error);
    }
  }

  async get_inventory_data() : Promise <any>{
    try {
      return await this.http.get<any>(`${environment.APIURL}${environment.METHODS.GET_INVENTORY}${localStorage.getItem('current_inventory_id')}`, this.header_params).toPromise();
    } catch (error) {
      this.errorHandler.handleError(error as HttpErrorResponse);
      return Promise.reject(error);
    }
  }
  
  async update_inventory(data:any) : Promise <any>{
    try {
      return await this.http.put<any>(`${environment.APIURL}${environment.METHODS.UPDATE_OR_DELETE_INVENTORY}`, data, this.header_params).toPromise();
    } catch (error) {
      this.errorHandler.handleError(error as HttpErrorResponse);
      return Promise.reject(error);
    }
  }

  async delete_inventory() : Promise <any>{
    try {
      return await this.http.delete<any>(`${environment.APIURL}${environment.METHODS.UPDATE_OR_DELETE_INVENTORY}`, this.header_params).toPromise();
    } catch (error) {
      this.errorHandler.handleError(error as HttpErrorResponse);
      return Promise.reject(error);
    }
  }

}
