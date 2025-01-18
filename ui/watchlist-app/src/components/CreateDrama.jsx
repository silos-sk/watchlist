import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateDrama = () => {
  const navigate = useNavigate();

  const [drama, setDrama] = useState({
    title: "",
    year: "",
    type: "",
    season: "",
    episodes: "",
    description: "",
    imageUrl: "",
    rating: "",
    genre: "",
  });

  const onChange = (e) => {
    setDrama({ ...drama, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8082/", drama)
      .then((res) => {
        console.log(res.data);
        setDrama({
            title: "",
            year: "",
            type: "",
            season: "",
            episodes: "",
            description: "",
            imageUrl: "",
            rating: "",
            genre: "",
        });
        // Push to /
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div className="CreateDrama">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show Drama List
            </Link>
          </div>
          <div className="col-md-10 m-auto">
            <h1 className="display-4 text-center">Add Drama</h1>
            <p className="lead text-center">Create new drama</p>
            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Drama Title"
                  name="title"
                  className="form-control"
                  value={drama.title}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="year"
                  name="year"
                  className="form-control"
                  value={drama.year}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
              <label htmlFor='type'>Type </label>
                <select name="type" value={drama.type} onChange={onChange}>
                <option value="Series">Series</option>
                <option value="Movie">Movie</option>
            </select>
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="season"
                  name="season"
                  className="form-control"
                  value={drama.season}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="episodes"
                  name="episodes"
                  className="form-control"
                  value={drama.episodes}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Describe this drama"
                  name="description"
                  className="form-control"
                  value={drama.description}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="image URL"
                  name="imageUrl"
                  className="form-control"
                  value={drama.imageUrl}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Rating of this Drama"
                  name="rating"
                  className="form-control"
                  value={drama.rating}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Genre of this Drama"
                  name="genre"
                  className="form-control"
                  value={drama.genre}
                  onChange={onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-outline-warning btn-block mt-4 mb-4 w-100"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDrama;