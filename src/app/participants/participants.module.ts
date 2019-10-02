import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantsService } from './participants.service';



@NgModule({
  providers: [ParticipantsService],
  imports: [
    CommonModule
  ]
})
export class ParticipantsModule { }
