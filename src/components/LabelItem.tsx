import React from 'react';
import styled from 'styled-components';
import { Label } from './LabelNavigation';

type Props = Label;

const StyledItem = styled.li`
  margin: 0.25rem 0.5rem;

  a {
    text-decoration: none;
  }
`;

const LabelItem: React.FC<Props> = ({ title, weight, ...anchorProps }) => {
  return (
    <StyledItem>
      <a {...anchorProps}>{title}</a>
    </StyledItem>
  );
};

export default LabelItem;
