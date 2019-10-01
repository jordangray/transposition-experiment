import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../dictionary.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-word-test',
  templateUrl: './word-test.component.html',
  styleUrls: ['./word-test.component.scss']
})
export class WordTestComponent implements OnInit {

  spelling: string;
  word: string;
  transposed: string;
  seen: string[] = [];

  shownAt: number;
  times: { [word: string]: number } = {};

  constructor(private dictionary: DictionaryService) { }

  ngOnInit() {
    this.nextWord();
  }

  skipWord() {
    this.nextWord(true);
  }

  testWord(spelling) {
    if (spelling !== this.word) return;

    this.nextWord();
  }

  nextWord(skipped: boolean = false) {
    const now = +new Date();

    if (this.word) {
      this.times[this.word] = skipped ? -1 : now - this.shownAt;
    }

    this.spelling = '';

    this.word = this.dictionary.random(this.seen);

    if (!this.word) {
      console.log(this.times);
      return;
    }

    this.transposed = this.transpose(this.word);

    this.seen.push(this.word);
    this.shownAt = now;
  }

  transpose(word: string, swap = _.random(1, word.length - 1)) {
    const len = word.length;

    return word.slice(0, swap - 1) + word[swap] + word[swap - 1] + word.slice(swap + 1, len);
  }

}
