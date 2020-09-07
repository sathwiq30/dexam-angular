import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthGuard } from 'src/app/auth/auth.guard';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private http : HttpClient, private auth : AuthGuard) { }
  firstFormGroup : FormGroup
  ngOnInit() {
    this.uid = this.auth.getUid()
    this.firstFormGroup = this.formBuilder.group({ 
      current_residing_address : ['', Validators.required],
      aadhar_address: ['', Validators.required],
      alternate_phone_number: ['', Validators.required],
      father_guardian_name           : ['', Validators.required],
    });
  }
  msg
 uid
    async onSubmit(){
      if( !this.previewUrlId  ){
        return  
      } 
      if( !this.previewUrl  ){
        return
      } 
      if( !this.previewUrlDp ){
        return  
      }
      var headers_object = new HttpHeaders({ 
        'Authorization': "Bearer " + this.auth.getToken()
     })
     const httpOptions = {
       headers: headers_object
     }; 
      let formData = new FormData()
      formData.append('aadhar_card_image',this.photos[0])
      formData.append('id_card_image',this.photosId[0]) 
      formData.append('display_pic',this.photosDp[0])
      formData.append('current_residing_address', this.firstFormGroup.value.current_residing_address) 
      formData.append('aadhar_address', this.firstFormGroup.value.aadhar_address) 
      formData.append('alternate_phone_number', this.firstFormGroup.value.alternate_phone_number) 
      formData.append('father_guardian_name', this.firstFormGroup.value.father_guardian_name) 
  
      this.http.post('https://namasteguru.herokuapp.com/api/auth/student/update_personal_details/'+this.uid,
      formData , httpOptions
       )
      .toPromise()
      .then((succ : any)=>{
         
        this.msg = succ.message
        console.log('success')
        console.log(succ)
        this.isLoading = false
  
      })
      .catch( error=>{   
        console.log(error)
        this.msg = error.error.data[0].msg
        this.isLoading = false;  
      })
    }
    isLoading = false;  
  imagePreview = ''
  previewUrl  : boolean = false
  images = [] 
  photos = []
  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    
    var mimeType = file.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    console.log(this.photos)
    var reader = new FileReader();      
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.photos.push(file)
      this.images.push( reader.result); 
      this.previewUrl = true
      // console.log(reader.result)
    }
  }
  onRemove(i){
    this.photos.splice(i,1)
    this.images.splice(i,1)
    console.log(i)
    console.log(this.images) 
    if(this.images.length==0)
      this.previewUrl = false
  }  

  
  imagePreviewId= ''
  previewUrlId  : boolean = false
  imagesId = [] 
  photosId = []
  onImagePickedId(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    
    var mimeType = file.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    console.log(this.photosId)
    var reader = new FileReader();      
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.photosId.push(file)
      this.imagesId.push( reader.result); 
      this.previewUrlId = true
      // console.log(reader.result)
    }
  }
  onRemoveId(i){
    this.photosId.splice(i,1)
    this.imagesId.splice(i,1)
    console.log(i)
    console.log(this.imagesId) 
    if(this.imagesId.length==0)
      this.previewUrlId = false
  }

  imagePreviewDp= ''
  previewUrlDp  : boolean = false
  imagesDp = [] 
  photosDp = []
  onImagePickedDp(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    
    var mimeType = file.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    console.log(this.photosDp)
    var reader = new FileReader();      
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.photosDp.push(file)
      this.imagesDp.push( reader.result); 
      this.previewUrlDp = true
      // console.log(reader.result)
    }
  }
  onRemoveDp(i){
    this.photosDp.splice(i,1)
    this.imagesDp.splice(i,1)
    console.log(i)
    console.log(this.imagesDp) 
    if(this.imagesDp.length==0)
      this.previewUrlDp = false
  }

}
