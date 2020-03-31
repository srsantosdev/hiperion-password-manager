import React, { useState } from "react";

import { Container, Input, Span } from "./styles";

export default function InputComponent({ icon: Icon = null, ...rest }) {
  const [focus, setFocus] = useState(false);
  return (
    <Container>
      <Input
        {...rest}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {Icon ? (
        <Span>
          <Icon size={24} color={focus ? "#363062" : "#999696"} />
        </Span>
      ) : null}
    </Container>
  );
}
