import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder,Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  public userData: any[] = []
  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.service.getUserById(this.router.snapshot.params['id']).subscribe((result:any)=>{
      console.log(result);
      this.recordForm=new  FormGroup({
        id: new FormControl(result['id']),
        name: new FormControl(result['name']),
        username: new FormControl(result['username']),
        address: new FormControl(result.address['city']),
        email: new FormControl(result['email']),
      });
      
    });
    
  }

  constructor(private fb: FormBuilder,private service:HttpService, private router:ActivatedRoute){}
  recordForm=new  FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    username: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
  });

  message:boolean=false;

onSubmit() {
  //  console.log(this.recordForm.value);
   this.service.updateuser(this.router.snapshot.params['id'],this.recordForm.value).subscribe((result)=>{
    // console.log(result);
    this.message=true
    
   })
   
  }


  removemessage(){
    this.message=false;
  }
  
}
