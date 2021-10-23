import React from 'react';
import styled from 'styled-components';

export type Label = {
  title: string;
  weight?: number;
};

type Props = {
  labels: Label[];
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: lightblue;
  width: 500px;
  height: 200px;
`;

const LabelNavigation: React.FC<Props> = ({ labels }): React.ReactElement => {
  return (
    <StyledContainer>
      {labels.map((label) => (
        <a key={label.title} href="">
          {label.title}
        </a>
      ))}
    </StyledContainer>
  );
};

export default LabelNavigation;
