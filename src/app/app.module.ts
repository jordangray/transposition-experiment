import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordsModule } from './words/words.module';
import { RegisterModule } from './register/register.module';
import { InstructionsModule } from './instructions/instructions.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WordsModule,
    RegisterModule,
    InstructionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
