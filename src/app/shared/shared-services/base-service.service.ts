import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private baseUrl;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.api_base_url;
  }

  /**
   * Generic GET Method
   * @param path URL path
   */
  public get(path: string) {
    return this.httpClient.get(this.baseUrl + path);
  }

  /**
   * Generic GET Method
   * @param path URL path
   */
  public getAndCustomHeaders(path: string, header: any) {
    return this.httpClient.get(this.baseUrl + path, header);
  }

  /**
   * Generic POST Method
   * @param path URL path
   * @param body Request body
   */
  public post(path: string, body: any) {
    return this.httpClient.post(this.baseUrl + path, body);
  }

  /**
   * Generic PUT Method
   * @param path URL path
   * @param body Request body
   */
  public put(path: string, body: any) {
    return this.httpClient.put(this.baseUrl + path, body);
  }

  /**
   * Generic PATCH Method
   * @param path URL path
   * @param body Request body
   */
  public patch(path: string, body: any) {
    return this.httpClient.patch(this.baseUrl + path, body);
  }

  /**
   * Generic DELETE Method
   * @param path URL path
   */
  public delete(path: string) {
    return this.httpClient.delete(this.baseUrl + path);
  }
}
