import Card from '../layout/Card';
import classes from './Display.module.css';

const Display = (props) => {
    
    if(!props.showDetail){
        return '' ;
    }

    return(
        <Card>
            <div className={classes.container}>
                <h1>{props.detail.name}</h1>
                <div>
                    <p>Coldest Weather : {props.detail.min_temp}</p>
                    <p>Warmest Weather : {props.detail.max_temp}</p>
                    <p>Current Weather : {props.detail.curr_temp}</p>
                </div>
            </div>
        </Card>
    )
}

export default Display;
