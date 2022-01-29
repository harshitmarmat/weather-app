import Card from '../layout/Card';
import classes from './Display.module.css';
import cold from '../assets/images/cold.png';
import normal from '../assets/images/normal.png';
import warm from '../assets/images/hot.png';


const Display = (props) => {

    const {curr_temp ,max_temp , min_temp} = props.detail;
    
    if(!props.showDetail){
        return '' ;
    }

    let currImg = normal;
    let maxImg = normal;
    let minImg = normal;

    if(curr_temp<=19){
        currImg = cold;
    }
    if(curr_temp>=36){
        currImg= warm;
    }


    if(max_temp<=19){
        maxImg = cold;
    }
    if(max_temp>=36){
        maxImg= warm;
    }

    if(min_temp<=19){
        minImg = cold;
    }
    if(min_temp>=36){
        minImg= warm;
    }

    return(
        <Card colour='rgba(89, 96, 189, 0.952)'>
            <div className={classes.container}>
                <h1>{props.detail.name}</h1>
                <div className={classes.temp}>
                    <div>
                        <p>Current Weather : {props.detail.curr_temp} &deg;C</p>
                        <img src={currImg} alt='current-img'/>
                    </div>
                    <div>
                        <p>Coldest Weather : {props.detail.min_temp} &deg;C</p>
                        <img src={minImg} alt='min-img'/>
                    </div>
                    <div>
                        <p>Warmest Weather : {props.detail.max_temp} &deg;C</p>
                        <img src={maxImg} alt='max-img'/>
                    </div>
                
                </div>
            </div>
        </Card>
    )
}

export default Display;
