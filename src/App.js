import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Navication from "./component/Navication/Navication";
import Home from "./component/Home/Home";

const App = () => {
  const [cardData, setcarData] = useState({});
  const [loadData, setLoaddata] = useState(false);
  const [count, setCount] = useState(1);
  const [apiLink, setApiLink] = useState(
    `https://reqres.in/api/users?page=${count}`
  );
  useEffect(() => {
    getData();
  }, [apiLink]);
  const getData = async () => {
    try {
      const info = await axios.get(apiLink);
      const allData = info.data.data;
      setcarData({ allData });
      setLoaddata(true);
    } catch (e) {
      console.log(e.messgae);
    }
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Navication
              changeLink={setApiLink}
              count={count}
              countset={setCount}
            />
          }
        >
          <Route
            path="/home"
            index
            element={<Home loaddata={loadData} carddata={cardData} />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
