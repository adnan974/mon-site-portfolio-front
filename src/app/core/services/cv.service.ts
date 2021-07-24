import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private http:HttpClient) { }

  getCvData():Observable<any>{
    return this.http.get(`${environment.API_BASE_URL}/cv`)
  }
}
