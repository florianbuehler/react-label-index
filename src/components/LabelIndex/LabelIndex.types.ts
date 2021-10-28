import { Label, Rank } from '../index.types';

export type LabelIndexProps = {
  title?: string;
  labels: Label[];
  sortFn?: (a: Label, b: Label) => number;
  rankFn?: (label: Label) => Rank;
};
