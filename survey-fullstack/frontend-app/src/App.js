import React, { Fragment } from 'react';

// MUI stuff
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';

// Component
import Navbar from './components/layout/Navbar'
import DiscoverPerspective from './components/layout/DiscoverPerspective';

// Styles App
import './App.css';
import mainTheme from './utils/mainTheme'
const theme = createMuiTheme(mainTheme);
//console.log(theme)

class App extends React.Component {

  render() {

    return (
      <Fragment>
        <MuiThemeProvider theme={theme}>
          <Navbar />
          <DiscoverPerspective />
        </MuiThemeProvider>
      </Fragment>
    )
  }
}

export default App
