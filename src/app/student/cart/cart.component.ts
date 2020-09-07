import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthGuard } from 'src/app/auth/auth.guard';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  isLoading = true
  constructor(private http : HttpClient,private auth : AuthGuard) { }
  ngOnInit(): void { 
this.getData()
  
  }
  getData(){
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
   })
   const httpOptions = {
     headers: headers_object
   };
    this.http.get('https://namasteguru.herokuapp.com/api/student/getcartstatus' , httpOptions )
    .toPromise()
    .then((succ: any )=>{
      console.log(succ)
      this.cart = succ.message  
      this.isLoading = false  
    }
    )
    .catch(err=> console.log(err))

  }
   cart  = []

   deletwe(id){
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
   })
   const httpOptions = {
     headers: headers_object
   };
    this.http.post('https://namasteguru.herokuapp.com/api/student/removefromcart' , { cid : id}, httpOptions )
    .toPromise()
    .then((succ: any )=>{
      console.log(succ)
      this.cart = succ.message  
      this.isLoading = false  
      this.getData()
    }
    )
    .catch(err=> console.log(err))
   }
}
