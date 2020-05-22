import React, {useRef} from 'react';
import Logo from './Components/Logo';
import Apptitle from './Components/Apptitle';
import ListTemplate from './Components/ListTemplate';
import CharacterList from './Components/CharacterList';
import './App.scss';
import Rating from 'react-rating';
import styled, {css} from 'styled-components';

const App = () => {
  const test = useRef(null);
  return (
    <div>
      <div className="Logo" ref={test}>
        <Logo test={test} />
      </div>
      <div className="Main">
        <div className="Apptitle">
          <Apptitle />
        </div>
        <div className="bottom">
          <CharacterList className="CharacterList" />
          <div className="List">
            <ListTemplate className="ListTemplate" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
