import React from 'react';
import styled from 'styled-components';
import { Rank, RankedLabel } from './LabelIndex';

type Props = RankedLabel;

type StyledItemProps = {
  rank: Rank;
};

const StyledItem = styled.li<StyledItemProps>`
  margin: 0.09em 0.2em;
  padding: 0.05em;

  a {
    font-size: ${(props) => (1 + props.rank / 10) * 0.6}em;
    text-decoration: none;
  }
`;

const LabelItem: React.FC<Props> = ({ title, count, rank, ...anchorProps }) => {
  return (
    <StyledItem rank={rank}>
      <a {...anchorProps}>{title}</a>
    </StyledItem>
  );
};

export default LabelItem;
