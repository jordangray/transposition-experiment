import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WordTestComponent } from './word-test/word-test.component';



@NgModule({
  declarations: [WordTestComponent],
  exports: [WordTestComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class WordsModule { }
