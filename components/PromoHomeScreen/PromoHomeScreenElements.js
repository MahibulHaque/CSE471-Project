import styled from "styled-components";

export const Wrapper = styled.div`
    width:100%;
    padding-top:2rem;
    padding-bottom:4rem;
    display:flex;
    justify-content:center;
    background-color:#f5f5f5;
`
export const Container = styled.div`
  display: flex;
  width:90%;
  max-width: 1100px;
  flex-direction: column;
  align-items: flex-start;
`;
export const IconContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
  background: linear-gradient(-45deg, #fb923c, #db2777);
  padding: 5px;
  border-radius: 0.25em;
  margin-bottom:1.5rem;
`;
export const SmallHeader = styled.h4`
  font-size: 16px;
  color: #ea580c;
`;
export const BigHeader = styled.h1`
  font-size: clamp(30px, 6vw, 60px);
  font-weight:800;
  color:black;
  margin-bottom:2rem;
  margin-top:1rem;
`;
 export const BottomLines = styled.p`
    font-size:18px;
    margin-bottom:2rem;
    line-height:2.5rem;
    max-width:800px;
    font-weight:500;
 `
 export const LearnMoreLink = styled.a`
    color:#ea580c;
    font-size:18px;
    text-decoration:none;
    cursor:pointer;
 `