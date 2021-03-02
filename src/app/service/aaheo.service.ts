import { EventEmitter, Injectable, Output } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams, JsonpClientBackend} from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AaheoService {
  public path = environment.api_url;
  id :string;
  @Output() getLoggedInData: EventEmitter<any> = new EventEmitter();
  

  constructor(private http:HttpClient) { 
    debugger;
  
  }

 
  getproduct()
  {
    return this.http.get(this.path+"/product/");
  }
  productlists(id)
  {
    return this.http.get(this.path+"/product/"+id);
  }

  productReview(id)
  {
    return this.http.get(this.path+"/review/?product_id="+id +"&order_by=created_at");
  }
  SaveproductReview(Data)
  {
    return this.http.post(this.path+"/review/" , Data);
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
  getBlogComment(id)
  {
    return this.http.get(this.path+"/comment/?post_id="+id+"&order_by=created_at" );
  }

  SaveBlogComment(Data)
  {
    return this.http.post(this.path+"/comment/" ,Data );
  }
  postLogin(obj){
    return this.http.post(this.path+"/login/", obj)
  }
  PostcontactUs(obj){
    return this.http.post(this.path+"/contact_us/",obj)
  }
  getcontactUs(){
    return this.http.get(this.path+"/contact_us/")
  }
  GetBrand(id)
  {
    return this.http.get(this.path+"/brand/?service_category=" + id);
  }
  GetSearchData(Value)
  {
    return this.http.get(this.path+"/search/?q=" + Value);
  }
  GetCarModel(id)
  {
    return this.http.get(this.path+"/car_model/?brand="+ id );
  }

  GetCarYear(id)
  {
    return this.http.get(this.path+"/car_year_model/?model_id="+id);
  }
  
  GetServiceType(id)
  {
    return this.http.get(this.path+"/service_type/" );
  }

  
  GetServiceTypeContainer(YearID ,FolderID)
  {
    return this.http.get(this.path+"/service_type_container/?folder="+FolderID+"&year=" +YearID );
  }

    
  GetserviceCategory()
  {
    return this.http.get(this.path+"/service_category/" );
  }

  GetParentFolder(id)
  {
    return this.http.get(this.path+"/folder/?year=" +id);
  }

  Setlogindetail(Data)
  {
    
  localStorage.setItem("UserLogIn", JSON.stringify(Data));
  
  this.getLoggedInData.emit(JSON.stringify(Data));

  }

  
  Getlogindetail()
  {
    
   return JSON.parse(  localStorage.getItem("UserLogIn"));

  }
  
}
