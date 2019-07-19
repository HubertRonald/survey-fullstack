import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// Redux stuff
import { connect } from 'react-redux';
import { activateStep } from '../../redux/actions/survey-actions';
import { postAnswer } from '../../redux/actions/answer-actions';

// MUI Stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

// Components
import PerspectiveTest from '../PerspectiveTest'
import PerspectiveResults from '../PerspectiveResults'


const styles = (theme) => ({
    ...theme,

    root: {

        [theme.breakpoints.up('xs')]: {
            maxWidth: 1280,
            minHeight:1962
        },
        
        margin: '128px auto',
        padding: '32px 8px'
    },

    buttons: {
        display: 'flex',
        justifyContent: 'center',
        padding:'32px 0px'

    },

    button: {
        borderRadius: "0%",
        boxShadow: theme.shadows[0],
        width:'256px'
    }
})

const stepsLabel = ['Discover Your Perspective', 'Your Perspective'];
class DiscoverPerspective extends Component {

    constructor(props) { 
        super(props)


        this.getStepContent = this.getStepContent.bind(this);
        
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);

    };



    getStepContent() {
        switch (this.props.step) {
            case 0:
                return <PerspectiveTest />;
            case 1:
                return <PerspectiveResults  />;
          default:
            throw new Error('Unknown step');
        }
    };

    handleNext() {
        this.props.postAnswer(this.props.answer)
    }

    handleBack() {
        this.props.activateStep(0)
    }

    render() {
        const { classes, step, loading } = this.props;
        return (
            <Fragment>
                <Paper square className={classes.root}>
                    <Grid container justify="center" alignItems="center">
                        <Grid item xs={12}>

                            <div >
                                {/**
                                    this code works also without <Stepper></Stepper> component
                                    Please feel free to remove this part,
                                    it's going to continue to work well
                                */}
                                <Stepper
                                    alternativeLabel
                                    activeStep={step}
                                >
                                    {stepsLabel.map((label, id) => (
                                     
                                        <Step key={label}>
                                            <StepLabel>
                                                {
                                                    (step > id) ? (
                                                        <Typography color="primary">{label}</Typography>
                                                    ) : (<Typography color="inherit">{label}</Typography>)
                                                }
                                            </StepLabel>
                                        </Step>
                                       
                                    ))}
                                </Stepper>
                            </div>

                                
                            <div>
                                           
                                {this.getStepContent()}
                                <div className={classes.buttons}>
                                    {step !== 0 ? (
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            disabled={loading}
                                            onClick={this.handleBack}
                                            className={classes.button}
                                        >
                                            New Test
                                        </Button>
                                    ) :
                                        (
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                size="large"
                                                disabled={loading}
                                                onClick={this.handleNext}
                                                className={classes.button}
                                            >
                                                Save & Continue
                                                {loading && (
                                                    <CircularProgress size={32} className={classes.progress} />
                                                )}
                                            </Button>
                                        )}
                                </div>
                                          
                            </div>
                                 

                        </Grid>
                                    
                       
                    </Grid>
               
                </Paper>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.UI.loading,
    step: state.UI.step,
    answer: state.answer
})

const mapActionsToProps = {
    postAnswer,
    activateStep
}

DiscoverPerspective.propTypes = {
    loading: PropTypes.bool.isRequired,
    step: PropTypes.number.isRequired,
    answer: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,

    postAnswer: PropTypes.func.isRequired,
    activateStep: PropTypes.func.isRequired
}

export default connect(
    mapStateToProps,
    mapActionsToProps
)(withStyles(styles)(DiscoverPerspective));
