import React, { useState, useRef, useEffect} from 'react';
import './Logo.scss';
import Logoimg from './500px-Tekken_7_Logo.png';
import { AiOutlineLoading } from 'react-icons/ai';

const Logo = ({test}) => {
  const [isShowTest, setIsShowTest] = useState(true);

  useEffect(() => setTimeout(()=>{setIsShowTest(false); setTimeout(() => test.current.style.display = "none", 1000)},300),[]);

  return (
    <div>
      <div className={isShowTest ? "Background" : "Background-hide"}>
        <img src={Logoimg}/>
        <div>Made In 3255</div>
        <AiOutlineLoading className="Loading"/>
      </div>
    </div>
  );
};

export default Logo;
