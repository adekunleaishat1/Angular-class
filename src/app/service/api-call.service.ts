import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(public http: HttpClient) { }
  public getuser(){
    return this.http.get("https://dummyjson.com/users")
  }

  public getOneUser(userID: string){
    return this.http.get(`https://dummyjson.com/users/${userID}`)
  }

  public getData(){
    return this.http.get('https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=UxxajLWwzqY')
  
  }
}
