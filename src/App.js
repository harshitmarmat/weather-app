import { useState } from "react";
import { Fragment } from "react";
import Display from "./components/display/Display";
import Form from "./components/form/Form";
import History from "./components/history/History";
import Layout from "./components/layout/Layout";

const App = () => {
  const [showDetail,setShowDetail] = useState(false);   
  const [error,setError] = useState(false);
  const [history,setHistory] = useState([]);
  const [cityDetail,setCityDetail] = useState({});

  const informationHandler = (city) =>{     //fetched data from child component
    setCityDetail({
      name : city.name,
      max_temp : city.max_temp,
      min_temp : city.min_temp,
      curr_temp : city.temp
    })
    setShowDetail(true);
    setHistory((prevState)=>{
      return [city.name,...prevState];      //pushing to data into history
    });
  }

  const toggleHandler = (check) => {    //Handling errors
    setShowDetail(false);    
    setError(check);
  }

  return (
      <Fragment>
        <Layout />
          <div className='content'>
            <div>
              <Form
                toggle={toggleHandler}
              information={informationHandler}
              />
              {error && <p className='error-style'>Please enter a valid name!</p>}
              {!error && showDetail && <Display
                detail = {cityDetail}
                showDetail={showDetail}
              /> }
            </div>
            <History list={history}/>
          </div>
     </Fragment>
  );
}

export default App;
