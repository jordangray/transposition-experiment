import { Component, OnInit } from '@angular/core';
import { WordListService } from '../word-list.service';
import { TestWord } from './test-word';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { ParticipantsService } from 'src/app/participants/participants.service';
import { Participant } from 'src/app/participants/participant';

@Component({
  selector: 'app-word-test',
  templateUrl: './word-test.component.html',
  styleUrls: ['./word-test.component.scss']
})
export class WordTestComponent implements OnInit {

  participant: Participant;
  practice: boolean;

  test: TestWord;
  spelling: string;
  seen: string[] = [];

  shownAt: number;

  constructor(
    private words: WordListService,
    private route: ActivatedRoute,
    private router: Router,
    private participants: ParticipantsService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.practice = !!this.route.snapshot.data['practice'];

    this.words.loadWordList(this.practice);
    this.participant = this.participants.get(id);

    if (!this.participant) {
      this.router.navigate(['']);
    }

    this.nextWord();
  }

  skipWord() {
    this.nextWord(true);
  }

  testWord(spelling) {
    if (spelling !== this.test.word) return;

    this.nextWord();
  }

  nextWord(skipped: boolean = false) {
    // Clear spelling
    this.spelling = '';

    const now = +new Date();

    if (!this.practice && this.test) {
      this.test.timeSpent = now - this.shownAt;
      this.test.skipped = skipped;

      this.participants.addTestResult(this.participant.id, this.test);
    }

    const word = this.words.random(this.seen);

    if (!word) {
      this.router.navigate([this.practice ? 'instructions' : 'results', this.participant.id]);
      return;
    }

    const transposedAt = _.random(1, word.length - 1)
    const transposed = this.transpose(word, transposedAt);

    this.seen.push(word);
    this.shownAt = now;

    this.test = {
      word,
      transposed,
      transposedAt,
      timeSpent: -1,
      skipped: false
    }
  }

  transpose(word: string, swap: number) {
    return (
      word.slice(0, swap - 1) +
      word[swap] + word[swap - 1] +
      word.slice(swap + 1, word.length)
    );
  }

}
