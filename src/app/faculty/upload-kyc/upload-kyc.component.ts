import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthGuard } from 'src/app/auth/auth.guard';

@Component({
  selector: 'app-upload-kyc',
  templateUrl: './upload-kyc.component.html',
  styleUrls: ['./upload-kyc.component.scss']
})
export class UploadKycComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private http : HttpClient, private auth : AuthGuard) { }
  @Input() reverify
  thirdFormGroup: FormGroup;
  ngOnInit(): void {
    this.thirdFormGroup = this._formBuilder.group({
      degree : [ '' , Validators.required],
      description : [ '', Validators.required],
      profession : [ '' , Validators.required],
      address : [ '', Validators.required],
    });  
  }
  msg 
  isLoading
  async onSumbit(){
    if( !this.previewUrlId  ){
      return  
    }
    if( !this.previewUrlHd  ){
      return  
    }
    if( !this.previewUrl  ){
      return
    }
    if( !this.previewUrlVD  ){
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
   let formData1 = new FormData()
    formData1.append('video_demo',this.video) 
    await this.http.post('https://namasteguru.herokuapp.com/api/faculty/uploadDemo',
   formData1 , httpOptions
    )
   .toPromise()
   .then((succ : any)=>{
     
     // this.route.navigateByUrl('verify')
     this.msg = succ.message
     console.log('success uplaoded video ') 

   })
   .catch( error=>{   
     console.log(error)
     this.msg = error.error.data[0].msg   
   })


    let formData = new FormData()
    formData.append('aadhar_card_image',this.photos[0])
    formData.append('id_card_image',this.photosId[0])
    formData.append('highest_degree',this.photosHd[0])
    formData.append('display_pic',this.photosDp[0])
    formData.append('degree', this.thirdFormGroup.value.degree)
    formData.append('short_profile_description', this.thirdFormGroup.value.description)
    formData.append('profession', this.thirdFormGroup.value.profession)
    formData.append('current_address', this.thirdFormGroup.value.address)

    this.http.post('https://namasteguru.herokuapp.com/api/faculty/uploadKyc',
    formData , httpOptions
     )
    .toPromise()
    .then((succ : any)=>{
      
      // this.route.navigateByUrl('verify')
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
  onSumbitReverify(){
    if( !this.previewUrlId  ){
      return  
    }
    if( !this.previewUrlHd  ){
      return  
    }
    if( !this.previewUrl  ){
      return
    } 
    // if( !this.previewUrlDp ){
    //   return  
    // }
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
   })
   const httpOptions = {
     headers: headers_object
   }; 

    let formData = new FormData()
    formData.append('aadhar_card_image',this.photos[0])
    formData.append('id_card_image',this.photosId[0])
    formData.append('highest_degree',this.photosHd[0])
    // formData.append('display_pic',this.photosDp[0])
    formData.append('degree', this.thirdFormGroup.value.degree) 
    formData.append('profession', this.thirdFormGroup.value.profession)
    formData.append('current_address', this.thirdFormGroup.value.address)

    this.http.post('https://namasteguru.herokuapp.com/api/faculty/reuploadKyc',
    formData , httpOptions
     )
    .toPromise()
    .then((succ : any)=>{
      
      // this.route.navigateByUrl('verify')
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

  video
  videoUrl
  previewUrlVD = false
  onVedioPickedId($event){
    const file = (event.target as HTMLInputElement).files[0];
    
    var mimeType = file.type;
    console.log(mimeType)
    if (mimeType.match(/video\/*/) == null) {
      return;
    }
    var reader = new FileReader();      
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.video =  file
      this.videoUrl =  reader.result; 
      this.previewUrlVD = true
      // console.log(reader.result)
    }
  }
  onRemoveVd( ){
    this.video =null
    this.videoUrl = null 
      this.previewUrlVD = false
  }


  imagePreviewHd= ''
  previewUrlHd  : boolean = false
  imagesHd = [] 
  photosHd = []
  onImagePickedHd(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    
    var mimeType = file.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    console.log(this.photosId)
    var reader = new FileReader();      
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.photosHd.push(file)
      this.imagesHd.push( reader.result); 
      this.previewUrlHd = true
      // console.log(reader.result)
    }
  }
  onRemoveHd(i){
    this.photosHd.splice(i,1)
    this.imagesHd.splice(i,1)
    console.log(i)
    console.log(this.imagesId) 
    if(this.imagesHd.length==0)
      this.previewUrlHd = false
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
