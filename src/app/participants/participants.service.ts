import { Injectable } from '@angular/core';
import { Participant } from './participant';
import * as uniqid from 'uniqid';
import { TestWord } from '../words/word-test/test-word';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  participants: Map<string, Participant> = new Map();

  constructor() { }

  register(name: string) {
    const participant: Participant = {
      name,
      id: uniqid(),
      results: [],
    }

    this.participants.set(participant.id, participant);
    console.log('Registered participant:', participant);

    return participant.id;
  }

  addTestResult(participantID: string, test: TestWord) {
    this.participants.get(participantID).results.push(test);
  }

  get(participantID: string) {
    return this.participants.get(participantID);
  }
}
