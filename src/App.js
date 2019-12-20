import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import classList from './data/classes';
import NavBar from './components/NavBar';
import Modal from './components/Modal';
import ClassCard from './components/ClassCard';

const App = () => {
  const [classes, setClasses] = useState([]);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setClasses(classList);
  }, []);

  const handleModal = () => {
    setVisible(!isVisible);
  };

  const handleAdd = newClass => {
    setClasses([...classes, newClass]);
    setVisible(!isVisible);
  };

  const handleDelete = id => {
    const filterdClasses = classes.filter(klass => klass.id !== id);
    setClasses(filterdClasses);
  };

  return (
    <Wrapper>
      <NavBar />
      <h1>Welcome to RookieCookie!</h1>
      <h2>
        Add a new class <button onClick={handleModal}>Click Me</button>
      </h2>
      <Modal show={isVisible} handleModal={handleModal} handleAdd={handleAdd} classes={classes} />
      <ClassCardContainer>
        {classes.map((klass, index) => (
          <ClassCard key={klass + '-' + index} content={klass} handleDelete={handleDelete} />
        ))}
      </ClassCardContainer>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  margin-top: 45px;
  text-align: center;
`;

const ClassCardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;
