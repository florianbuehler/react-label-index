import { HTMLProps } from 'react';

export type Label = {
  title: string;
  count?: number;
} & HTMLProps<HTMLAnchorElement>;

export type RankedLabel = {
  rank: Rank;
} & Label;

export enum Rank {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
  Ten = 10
}
