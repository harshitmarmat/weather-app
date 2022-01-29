import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Display from "./components/display/Display";
import Form from "./components/form/Form";
import Card from "./components/layout/Card";
import Layout from "./components/layout/Layout";

const App = () => {
  const [showDetail,setShowDetail] = useState(false);
  const [cityDetail,setCityDetail] = useState({});

  const informationHandler = (city) =>{
    setCityDetail({
      name : city.name,
      max_temp : city.max_temp,
      min_temp : city.min_temp,
      curr_temp : city.temp
    })
    setShowDetail(true);
  }

  return (
      <Fragment>
        <Layout />
          <Form
           information={informationHandler}
           />
          <Display
            detail = {cityDetail}
            showDetail={showDetail}
          />
      </Fragment>
  );
}

export default App;
