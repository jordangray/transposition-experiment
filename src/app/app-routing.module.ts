import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordTestComponent } from './words/word-test/word-test.component';
import { RegisterComponent } from './register/register.component';
import { InstructionsComponent } from './instructions/instructions.component';


const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'test', component: WordTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
