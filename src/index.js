/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core";
import ReactDOM from "react-dom";

import Wrapper from "./Wrapper";
import Title from "./Title";

// Example of using css prop in reusable component in place of styled
const Box = props => (
  <div
    css={{
      padding: 8,
      border: "1px solid cornflowerblue",
      backgroundColor: "midnightblue"
    }}
    {...props}
  />
);

function App() {
  return (
    <Wrapper className="App">
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }

          html {
            font-family: sans-serif;
          }
        `}
      />
      <Box>
        <h1
          css={{
            color: "lightcyan",
            letterSpacing: 1,
            margin: "0.5em",
            padding: 0
          }}
        >
          Title styled using CSS Prop with object styles
        </h1>
      </Box>
      <Box>
        <h1
          css={css`
            font-size: 1.5em;
            color: lightcyan;
            letter-spacing: 1px;
            margin: 0.5em;
            padding: 0;
          `}
        >
          Title styled using CSS Prop with string styles
        </h1>
      </Box>
      <Box>
        <Title>Title styled using styled api</Title>
      </Box>
    </Wrapper>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
