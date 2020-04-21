import { Http}  from '@angular/http'
import { Injectable } from '@angular/core'

@Injectable()
export class ApiService {
    constructor (private http: Http) {}

    getMessage(){
        this.http.get('http://localhost:3000/posts').subscribe(res =>{
            console.log(res)
        })
    }

    registerUser(registerData){
        this.http.post('http://localhost:3000/register', registerData).subscribe(res =>{
            console.log(res)
        })
    }

    loginUser(loginData){
        /*this.http.post('http://localhost:3000/register', registerData).subscribe(res =>{
            console.log(res)
        })*/
    }
}