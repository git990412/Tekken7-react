import React, {useState} from 'react';
import './ListTemplate.scss';
import Rating from 'react-rating';
import styled, {css} from 'styled-components';
import comment from "./Comment.png";


const Comment = styled.div`
      width: 50px;
      border: 1px solid black;
      border-right:0px;
      border-left:0px;
      display:flex;
      justify-content:center;
      align-items:center;
      box-shadow:1px 1px 5px inset darkgray, -1px -1px 5px inset darkgray;
      writing-mode: vertical-rl;
      text-orientation: upright;
      cursor: pointer;
      background-image:url(${comment});
      background-size:100% 100%;
      background-repeat:no-repeat;
      `;

      const Commentbox = styled.div`
        margin:0;
        padding:0;
        background-color: rgba(0, 0, 0, 0.8);
        position:relative;
        width:1026.89px;
        height:200px;
        top:100%;
        left:-975%;
        z-index: 9999;
        display: ${props => props.on ? 'flex' : 'none'};
        justify-contents:center;
        align-items:center;
      `;
const ListTemplate = () => {
  const [Isclick, SetIsclick] = useState(false);
  const [Isnone, SetIsnone] = useState(false);
  return (
    <div className="ListTemplate">
      <div className="Character-Img"></div>
      <div className="Move-Command-Box">
        <div className="Move-status">None</div>
        <div className="Command">→ N ↓↘+RP</div>
      </div>
      <div className="Frame-Data">
        <div className="guard-frame">Start Up Frame</div>
        <div className="hit-frame">Hit Frame</div>
        <div className="start-up-frame">Guard Frame</div>
        <div className="counter-hit-frame">Counter Hit Frame</div>
      </div>
      <div className="comment-rating-box">
        <Comment onClick={() => Isnone ? SetIsnone(false) : SetIsnone(true)}><Commentbox on={Isnone}>Test</Commentbox></Comment>
        <div className="rating">
            <Rating calssName="s" style={{display:"flex"}}
              emptySymbol={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png" style={{height:"30px", width:"30px"}} className="icon"/>}
              fullSymbol={<img src="https://cdn1.iconfinder.com/data/icons/vote-reward-7/24/award_reward_rate_rating_star_empty-512.png" className="icon" style={{height:"30px", width:"30px"}}/>}
            />
        </div>
      </div>
    </div>
  );
};

export default ListTemplate;
