import React from 'react';
import styled from 'styled-components';

const DivideLine = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`

function Divider() {
  return (
        <DivideLine/>
  );
}

export default Divider;
