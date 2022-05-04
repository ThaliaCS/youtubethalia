import {Home} from './components/Home';

import {createGlobalStyle} from 'styled-components'


function App() {
    return (
        <>
            <GlobalStyle/>
            <Home/>
        </>
    );
}

export default App;


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`