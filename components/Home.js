import styled from "styled-components/native";
import { Text } from "react-native";

import React from "react";

const Title = styled.Text`
  font-size: 50px;
  color: red;
`;

function Home() {
  return <Title>Hello Worlds</Title>;
}

export default Home;
