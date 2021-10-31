import React from 'react';
import styled from 'styled-components';
import { LabelIndexProps } from './LabelIndex.types';
import { Label, Rank, RankedLabel } from '../index.types';
import LabelList from '../LabelList/LabelList';

const StyledContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
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

const LabelIndex: React.FC<LabelIndexProps> = ({ title, labels, sortFn, rankFn }): React.ReactElement => {
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
