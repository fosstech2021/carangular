import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AaheoService {
  public path = environment.api_url;
  id :string;

  constructor(private http:HttpClient) { }

  getproduct()
  {
    return this.http.get(this.path+"/product/");
  }
  productlists(id)
  {
    return this.http.get(this.path+"/product/"+id);
  }
  getpost()
  {
    return this.http.get(this.path+"/post/");
  }
  getpostId(id)
  {
    return this.http.get(this.path+"/post/"+id);
  }
  getComment()
  {
    return this.http.get(this.path+"/comment/");
  }
  postLogin(obj){
    return this.http.post(this.path+"/login", obj)
  }
  PostcontactUs(obj){
    return this.http.post(this.path+"/contact_us/",obj)
  }
  getcontactUs(){
    return this.http.get(this.path+"/contact_us/")
  }

}
