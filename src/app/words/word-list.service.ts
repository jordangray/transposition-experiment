import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { WORD_LIST, PRACTICE_WORD_LIST } from './word-list';

@Injectable({
  providedIn: 'root'
})
export class WordListService {

  wordList: string[];

  constructor() { }

  loadWordList(practice: boolean = false) {
    this.wordList = practice ? PRACTICE_WORD_LIST : WORD_LIST;
  }

  random(exclude: string[] = []): string {
    return _.sample(_.difference(this.wordList, exclude));
  }
}
