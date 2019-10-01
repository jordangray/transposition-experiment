import { TestWord } from '../words/word-test/test-word';

export interface Participant {
  id: string;
  name: string;
  results?: TestWord[];
}
