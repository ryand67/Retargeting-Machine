import React from 'react';
import './App.css';

import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <InputsForm>
        <MainTextLabel>Main Text:</MainTextLabel>
        <MainTextInput />
        <SecondTextLabel>Secondary Text:</SecondTextLabel>
        <SecondTextInput />
        <CTALabel>CTA Text:</CTALabel>
        <CTAInput />
        <label htmlFor="">Type:</label>
        <select name="" id="">
          <option value="Leaderboard">Leaderboard</option>
          <option value="Mobile">Mobile</option>
          <option value="Monster">Monster</option>
          <option value="Skyskraper">Skyskraper</option>
          <option value="Tile">Tile</option>
        </select>
      </InputsForm>
    </div>
  );
}

const InputsForm = styled.form`
  width: 50%;
  text-align: left;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;

  label {
    padding: 1rem 0;
  }
`;

const MainTextLabel = styled.label`

`;

const MainTextInput = styled.input`

`;

const SecondTextLabel = styled.label`

`;

const SecondTextInput = styled.input`

`;

const CTALabel = styled.label`

`;

const CTAInput = styled.input`

`;

export default App;
