import styled from "styled-components";

export const AppBarCtn = styled.div`
  color: white;
  font-family: "ZCOOL XiaoWei", serif;
  // background: rgba(17, 17, 17, 0.75);
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  z-index: 10000000000;

  .contents {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 400px;
    margin-right: 50px;
    .item {
      cursor: pointer;
      color: white;
      font-size: 16px;
      font-family: "ZCOOL XiaoWei", serif;
    }

    .button {
      background: white;
      padding: 5px;
      font-size: 20px;
      border-radius: 10px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 800px) {
    justify-content: center;
    .contents {
      margin-right: 0px;
    }
  }
`;

export const HomePageCtn = styled.div`
  width: 100vw;
  // overflow: hidden;
`;

export const LandingCtn = styled.div`
  width: 100%;
  height: 100vh;
`;

export const VideoCtn = styled.video`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1000;
  overflow: hidden;
  object-fit: cover;

  @media screen and (max-width: 800px) {
  }
`;

export const LogoCtn = styled.div`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(17, 17, 17, 0.75),
    rgba(17, 17, 17, 1)
  );
`;
export const LogoCtnItems = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: fadeIn 20s;
  color: white;
  font-size: 30px;

  .name-company {
    color: white;
    font-size: 107px;
    padding-bottom: 20px;
  }

  a {
    opacity: 1;
    background-color: transparent;
    background-repeat: no-repeat;
    font-size: 50px;
    font-weight: 700;
    color: #36B0FF;
    padding: 10px;
    border: 4px solid #36B0FF;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    // border-radius: ;
    margin: 20px 0;
    border-radius: 10px;
  }

  .mute {
    margin-top: 30px;
    color: white;
    opacity: 0.4;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  }

  img {
    opacity: 1;
    width: 900px;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media screen and (max-width: 800px) {
    font-size: 11px;

    .name-company {
      font-size: 40px;
    }
    img {
      width: 300px;
    }
    a,
    button {
      font-size: 20px;
      font-weight: 500;
      border: 2px solid #36B0FF;
    }

    .mute {
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

export const AboutCtn = styled.div`
  background: rgba(17, 17, 17, 1);
  width: 100vw;
  // height: 600px;
  padding: 60px 0;
  display: flex;
  color: white;
  letter-spacing: 2px;

  .about-info,
  .about-image {
    /* width: 50%; */
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .about-info {
    // background: blue;
    align-items: flex-end;
    padding-right: 50px;
    .content {
      /* width: 500px; */
      width: 70%;
      margin: 0 auto;
      //   background: red;

      .title {
        font-weight: 700;
        font-size: 26px;
        color: #36B0FF;
      }

      .title.main {
        font-size: 46px;
        text-align: center;
      }

      .description {
        margin-top: 20px;
        margin-bottom: 40px;
        font-size: 20px;
      }
    }
  }

  .about-image {
    // background: red;
    padding-left: 50px;
    img {
      //   margin: 0 auto;
      width: 400px;
      height: auto;
      object-fit: cover;
      border: 5px solid #36B0FF;
      border-radius: 10px;
      padding: 15px;
    }
  }

  @media screen and (max-width: 800px) {
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .about-info,
    .about-image {
      width: 100%;
      // display: flex;
      // flex-direction: column;
      // justify-content: center;
    }

    .about-info {
      font-size: 14px;
      padding-right: 0px;
      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
          text-align: center;
          width: 90%;
          margin: auto;
      }
    }
    .about-image {
      padding-top: 20px;
      img {
        width: 70vw;
        height: auto;
        object-fit: cover;
        border: 5px solid #ae2e07;
        padding: 15px;
      }
    }
  }
`;

export const TimeLineCtn = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(17, 17, 17, 1),
    rgba(17, 17, 17, 0.75),
    rgba(17, 17, 17, 1)
  );

  .items {
    width: 80vw;
    margin: 0 auto;
    // height: 600px;
    letter-spacing: 2px;
    display: flex;
    flex-direction: column;
    .title {
      font-weight: 700;
      font-size: 46px;
      color: #36B0FF;
      text-align: center;
    }
    .desktop {
      flex: 1;
      .description {
        font-size: 46px;
      }

      //   background:red;
    }

    .mobile {
      display: none;
    }
  }

  @media screen and (max-width: 800px) {
    .items {
      width: 95vw;

      .desktop {
        display: none;
      }

      .mobile{
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
// strings: ["1500 Pandaz in the Forest of Pandaria ready to take over the me Verse "],

export const TimeLineItemCtn = styled.div`
  color: white;
  font-family: "ZCOOL XiaoWei", serif;
  border: 3px solid #36B0FF;
  border-radius: 10px;

  padding: 15px;

  .mytitle {
    color: #36B0FF;
    font-size: 26px;
    font-weight: 900;
  }
  ul {
    font-weight: 700;
    font-size: 18px;
  }

  @media screen and (max-width: 800px) {
    padding: 5px;
    border: 1px solid #36B0FF;
    margin-top:20px;
    .mytitle {
      font-size: 20px;
      font-weight: 700;
    }

    ul {
      font-weight: 700;
      font-size: 15px;
    }
  }
`;

export const FaqsCtn = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(17, 17, 17, 1),
    rgba(17, 17, 17, 1)
  );
  padding-top: 80px;
  width: 100vw;
  color: white;
  .title {
    font-weight: 700;
    font-size: 46px;
    color: #36B0FF;
    text-align: center;
  }
  .items {
    // background:red;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: auto;
    margin-top: 30px;
    // flex-wrap: wrap;
  }
`;

export const FaqItemCtn = styled.div`
  width: 400px;
  padding-bottom: 10px;
  border-bottom: 2px solid #36B0FF;
  width: 65vw;
  margin-top: 30px;
  font-size: 20px;
  .label {
    color: #36B0FF;
    display: flex;
    margin-bottom: 10px;
    div {
      flex: 1;
      text-align: center;
    }
    span {
      cursor: pointer;
    }
  }
  .text {
    display: ${(props) => (props.show ? "initial" : "none")};
  }
`;

export const TeamCtn = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(17, 17, 17, 1),
    rgba(17, 17, 17, 0.75)
  );
  padding-top: 100px;
  padding-bottom: 80px;
  width: 100vw;
  color: white;
  .title {
    font-weight: 700;
    font-size: 46px;
    color: #36B0FF;
    text-align: center;
  }
  .items {
    // background:red;
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    margin: auto;
    margin-top: 30px;
    flex-wrap: wrap;
  }
`;

export const StyledNode = styled.div`
  // padding: 5px;
  // border-radius: 8px;
  display: inline-block;
  border: 1.9px solid #36B0FF;
  border-radius: 10px;
  width: 200px;
  font-size:20px;
  text-align:center;
  img{
    border: 1px solid #36B0FF;
	border-radius: 10px 10px 0px 0px; /*TL TR BR BL*/

    background: #36B0FF;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .role{
    color:#36B0FF;
    padding:10px;

    a{
          color:#36B0FF;
    }
  }

    @media screen and (max-width: 800px) {
      margin-bottom:15px;
    }
`;

export const FooterCtn = styled.div`
  width: 100vw;
  height: 100px;
  background-image: linear-gradient(
    to bottom,
    rgba(17, 17, 17, 0.9),
    rgba(17, 17, 17, 1)
  );
  display: flex;
  color: white;
  font-size: 16px;
`;
