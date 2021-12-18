import styled from "styled-components";

export const DashboardCtn = styled.div`
  width: 100vw;
`;

export const WelcomeCtn = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
  display: flex;

  .center {
    margin: auto;
    font-size: 30px;
    display: flex;
    flex-direction: column;

    button {
      margin-top: 10px;
      font-size: 40px;
      font-weight: 500;
      border: 2px solid #b22c00;
      color: #b22c00;
      background: none;
      border-radius: 10px;
      padding: 5px;
    }
  }
`;

export const DashboardContents = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
`;

export const SideBarCtn = styled.div`
  height: 100vh;
  width: 70px;
  background-image: linear-gradient(to bottom, rgba(178, 44, 0, .5), #b22c00);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 56px;
  padding-top: 20px;

  & > * {
    // background: red;
    margin-bottom: 40px;
    font-size: 56px;
    transform: scale(1.2);
    cursor: pointer;

    &:active {
      transform: scale(1.2);
    }
  }
`;

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: blue;

  .header {
    width: 100%;
    height: 60px;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    font-family: "ZCOOL XiaoWei", serif;
    font-size: 20px;
    font-weight: 900;
    border-bottom: 1px solid grey;

    .button {
      color: white;
      border-radius: 10px;
      width: 140px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background: #b22c00;
      padding: 7px;
    }
  }

  .body {
    background: white;
    flex: 1;
  }
`;

export const DashboardWelcome = styled.div`
  margin: auto;
  margin-top: 100px;
  background-image: linear-gradient(125deg, rgba(178, 44, 0, 0.5), #b22c00);
  // color:white;
  width: 600px;
  font-size: 20px;
  padding: 20px;

  .title {
    font-weight: 900;
    font-size: 40px;
  }

  @media screen and (max-width: 800px) {
    width: 250px;
    font-size: 16px;

    .title {
      font-size: 20px;
    }
  }
`;

export const CollectionGridCtn = styled.div`
  // background: red;
  display: grid;
  height: 90vh;
  grid-template-columns: repeat(auto-fill, minmax(200px, 2fr));
  grid-gap: 1rem;
  padding: 0 30px;
  padding-top: 30px;
  overflow: auto;
  @media only screen and (max-width: 800px) {
    padding: 0;
  }
`;

export const PopUPCtn = styled.div`
  width: 100vw;
  height: 100vh;
  filter: blur(8px);
  background:red;
`;