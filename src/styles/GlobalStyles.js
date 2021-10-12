import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


@font-face {
		font-family: 'roboto-regular';
		font-display: swap;
		font-weight: 400;
		src: local('Roboto-Regular'), url('/fonts/Roboto-Regular.ttf');
	}

	@font-face {
		font-family: 'roboto-light';
		font-display: swap;
		src: local('Roboto-Light'), url('/fonts/Roboto-Light.ttf');
	}

	@font-face {
		font-family: 'roboto-bold';
		font-display: swap;
		src: local('Roboto-bold'), url('fonts/Roboto-Bold.ttf');
	}

	@font-face {
		font-family: 'roboto-medium';
		font-display: swap;
		src: local('Roboto-Medium'), url('/fonts/Roboto-Medium.ttf');
	}

	@font-face {
		font-family: 'roboto-superbold';
		font-display: swap;
		font-weight: 900;
		src: local('Roboto-Black'), url('/fonts/Roboto-Black.ttf');
	}


* {
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

    html {
      scroll-behavior: smooth;
      font-size: 92.5%;
    }


    h1, h2, h3, h4
    button,
    a {
      font-family: "Roboto", sans-serif;
      font-weight: normal;
    }

    button {
      span,
      p {
        font-family: "Roboto", sans-serif;
      }
    }

    span,
    p,
    label,
    select,
    option,
    input {
      font-family: "Roboto", sans-serif;
    }

    a {
      text-decoration: none;
    }
`;