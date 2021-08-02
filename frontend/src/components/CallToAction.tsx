import React from 'react';
import styled from 'styled-components';

const CtaButton = styled.div`
    border-radius: 5px;
    border: 1px solid gray;
`

interface CtaProp{
    text: string;
}

function CallToAction(props: CtaProp) {
  return (
    <CtaButton>
        {props.text}
    </CtaButton>
  );
}

export default CallToAction;
