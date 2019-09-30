import { Injectable } from '@angular/core';
import { DICTIONARY } from './mock-dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor() { }

  getWords(): string[] {
    return DICTIONARY;
  }
}
