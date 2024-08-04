import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private router : Router) { }

  public handleError(error : HttpErrorResponse){
    if (error.status === 400) {
      if (error.error['sku']) { 
        alert(error.error.sku);
      } else{
        Swal.fire("Error", "Bad Request, Please check your payload data", "warning");
        const getUrl = window.location.href;
        window.location.href = getUrl;
      }

    }else if(error.status  === 404){
      Swal.fire("Warning", "Not Found, Please try later", "warning");
      const getUrl = window.location.href;
      window.location.href = getUrl;
      
    }else if (error.status === 500) {
      Swal.fire("Error", "Internal Server Error, Please try after sometime..", "error");
      const getUrl = window.location.href;
      window.location.href = getUrl;
    }

    return throwError(() => error);
  }
}
