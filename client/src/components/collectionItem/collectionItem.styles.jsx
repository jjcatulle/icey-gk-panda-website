import styled from "styled-components";

/* offset-x | offset-y | blur-radius | spread-radius | color */

export const CollectionItemCtn = styled.div`
  height: 300px;
  min-height: 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  color: black;
  // border: 5px solid pink;
  // box-shadow: 5px 5px 10px 0.5px #0ff;

  border: 2px solid #b22c00;
  border-radius: 10px;
  padding-bottom:7px;

  &:hover {
    border: 3.5px solid #b22c00;
    cursor: pointer;
  }

  img {
    height: 90%;
    object-fit: cover;
    border-top: 2px solid #b22c00;
    border-bottom: 2px solid #b22c00;
    border-radius: 10px 10px 0 0;
  }

  .details {
    text-align: center;
  }

  @media screen and (max-width: 800px) {
    max-width: 80%;
    margin-left: 10px;
    margin-top: 10px;
  }
`;
