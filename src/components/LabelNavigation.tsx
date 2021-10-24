import React from 'react';
import styled from 'styled-components';
import LabelList from './LabelList';

export type Label = {
  title: string;
  weight?: number;
} & React.HTMLProps<HTMLAnchorElement>;

type Props = {
  labels: Label[];
};

const StyledContainer = styled.div`
  width: 500px;
  height: 200px;
`;

const LabelNavigation: React.FC<Props> = ({ labels }): React.ReactElement => {
  return (
    <StyledContainer>
      <LabelList labels={labels} />
    </StyledContainer>
  );
};

export default LabelNavigation;
