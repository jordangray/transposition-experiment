import { Component, OnInit } from '@angular/core';
import { Participant } from '../participants/participant';
import { ActivatedRoute, Router } from '@angular/router';
import { ParticipantsService } from '../participants/participants.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

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
