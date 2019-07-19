import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';

// Redux stuff
import { connect } from 'react-redux';

// MUI Stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const styles = (theme) => ({
    ...theme,

    rootText: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '16px 0px'
    },

    rootTable: {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '16px 0px'
    }
})


const perspective = [
    [
        'Introversion',
        'Extraversion'
    ],
    [
        'Sensing',
        'Intuition'
    ],
    [
        'Thinking',
        'Feeling'
    ],
    [
        'Judging',
        'Perceiving'
    ]
    
]

const perspectiveAcro = [
    [
        'I',
        'E'
    ],
    [
        'S',
        'N'
    ],
    [
        'T',
        'F'
    ],
    [
        'J',
        'P'
    ]
    
]

class PerspectiveResults extends Component {
    

    render() {
        const { classes, result } = this.props
        return (
            <Fragment>
                <div style={{ padding: '32px' }}>

                    <Grid container justify="center" alignItems="center">
                        
                        <Grid item xs={12} sm={6} >
                            <div className={classes.rootText}>
                                <Typography color="primary" variant="subtitle1">
                                    Your Perspective.
                                </Typography>
                                <Typography color="textSecondary" variant="subtitle2">
                                    Your perspective Type is {result}
                                </Typography>
                            </div>
                            
                        </Grid>

                        <Grid item xs={12} md={6} >
                            <div className={classes.rootTable}>
                                <table style={{ align: 'center' }} >
                                    <tbody>
                                        {
                                            [...result].map((persLetter, id) => (
                                                <tr key={id}>
                                                    <td> { legendLR(id, 0) } </td>
                                                
                                                    <td style={{ padding: '0px 32px' }}>
                                                        { [...new Array(2)].map((_, i) => barGraph(persLetter, id, i)) }
                                                    </td>

                                                    <td> { legendLR(id, 1) } </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </Grid>

                    </Grid>

                </div>
            </Fragment>
        )
    }
}

// Helper functions

// Perspective text right and left
const legendLR = (id, direction) => {
    
    return (
        <Typography
            key={direction + id}
            style={
                { paddingRight: 16, textAlign: 'left' }
            }
        >
            {perspective[id][direction]} <strong>({perspectiveAcro[id][direction]})</strong>
        </Typography>
    )
    
}

// 
const barGraph = (p, id, direction) => { 
    return (
        <span
            key={p + id + direction}
            style={
                { background: `${colorBar(p, id, direction)}` }
            }
        >
            {[...new Array(15)].map((_, k) => <span key={k}>&nbsp;</span>)}
        </span>
    )
}

const colorBar = (p, id, direction) => { 
    return perspectiveAcro[id][direction] === p ? '#2196f3' : 'rgba(0,0,0,0.2)'
}


const mapStateToProps = (state) => ({
    result: state.answer.result
})

PerspectiveResults.propTypes = {
    result: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
}

export default connect(
    mapStateToProps, null
)(withStyles(styles)(PerspectiveResults));

