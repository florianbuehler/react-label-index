import React from 'react';
import styled from 'styled-components';
import { Label } from './LabelNavigation';
import LabelItem from './LabelItem';

type Props = {
  labels: Label[];
};

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;

  list-style: none;
`;

const LabelList: React.FC<Props> = ({ labels }): React.ReactElement => {
  return (
    <StyledList>
      {labels.map((label: Label) => (
        <LabelItem key={label.title} {...label} />
      ))}
    </StyledList>
  );
};

export default LabelList;
