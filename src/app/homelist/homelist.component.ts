import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-homelist',
  templateUrl: './homelist.component.html',
  styleUrls: ['./homelist.component.scss']
})
export class HomelistComponent implements OnInit {
  isbound:boolean=false;
  updateduser: any;
  


  //inject service into the constructor
  constructor(private service:HttpService){}
  
  public tableData: any[] = [];
  
    ngOnInit() {
   
  
    this.service.getAlluserdetails().subscribe((data) => {
      console.log(data);
      
      this.tableData = data;
    },(error) => {
      console.error('Error fetching data:', error);
    });
  


    
    }
    
  
    fetchData() {
      this.service.getAlluserdetails().subscribe((data) => {
        console.log(data);
        
        this.tableData = data;
      },(error) => {
        console.error('Error fetching data:', error);
      });
  
      this.isbound=!this.isbound;
    }
  
  
    searchUserId!: string;
    user: any;
  
   
  
    searchUser() {
      if (this.searchUserId) {
        this.service.getUserById(this.searchUserId).subscribe(
          (data) => {
            this.user = data;
          },
          (error) => {
            console.error('Error fetching user:', error);
          }
        );
      }
    }
   
  // delete user
  
    deleteUser(userId: any) {
      this.service.deleteUser(userId).subscribe(
        ( deletedUser) => {
          console.log(`User with ID ${userId} deleted successfully.`);
          // Store the deleted user for display
          this.deletedUser = deletedUser;
         // Delete the user from the  array
         this.tableData = this.tableData.filter((user) => user.id !== userId);
         
        },
        (error) => {
          console.error('Error deleting user:', error);
        }
      );
    }
   deletedUser: any | null = null;

  //  update user
//   updateuser(userid:any){
// this.service.updateUser(userid).subscribe((updateduser)=>{
//   console.log(`User with ID ${userid} updated successfully.`);
  
//   this.updateduser= updateduser;
//   this.tableData = this.tableData.find((user) => user.id == userid);
//   this.tableData = this.tableData.filter((user) => user.id !== userid);
 
  
// })
//   }



}
