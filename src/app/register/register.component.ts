import { Component } from '@angular/core';
import { ParticipantsService } from '../participants/participants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private participants: ParticipantsService,
    private router: Router,
  ) { }

  register(name) {
    const participantID = this.participants.register(name);
    this.router.navigate(['instructions', participantID]);
  }

}
