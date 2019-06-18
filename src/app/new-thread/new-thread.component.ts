import {Component, OnInit,Inject} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { ThreadsService } from '../threads.service';
import {MatSnackBar} from '@angular/material/snack-bar';
// import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {

  tags : String[];
  tag : String = "";

  constructor(private dialogRef: MatDialogRef<NewThreadComponent>,private snackBar: MatSnackBar, private threadsService : ThreadsService) {
    this.tags = [];
  }

  ngOnInit() {
  }

  AddTags(){
    this.tags.push(this.tag);
    console.log(this.tags);
    this.tag="";
  }

  OnSubmit(form : NgForm){
    if(form.value.title && form.value.description){
      const thread = {
        title : form.value.title,
        description : form.value.description,
        tags: this.tags,
        email : 'rubal@gmail.com'
      }
      this.threadsService.addThread(thread)
      .subscribe(()=> console.log("Thread Submiited"));
      
      
      this.dialogRef.close(thread);
      let snackBarRef = this.snackBar.open('Thread Added', 'Dismiss');
     
    }
  }
      
     
  
  OnClose(){
    
    this.dialogRef.close();
  }
  

}
