import React, {useState} from 'react';
import styled from "styled-components";

const Dody = () => {
  const [dodyIsOpen, openDody] = useState(true);

  return (
    <DodyStyle>
      {dodyIsOpen ? <DodyDialog /> : undefined}
      <div onClick={() => openDody(!dodyIsOpen)}>열려라</div>
    </DodyStyle>
  );
};


const DodyDialog = () => {
  return (
    <DodyDialogStyle>
      <div className="wrapper">
        <div className="header">
          타이틀입니다 이 다이얼로그의 제목이기도 하지요
          <div className="footnote">혹시나 해서 타이틀 밑에도 주석을 넣을 수 있습니다</div>
        </div>
        <div className="content">
          콘텐츠 입니다 관련된 콘텐츠를 작성해주세요콘텐츠 입니다 관련된 콘텐츠를 작성해주세요콘텐츠 입니다 관련된 콘텐츠를 작성해주세요콘텐츠 입니다 관련된 콘텐츠를 작성해주세요
          콘텐츠 입니다 관련된 콘텐츠를 작성해주세요콘텐츠 입니다 관련된 콘텐츠를 작성해주세요콘텐츠 입니다 관련된 콘텐츠를 작성해주세요콘텐츠 입니다 관련된 콘텐츠를 작성해주세요
          콘텐츠 입니다 관련된 콘텐츠를 작성해주세요콘텐츠 입니다 관련된 콘텐츠를 작성해주세요콘텐츠 입니다 관련된 콘텐츠를 작성해주세요콘텐츠 입니다 관련된 콘텐츠를 작성해주세요
          콘텐츠 입니다 관련된 콘텐츠를 작성해주세요콘텐츠 입니다 관련된 콘텐츠를 작성해주세요콘텐츠 입니다 관련된 콘텐츠를 작성해주세요콘텐츠 입니다 관련된 콘텐츠를 작성해주세요
          <div className="footnote">혹시나 해서 타이틀 밑에도 주석을 넣을 수 있습니다</div>
        </div>
        <div className="footer">
          <div className="footer-content">
            푸터에도 설명이 있을수 있지 그럼 있을수있고 말고
          </div>
          <div className="button">취소</div>
        </div>
      </div>
    </DodyDialogStyle>
  );
};

const DodyStyle = styled.div`
  position: relative;
`;

const DodyDialogStyle = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.5);
  .wrapper{
    background-color: white;
    width: 550px;
    height: auto;
    padding: 3rem;
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.1), 0 6px 30px 5px rgba(0, 0, 0, 0.06), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    .header{
      font-size: 1.5rem;
    }
    .content{
      margin-top: 2rem;
      margin-bottom: 2rem;
      line-height: 1.5;
      color: #333;
    }
    .footnote{
      /* margin top에 패딩 값을 넣을 건지, bottom에 패딩 값을 넣을 건지 */
      margin-top: 0.5rem;
      color: #777;
      font-size: 0.875rem;
    }
    .footer{
      display: flex;
      justify-content: space-between;
      .button{
        height: 3rem;
        width: 13rem;
        background-color: #487df3;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        /* hover 됐을때, 눌렸을때, 액션 잘 고민하기  */
      }
    }
  }
`;

export default Dody;