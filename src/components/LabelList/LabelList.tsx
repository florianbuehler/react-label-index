import React from 'react';
import styled from 'styled-components';
import { LabelListProps } from './LabelList.types';
import { RankedLabel } from '../index.types';
import LabelItem from '../LabelItem/LabelItem';

const StyledHeader = styled.h2`
  text-align: left;
  font-size: 1rem;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  margin: 0;
  padding: 0;

  list-style: none;

  &::after {
    content: '';
    flex: auto;
  }
`;

const LabelList: React.FC<LabelListProps> = ({ title, labels }): React.ReactElement => {
  return (
    <>
      <StyledHeader>{title}</StyledHeader>
      <StyledList>
        {labels.map((label: RankedLabel) => (
          <LabelItem key={label.title} {...label} />
        ))}
      </StyledList>
    </>
  );
};

export default LabelList;
