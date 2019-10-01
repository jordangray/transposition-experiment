import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Participant } from '../participants/participant';
import { ParticipantsService } from '../participants/participants.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {

  participant: Participant;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private participants: ParticipantsService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.participant = this.participants.get(id);

    if (!this.participant) {
      this.router.navigate(['']);
    }
  }

}
