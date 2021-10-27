import React from 'react';
import styled from 'styled-components';
import { RankedLabel } from './LabelIndex';
import LabelItem from './LabelItem';

type Props = {
  title?: string;
  labels: RankedLabel[];
};

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

const LabelList: React.FC<Props> = ({ title, labels }): React.ReactElement => {
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
