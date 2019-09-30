import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../dictionary.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-word-test',
  templateUrl: './word-test.component.html',
  styleUrls: ['./word-test.component.scss']
})
export class WordTestComponent implements OnInit {

  word: string;
  transposed: string;
  seen: string[] = [];

  constructor(private dictionary: DictionaryService) { }

  ngOnInit() {
    this.nextWord();
  }

  nextWord() {
    this.word = this.dictionary.random(this.seen);
    this.transposed = this.transpose(this.word);

    this.seen.push(this.word);
  }

  transpose(word: string, swap = _.random(1, word.length - 1)) {
    const len = word.length;

    return word.slice(0, swap - 1) + word[swap] + word[swap - 1] + word.slice(swap + 1, len);
  }

}
