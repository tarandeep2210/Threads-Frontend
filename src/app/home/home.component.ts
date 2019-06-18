import { Component, OnInit ,Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { NewThreadComponent } from '../new-thread/new-thread.component';

import{ Thread } from '../thread.model';
import { ThreadsService } from '../threads.service';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  threads : Thread[] = [];


  newThreadDialogRef: MatDialogRef<NewThreadComponent>;

  constructor(private threadsService : ThreadsService , private dialog: MatDialog) { 
      this.threadsService.getThreads().subscribe((threads)=> {
          this.threads = threads;
          console.log(this.threads);
      }); 
  }


  openDialog() {
    this.newThreadDialogRef = this.dialog.open(NewThreadComponent, {
      height: '500px',
      width: '700px',
    });
    this.newThreadDialogRef.afterClosed().subscribe(thread => {
      if(thread){
        this.threads.push(thread);
      }
      
      console.log(`Dialog result: ${thread}`); 
    });
  }
  
 

  ngOnInit() {
    
  }

}
