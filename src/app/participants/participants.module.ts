import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results/results.component';
import { ParticipantsService } from './participants.service';



@NgModule({
  declarations: [ResultsComponent],
  exports: [ParticipantsService],
  imports: [
    CommonModule
  ]
})
export class ParticipantsModule { }
