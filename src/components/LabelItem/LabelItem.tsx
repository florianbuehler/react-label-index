import React from 'react';
import styled from 'styled-components';
import { LabelItemProps } from './LabelItem.types';
import { Rank } from '../index.types';

type StyledItemProps = {
  rank: Rank;
};

const StyledItem = styled.li<StyledItemProps>`
  margin: 0.09em 0.15em;
  padding: 0.05em;

  a {
    font-size: ${(props) => (1 + props.rank / 10) * 0.6}em;
    color: #000;
    text-decoration: none;
  }
`;

const LabelItem: React.FC<LabelItemProps> = ({ title, count, rank, ...anchorProps }) => {
  return (
    <StyledItem rank={rank}>
      <a {...anchorProps}>{title}</a>
    </StyledItem>
  );
};

export default LabelItem;
