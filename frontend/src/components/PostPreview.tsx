import React from 'react';
import styled from 'styled-components';

import Divider from './Divider';
import CallToAction from './CallToAction';

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 0 auto;
  width: 30%;
  justify-content: space-evenly;
  padding: 3em 0 2em 0;
`
const Title = styled.h2`
  margin-bottom: 5px;
`
const Byline = styled.span`
  font-size: 12px;
  font-style: italic;
`
const PostText = styled.p`
  font-size: 16px;
`
const ActionButton = styled.p`
  font-size: 14px;
  font-style: italic;
  cursor: pointer;
`

function PostPreview() {
  return (
      <>
        <Title>Hello!</Title>
        <Byline>Thursday 22 January, 2021</Byline>
        <PostText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias nesciunt similique porro. Alias iste accusamus mollitia quo assumenda. 
            Voluptates dolorem nam exercitationem excepturi nisi alias repellendus neque sint cupiditate.</PostText>
        <ActionButton>Read more...</ActionButton>
        <Divider/>
      </>
  );
}

export default PostPreview;
