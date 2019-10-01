import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordTestComponent } from './words/word-test/word-test.component';


const routes: Routes = [
  { path: 'test', component: WordTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
