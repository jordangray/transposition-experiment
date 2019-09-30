import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordTestComponent } from './word-test/word-test.component';



@NgModule({
  declarations: [WordTestComponent],
  exports: [WordTestComponent],
  imports: [
    CommonModule
  ]
})
export class WordsModule { }
