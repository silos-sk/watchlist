import { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DramaCard from './DramaCard';

// Show Drama Collection in Home Page
function ShowDramaList() {
  const [dramas, setDramas] = useState([]);

  // Pull Drama list collection from the backend and display
  useEffect(() => {
    axios
      .get('http://localhost:8082')
      .then((res) => {
        setDramas(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  // Generate card layout for each Drama pulled from the backend
  const dramaList =
    dramas.length === 0
      ? 'there is no drama record!'
      : dramas.map((drama, k) => <DramaCard drama={drama} key={k} />);

  return (
    <div className="ShowDramaList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-5 text-center mb-4">My Dramas Collection</h2>
          </div>

          {/* Button to Add a Drama */}
          <div className="col-md-11">
            <Link
              to="/create-drama"
              className="btn btn-outline-warning float-right"
            >
              + Add New Drama
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        {/* Drama Collection List */}
        <div className="list_container">
          <div className="list">{dramaList}</div>
          </div>
      </div>
    </div>
  );
}

export default ShowDramaList;