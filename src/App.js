import { Fragment } from "react/cjs/react.production.min";
import Display from "./components/display/Display";
import Form from "./components/form/Form";
import Card from "./components/layout/Card";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
      <Fragment>
        <Layout />
          <Form/>
          <Display />
      </Fragment>
  );
}

export default App;
