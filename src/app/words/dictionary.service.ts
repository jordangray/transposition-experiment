import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { DICTIONARY } from './mock-dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor() { }

  random(exclude: string[] = []): string {
    return _.sample(_.difference(DICTIONARY, exclude));
  }
}
