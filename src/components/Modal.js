import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import searchUnsplash from '../data/unsplash';

const Modal = ({ handleModal, show, handleAdd, classes }) => {
  const defaultState = {
    title: '',
    instructor: '',
    description: '',
    duration: '',
    featureImage: '',
    classType: '',
    searchInput: '',
  };
  const [values, setValues] = useState(defaultState);
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleAddandReset = () => {
    handleAdd({ id: classes.length + 1, ...values });
    setValues(defaultState);
    setSearchResults([]);
  };

  const handleUnsplashRequests = () => {
    searchUnsplash(values.searchInput).then(results => setSearchResults(results));
  };

  return (
    <SectionWrapper show={show}>
      <Section>
        <div className="col1">
          <InputWrapper>
            <label>
              Title:
              <input name="title" type="text" onChange={handleInputChange} value={values.title}></input>
            </label>
          </InputWrapper>
          <InputWrapper>
            <label>
              Instructor:
              <input name="instructor" type="text" onChange={handleInputChange} value={values.instructor}></input>
            </label>
          </InputWrapper>
          <InputWrapper>
            <label>
              Description:
              <input name="description" type="textarea" onChange={handleInputChange} value={values.description}></input>
            </label>
          </InputWrapper>
          <InputWrapper>
            <label>
              Duration:
              <input name="duration" type="text" onChange={handleInputChange} value={values.duration}></input>
            </label>
          </InputWrapper>
          <InputWrapper>
            <label>
              Feature Image:
              <input name="featureImage" type="text" onChange={handleInputChange} value={values.featureImage}></input>
            </label>
          </InputWrapper>
          <InputWrapper>
            <label>
              Class Type:
              <input name="classType" type="text" onChange={handleInputChange} value={values.classType}></input>
            </label>
          </InputWrapper>
          <button onClick={handleAddandReset}>Add</button>
          <button onClick={handleModal}>Cancel</button>
          <InputWrapper>
            <label>
              Search for photos
              <input name="searchInput" type="text" onChange={handleInputChange} value={values.searchInput}></input>
            </label>
            <button onClick={handleUnsplashRequests}>Search</button>
          </InputWrapper>
        </div>
        <Col2>
          {searchResults.length &&
            searchResults.map((img, index) => (
              <ImageContainer key={index}>
                <ImageWrapper>
                  <img src={img.urls.thumb} alt="" />
                </ImageWrapper>
                <div>{img.urls.regular}</div>
              </ImageContainer>
            ))}
        </Col2>
      </Section>
    </SectionWrapper>
  );
};

export default Modal;

const Section = styled.section`
  display: flex;
  justify-content: center;
  height: 300px;
  width: 90%;
  position: fixed;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SectionWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  ${props =>
    props.show
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

const ImageWrapper = styled.div`
  height: 150px;
  width: 150px;
  display: flex;
  margin: 10px;
`;

const Col2 = styled.div`
  display: flex;
  flex: 0 0 50%;
  overflow-y: scroll;
`;
