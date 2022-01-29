import Card from '../layout/Card';
import classes from './Form.module.css';

const Form = () => {
    return(
        <Card>
            <form>
                <label className={classes.label}>Enter the city name : </label>
                <input/>
            </form>
        </Card>
    )
}

export default Form;
