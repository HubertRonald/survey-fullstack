import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// Redux stuff
import { connect } from 'react-redux';

// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from '@material-ui/core/styles/withStyles';
import LinearProgress from '@material-ui/core/LinearProgress';


const styles = (theme) => ({
    ...theme
})
  
class Navbar extends Component {
    render() {
      const { loading } = this.props;
        return (
            <Fragment>
                <AppBar position="fixed" color="primary">
                    <Toolbar>
                        <h3>Survey</h3>
                    </Toolbar>
                    {loading ? (<LinearProgress color="secondary" />) : null}
                </AppBar>
            </Fragment>
        )
    }
  }
  
const mapStateToProps = (state) => ({
    loading: state.UI.loading
})


Navbar.propTypes = {
    loading: PropTypes.bool.isRequired
}

  
  
export default connect(
    mapStateToProps, null
)(withStyles(styles)(Navbar));