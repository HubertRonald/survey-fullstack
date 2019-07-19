import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

// Redux stuff
import { connect } from 'react-redux';
import { updateAnswer } from '../redux/actions/answer-actions';

// MUI Stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import Radio from '@material-ui/core/Radio';


const styles = (theme) => ({
    ...theme,

    root: {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
    }
})

class StandaloneRadio extends Component {
    constructor(props) { 
        super(props)
        this.state = {
            selectedValue:''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    
    handleChange(event) { 
        const { name, value } = event.target
        const val = Number(value)

        const { numQuest, ans, updateAnswer } = this.props;

        let newAns = [...ans]
        newAns[numQuest] = val
            
        this.setState({[name]: val}, updateAnswer(newAns))
    }

    render() {
        const { selectedValue } = this.state
        const { classes, loading } = this.props;
        return (
            <Fragment>
                <div className={classes.root}>
                    <Typography color="secondary">Disagree</Typography>
                    {
                        [...new Array(7)].map((_, id) => (
                            <Radio key={id}
                                color={selectedValue < 4 ? "secondary" : selectedValue === 4 ? "textSecondary" : "primary"}
                                checked={selectedValue === id + 1}
                                onChange={this.handleChange}
                                value={id + 1}
                                name="selectedValue"
                                disabled={loading}
                            />

                        ))
                    }
                    <Typography color="primary">Agree</Typography>
                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    loading: state.UI.loading,
    ans: state.answer.ans
})

const mapActionsToProps = {
   updateAnswer
}

StandaloneRadio.propTypes = {
    loading: PropTypes.bool.isRequired,
    numQuest: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    updateAnswer: PropTypes.func.isRequired
}

export default connect(
    mapStateToProps,
    mapActionsToProps
)(withStyles(styles)(StandaloneRadio))
