import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IngredientModel } from '../models/ingredient.model';
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private REST_API_SERVER="http://localhost:1337/api";
  constructor(private httpClient:HttpClient) { }
  public sendGetRequest(endpoint: string) {
    return this.httpClient.get(this.REST_API_SERVER + endpoint);
  }
  public sendPostRequest(endpoint: string,data:any) {
    return this.httpClient.post(this.REST_API_SERVER + endpoint,data);
  }
  public sendPatchRequest(endpoint: string,data:any) {
    return this.httpClient.patch(this.REST_API_SERVER + endpoint,data);
  }
  public sendDeleteRequest(endpoint: string) {
    return this.httpClient.delete(this.REST_API_SERVER + endpoint);
  }
}