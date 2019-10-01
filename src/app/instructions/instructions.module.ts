import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructionsComponent } from './instructions.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [InstructionsComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class InstructionsModule { }
