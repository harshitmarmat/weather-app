import classes from './Header.module.css';

const Header = () => {
    return(
        <div className={classes.container}>
            <div className={classes.title}>
                <h1 className={classes.heading}>
                    Weather Updates
                </h1>
                <p className={classes['sub-heading']}>
                    Get the weather information of particular city!!
                </p>
            </div>
        </div>
    )
}

export default Header;
