import React from "react";
import { Route, Switch } from 'react-router-dom'

// Page components
import Homepage from './pages/Homepage'
import Credits from './pages/Credits'
// import About from './pages/About'

/* Create a component with @emotion/styled
const Section = styled.div`
${tw`bg-red-900 min-h-screen flex flex-col items-center justify-center text-xl text-white`};
`;

const Footer = styled.footer`
${tw`bg-red-900 text-center text-lg text-white`};
`;
*/


function App() {
  return (
      <Switch>
          <Route exact path={"/"} component={Homepage} />
          <Route exact path={"/credits"} component={Credits} />
      </Switch>
  );
}

export default App;
