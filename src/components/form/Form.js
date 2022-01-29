import { useRef } from 'react';
import Card from '../layout/Card';
import searchBtn from '../assets/images/search.png'
import './Form.module.css';

const Form = (props) => {
    const cityRef = useRef('');

    const getWeatherHandler = async(event) => {
        event.preventDefault();
        props.toggle(false);

        const city = cityRef.current.value;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=324988f04fc840901d6c910c728a276d&units=metric`)
        if(response.ok){
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
        else{
            props.toggle(true);
        }
        return ;
    }
    return(
        <Card colour='rgb(59, 57, 57)'>
            <form onSubmit={getWeatherHandler}>
                <div>
                    <label>Enter the city name : </label>
                    <input ref={cityRef} type='name' placeholder='city or country' required/>
                    <button type='submit'>
                        <img src={searchBtn} alt='search-btn' />
                    </button>
                </div>
            </form>
        </Card>
    )
}

export default Form;
