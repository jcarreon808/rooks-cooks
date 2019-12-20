import React from 'react';
import styled from 'styled-components';

const ClassCard = ({ content, handleDelete }) => (
  <ClassCardWrapper>
    <img height="50%" width="100%" src={content.featureImage} alt="" />
    <h4>{content.title}</h4>
    <h5>{content.instructor}</h5>
    <h5>{content.description}</h5>
    <h5>{content.duration} min</h5>
    <button onClick={() => handleDelete(content.id)}>Delete</button>
  </ClassCardWrapper>
);

export default ClassCard;

const ClassCardWrapper = styled.div`
  flex: 0 0 20%;
  width: 175px;
  border-radius: 5px;
  border: solid 1px black;
  margin: 10px;
  height: 100%;
`;
