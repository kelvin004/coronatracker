import  React   from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './card.module.css';
import cx from 'classnames';

const cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    
    if(!confirmed)
    {   
        return 'Loading...';
    }
    
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.Infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0} 
                                end={confirmed.value}
                                duration={2}
                                seperator=","
                            />
                        </Typography>            
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>            
                        <Typography variant="body2">Number of active cases of Covid19</Typography>                        
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.Recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                        <CountUp
                                start={0} 
                                end={recovered.value}
                                duration={2}
                                seperator=","
                            />
                        </Typography>            
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>            
                        <Typography variant="body2">Number of recovered cases of Covid19</Typography>                        
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.Deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                        <CountUp
                                start={0} 
                                end={deaths.value}
                                duration={2}
                                seperator=","
                        />
                        </Typography>            
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>            
                        <Typography variant="body2">Number of active cases of Covid19</Typography>                        
                    </CardContent>
                </Grid>
            </Grid>
        </div>

    );
}

export default cards; 