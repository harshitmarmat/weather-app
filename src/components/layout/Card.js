import classes from './Card.module.css'

const Card = (props) => {
    const bgColor = {
            backgroundColor : props.colour
    }

    return(
        <div className={`${classes.container}`} style={bgColor}>   
            {props.children}
        </div>
    )
}

export default Card;