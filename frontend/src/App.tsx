import React from 'react';
import styled from 'styled-components';

import './App.css';
import Navigation from './components/Navigation';
import PostPreview from './components/PostPreview';

const Page = styled.div`
  background-color: #D4E0A3;
  width: 100%;
  height: 100vh;
`
const Container = styled.div`
  width: 60%;
  margin: 0 auto;
`

function App() {
  return (
    <Page>
      <Navigation/>
      <Container>
        <PostPreview/>
        <PostPreview/>
        <PostPreview/>
      </Container>
    </Page>
  );
}

export default App;
