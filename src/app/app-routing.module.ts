import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordTestComponent } from './words/word-test/word-test.component';
import { RegisterComponent } from './register/register.component';
import { InstructionsComponent } from './instructions/instructions.component';


const routes: Routes = [
  { path: '', component: RegisterComponent, data: { title: 'Register' } },
  { path: 'instructions/:id', component: InstructionsComponent, data: { title: 'Instructions' }  },
  { path: 'test/:id', component: WordTestComponent, data: { title: 'Test' }  },
  { path: 'practice/:id', component: WordTestComponent, data: { practice: true, title: 'Practice' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
