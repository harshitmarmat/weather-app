import { useRef } from 'react';
import Card from '../layout/Card';
import classes from './Form.module.css';

const Form = (props) => {
    const cityRef = useRef('');

    const getWeatherHandler = async(event) => {
        event.preventDefault();
        const city = cityRef.current.value;
        // console.log(city);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=324988f04fc840901d6c910c728a276d`)
        const data = await response.json();
        console.log(data.main);
        console.log(data.name);
        props.information({
            max_temp : data.main.temp_max,
            min_temp : data.main.temp_min,
            temp : data.main.temp,
            name : data.name
        });
    }
    return(
        <Card>
            <form onSubmit={getWeatherHandler}>
                <div>
                    <label>Enter the city name : </label>
                    <input ref={cityRef} type='name' placeholder='city or country' required/>
                    <button type='submit'>
                        <img src='https://cdn-user-icons.flaticon.com/52526/52526647/1643444971011.svg?token=exp=1643445874~hmac=df8b4f7f593ac1e205acdeb3417cf647' alt='search-btn' />
                    </button>
                    
                </div>
            </form>
        </Card>
    )
}

export default Form;
