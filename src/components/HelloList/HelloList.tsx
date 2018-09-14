import * as React from "react";
import styled from "react-emotion";
import Hello, { IHello } from "../Hello/Hello";

interface IHelloList {
  /**
   * A list of hello objects
   */
  hellos: IHello[];
}

const HelloListWrapper = styled.div`
  padding: 10px;
`;

const HelloList = (props: IHelloList) => {
  return (
    <HelloListWrapper>
      {props.hellos.map((hello: IHello, index: number) => (
        <Hello name={hello.name} age={hello.age} key={index} />
      ))}
    </HelloListWrapper>
  );
};

export default HelloList;
