import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { WORD_LIST } from './word-list';

@Injectable({
  providedIn: 'root'
})
export class WordListService {

  constructor() { }

  random(exclude: string[] = []): string {
    return _.sample(_.difference(WORD_LIST, exclude));
  }
}
