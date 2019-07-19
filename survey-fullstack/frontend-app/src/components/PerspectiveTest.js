import React, { Component, Fragment} from 'react'
import PropTypes from 'prop-types';

// store
import { connect } from 'react-redux';
import { getSurvey } from '../redux/actions/survey-actions';
import { updateUser } from '../redux/actions/answer-actions';


// MUI Stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider'

// Compoments
import StandaloneRadio from './StandaloneRadio'

const styles = (theme) => ({
    ...theme,

    root: {
        margin: '16px auto',
    },

    paper: {
        //border: '0.25px solid rgba(0,0,0,0.1)',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        padding: 32
    },

    textField: {
        [`& fieldset`]: {
            borderRadius: 0,
          },
    },

    textError: {
        color: theme.palette.error.main
    }


})

class PerspectiveTest extends Component {
    constructor(props) { 
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.getSurvey("surveymbti2019jul")
    
    }

    handleChange(event) { 
        this.props.updateUser(event.target.value)
    }
   
    render() {
        const { classes, survey, errors, loading, email } = this.props

        return (
            <Fragment>
                <div className={classes.root}>

                    <div style={{ padding: '0 16px 32px 16px' }}>
                        <Typography color="primary" variant="subtitle1" gutterBottom>
                            Discover Your Perspective.
                        </Typography>
                        <Typography color="textSecondary" variant="subtitle2">
                            Complete the 7 min test and get a detailed report of your lenses on the world
                        </Typography>
                    </div>
                    
                    {
                        Object.keys(survey).map(key => (
                            <div key={key}>
                                <div className={classes.paper} >

                                    <Typography
                                        color={errors.ans[key] ? ("error") : ("textSecondary")}
                                    >
                                        {Number(key) + 1}. {survey[key].Question}
                                    </Typography>

                                    <StandaloneRadio numQuest={key}/>

                                    {
                                        errors.ans[key] ? (
                                            <Typography className={classes.textError}>
                                                Please, select one option
                                            </Typography>
                                        ) : null
                                    }

                                </div>
                                
                                <Divider light={true} />
                            </div>
                           
                        ))
                    }

                    <div className={classes.paper} >
                        <TextField
                            required
                            name="email"
                            type="email"
                            label="you@example.com"

                            className={classes.textField}
                            style={{ width: '50vw', maxWidth: 512 }}
                            disabled={loading}
                            helperText={errors.email ? "Invalid Email" : ""} 
                            error={errors.email ? true : false}
                            value={email}
                            onChange={this.handleChange}
                            
                            margin="normal"
                            variant="outlined"
                            fullWidth={false}
                        />
                    </div>
                  
                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = (state, props) => {
    //console.log("hola", props)
    //console.log("hola", state.UI.errors)
    return { 
        survey: state.survey,
        email: state.answer.user,
        loading: state.UI.loading,
        errors: state.UI.errors
    }
}
  
const mapActionsToProps = {
    getSurvey,
    updateUser
}

PerspectiveTest.propTypes = {
    survey: PropTypes.array.isRequired,
    email: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,

    classes: PropTypes.object.isRequired,

    getSurvey: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired
}

export default connect(
    mapStateToProps,
    mapActionsToProps
)(withStyles(styles)(PerspectiveTest))