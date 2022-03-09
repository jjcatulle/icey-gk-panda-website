import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	@import url("https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap");
	body {
		font-family: 'ZCOOL XiaoWei', serif;
		font-style: normal;
		padding: 0px 0px;
		margin: 0px 0px;
		background: rgba(17, 17, 17, 1);
	}
	a {
		text-decoration: none;
		color:#181a26;
	}
	* {
		box-sizing: border-box;
	}
	::-webkit-scrollbar {
		width: 1px;
		display: none;
	  }
	textarea:focus, input:focus, select:focus, div:focus{
    outline: none;
  outline-color: transparent;
  outline-style: none;
	}
`;

export const Bottom = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  // background-color: #181a26;
`;

export const Top = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
