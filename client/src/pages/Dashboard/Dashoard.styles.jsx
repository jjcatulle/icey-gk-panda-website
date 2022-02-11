import styled from "styled-components";

export const DashboardCtn = styled.div`
  position: relative;
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
      border: 2px solid #36B0FF;
      color: #36B0FF;
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
  position: relative;
  height: 100vh;
  width: 70px;
  background-color: #36B0FF;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 56px;
  padding-top: 20px;
  z-index: 20;

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
  background: transparent;

  .site-bg {
    /* position: fixed; 
    top: 0; 
    left: 0; 
    min-width: 100%;
    min-height: 100%;
    background: url(../../assets/img/bg/Website_Banner.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 1000; */
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 10;
    overflow: hidden;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
  }

  .header {
    position: relative;
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
    z-index: 20;

    .button {
      color: white;
      border-radius: 10px;
      width: 140px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background: #36B0FF;
      padding: 7px;
    }
  }

  .body {
    // background: white;
    flex: 1;
  }
`;

export const DashboardWelcome = styled.div`
  position: relative;
  display: none;
  margin: auto;
  margin-top: 100px;
  background-color: #36B0FF;
  color: white;
  width: 600px;
  font-size: 20px;
  padding: 20px;
  opacity: 0.8;
  z-index: 20;

  .title {
    position: relative;
    font-weight: 900;
    font-size: 40px;
    z-index: 25;
  }

  .title,
  .dashboard-wp {
    text-shadow: 2px 2px #3E403D;
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
  position: relative;
  z-index: 20;
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
  background: red;
`;

export const StakingCtn = styled.div`
  position: relative;
  z-index: 20;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 80px;
  padding-top: 20px;
  color: #fff;

  .details-ctn {
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 30px;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .claim-btn {
    font-size: 30px;
    margin-top: 20px;
    border: 2px solid #36B0FF;
    color: #36B0FF;
    padding: 15px;
    border-radius: 20px;
    cursor: pointer;
  }
`;
