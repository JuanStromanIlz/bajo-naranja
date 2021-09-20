import styled from 'styled-components';

const ImgContainer = styled.div`
  display: flex;
  position: relative;
  max-width: 600px;
  margin: auto;
  margin-bottom: 2.4rem;
  .image {
    width: 60%;
    margin: auto;
    display: block;
    object-fit: scale-down;
    @keyframes shake-image{2%{transform:translate(1px, 0px) rotate(.5deg)}4%{transform:translate(0px, 1px) rotate(.5deg)}6%{transform:translate(1px, 0px) rotate(.5deg)}8%{transform:translate(0px, 0px) rotate(.5deg)}10%{transform:translate(1px, 1px) rotate(.5deg)}12%{transform:translate(0px, 0px) rotate(.5deg)}14%{transform:translate(0px, 0px) rotate(.5deg)}16%{transform:translate(0px, 0px) rotate(.5deg)}18%{transform:translate(0px, 1px) rotate(.5deg)}20%{transform:translate(0px, 0px) rotate(.5deg)}22%{transform:translate(0px, 0px) rotate(.5deg)}24%{transform:translate(1px, 0px) rotate(.5deg)}26%{transform:translate(1px, 1px) rotate(.5deg)}28%{transform:translate(0px, 1px) rotate(.5deg)}30%{transform:translate(1px, 1px) rotate(.5deg)}32%{transform:translate(1px, 1px) rotate(.5deg)}34%{transform:translate(1px, 1px) rotate(.5deg)}36%{transform:translate(1px, 1px) rotate(.5deg)}38%{transform:translate(0px, 0px) rotate(.5deg)}40%{transform:translate(0px, 1px) rotate(.5deg)}42%{transform:translate(1px, 1px) rotate(.5deg)}44%{transform:translate(0px, 0px) rotate(.5deg)}46%{transform:translate(1px, 1px) rotate(.5deg)}48%{transform:translate(1px, 0px) rotate(.5deg)}50%{transform:translate(1px, 0px) rotate(.5deg)}52%{transform:translate(0px, 0px) rotate(.5deg)}54%{transform:translate(0px, 0px) rotate(.5deg)}56%{transform:translate(1px, 1px) rotate(.5deg)}58%{transform:translate(1px, 0px) rotate(.5deg)}60%{transform:translate(0px, 1px) rotate(.5deg)}62%{transform:translate(0px, 0px) rotate(.5deg)}64%{transform:translate(0px, 0px) rotate(.5deg)}66%{transform:translate(0px, 1px) rotate(.5deg)}68%{transform:translate(1px, 0px) rotate(.5deg)}70%{transform:translate(1px, 0px) rotate(.5deg)}72%{transform:translate(1px, 0px) rotate(.5deg)}74%{transform:translate(1px, 0px) rotate(.5deg)}76%{transform:translate(0px, 1px) rotate(.5deg)}78%{transform:translate(0px, 0px) rotate(.5deg)}80%{transform:translate(0px, 0px) rotate(.5deg)}82%{transform:translate(0px, 0px) rotate(.5deg)}84%{transform:translate(1px, 0px) rotate(.5deg)}86%{transform:translate(1px, 0px) rotate(.5deg)}88%{transform:translate(0px, 0px) rotate(.5deg)}90%{transform:translate(0px, 1px) rotate(.5deg)}92%{transform:translate(0px, 0px) rotate(.5deg)}94%{transform:translate(1px, 0px) rotate(.5deg)}96%{transform:translate(1px, 1px) rotate(.5deg)}98%{transform:translate(0px, 1px) rotate(.5deg)}0%,100%{transform:translate(0, 0) rotate(0)}}
    animation: shake-image 2s infinite; 
  }
`;

export default function Image({source}) {

  return (
    <ImgContainer>
      <img className='image' src={`/imgs/${source}`} alt=''/>
    </ImgContainer>
  );
}