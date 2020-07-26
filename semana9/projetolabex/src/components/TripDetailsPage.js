import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/pedro-turing";

const TripDetailPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token === null) {
      history.push("/");
    } else {
      getTripDetail();
    }
  }, [history]);

  const getTripDetail = () => {
    const token = window.localStorage.getItem("token");

    axios
      .get(`${baseUrl}/trip/1cjNw2ypx2JN5wdhd0te`, {
        headers: {
          auth: token
        }
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  const handleLogout = () => {
    window.localStorage.clear();
    history.push("/");
  };

  return (
    <div>
      TripDetailPage<button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default TripDetailPage;
