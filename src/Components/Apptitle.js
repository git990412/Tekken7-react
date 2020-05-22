import React from 'react';
import './Apptitle.scss';
import titleImg from './titleImg.png';
import { IoIosSearch } from 'react-icons/io';

const App_title = () => {
  return (
    <div className="App_title">
      <div className="title-bar">
        <div className="null-padding"></div>
        <div className="img">
          <img src={titleImg} alt="" className="imgsrc" />
        </div>
        <div className="input">
          <div className="bundle">
            <div className="Search-Command">
              <input placeholder="Command" className="Command" />
              <button>
                <IoIosSearch />
              </button>
            </div>
            <div className="Search-Skill">
              <input placeholder="Skill" className="Skill" />
              <button>
                <IoIosSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App_title;
