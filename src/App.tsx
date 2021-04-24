import React, { useState } from 'react';
import './App.css';

import styled from 'styled-components';
import { HexColorPicker, HexColorInput } from 'react-colorful';

function App() {

  const [mainText, setMainText] = useState<string>('');
  const [secondaryText, setSecondaryText] = useState<string>('');
  const [ctaText, setCtaText] = useState<string>('');
  const [cardType, setCardType] = useState<string>('Leaderboard');
  const [ctaColor, setCtaColor] = useState<string>('');

  return (
    <div className="App">
      <InputsForm>
        <MainTextLabel>Main Text:</MainTextLabel>
        <MainTextInput placeholder="Main text..." onChange={e => setMainText(e.target.value)} />
        <SecondTextLabel>Secondary Text:</SecondTextLabel>
        <SecondTextInput placeholder="Secondary text..." onChange={e => setSecondaryText(e.target.value)} />
        <CTALabel>CTA Text:</CTALabel>
        <CTAInput placeholder="CTA text..." onChange={e => setCtaText(e.target.value)} />
        <label htmlFor="">Type:</label>
        <select name="" id="" onChange={e => setCardType(e.target.value)}>
          <option value="Leaderboard">Leaderboard (728w x 90h)</option>
          <option value="Mobile">Mobile(320w x 50h)</option>
          <option value="Monster">Monster(300w x 600h)</option>
          <option value="Skyskraper">Skyskraper(160w x 600h)</option>
          <option value="Tile">Tile(300w x 250h)</option>
        </select>
        <ColorDiv>
          <CTAColorDiv>
            <label htmlFor="">CTA Color:</label>
            <HexColorPicker color={ctaColor} onChange={setCtaColor} className="color-picker" />
            <label htmlFor="">CTA Color:</label>
            <HexColorInput color={`#${ctaColor}`} onChange={setCtaColor} style={{ width: '10rem' }} />
          </CTAColorDiv>
        </ColorDiv>
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

const ColorDiv = styled.div`

`;

const CTAColorDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
