import * as React from "react";
import styled from "react-emotion";

export interface IHello {
  /**
   * The name of person
   * to be printed
   */
  name: string;

  /**
   * The age of the person
   * to be printed
   */
  age: number;
}

const HelloWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ItemWrapper = styled.div`
  flex: 1 1 auto;
  text-align: center;
`;

const NameHeading = styled.h1`
  margin: 0;
  font-size: 32px;
`;

const AgeHeading = styled.h2`
  margin: 0;
  font-size: 24px;
`;

const Hello = (props: IHello) => {
  return (
    <HelloWrapper>
      <ItemWrapper>
        <NameHeading> Hello {props.name} </NameHeading>
      </ItemWrapper>

      <ItemWrapper>
        <AgeHeading> Age {props.age} </AgeHeading>
      </ItemWrapper>
    </HelloWrapper>
  );
};

export default Hello;
