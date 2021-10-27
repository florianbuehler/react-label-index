import React from 'react';
import styled from 'styled-components';
import LabelList from './LabelList';

export type Label = {
  title: string;
  count?: number;
} & React.HTMLProps<HTMLAnchorElement>;

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

type Props = {
  title?: string;
  labels: Label[];
  sortFn?: (a: Label, b: Label) => number;
  rankFn?: (label: Label) => Rank;
};

const StyledContainer = styled.div`
  box-sizing: border-box;
  width: 1200px;
  height: 200px;
`;

const rankEvenly = (min: number, max: number, label: Label): Rank => {
  const count = label.count ?? 1;

  for (let i = 1; i <= 10; i++) {
    if (min + ((i - 1) / 10) * (max - min) <= count && count < min + (i / 10) * (max - min)) {
      return i;
    }
  }

  return Rank.Ten;
};

const LabelIndex: React.FC<Props> = ({ title, labels, sortFn, rankFn }): React.ReactElement => {
  const determineOrderFn = sortFn ?? ((a: Label, b: Label) => a.title.localeCompare(b.title));
  const sortedLabels = labels.sort(determineOrderFn);

  const minCount = Math.min(...labels.map((label: Label) => label.count || 1));
  const maxCount = Math.max(...labels.map((label: Label) => label.count || 1));

  const determineRankFn = rankFn ?? ((label: Label) => rankEvenly(minCount, maxCount, label));
  const rankedLabels = sortedLabels.map((label: Label): RankedLabel => {
    return { ...label, rank: determineRankFn(label) };
  });

  return (
    <StyledContainer>
      <LabelList title={title} labels={rankedLabels} />
    </StyledContainer>
  );
};

export default LabelIndex;
