import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const ProgressBar = props => {
    const percent = props.financed;
    const useStyles = makeStyles({
        root: {
            background: 'lightblue',
            border: 0,
            borderRadius: 3,
            height: 8,
            maxWidth: '40%'
        },
        colorPrimary: {
            background: 'red'
        }     
    });

    if (!percent) {
        return (
            <div className="article-preview">Loading...</div>
        );
    }

    if (percent.length === 0) {
        return (
            <div className="article-preview">
                No articles are here... yet.
          </div>
        );
    }

    const classes = useStyles();
    return (
        <div>
            <LinearProgress variant="determinate" value={percent} className={classes.root}>
            </LinearProgress>
        </div>
    );
};

export default ProgressBar;
