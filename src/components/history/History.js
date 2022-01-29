import Card from '../layout/Card'
import classes from './History.module.css'

const History = (props) => {
    console.log(props.list);
    return (
        <Card colour='rgb(59, 57, 57)'>
            <div className={classes.container}>
                <h2>History</h2>
                {props.list.length===0?<p>No Search History!!</p> :<ul>
                    {props.list.map((item)=>
                            <li key={props.list.indexOf(item)}>{item}</li>
                        )}
                </ul> }
                
            </div>
        </Card>
    )
}

export default History;