import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

// Edit the information of a selected Drama
function UpdateDramaInfo() {
  const [drama, setDrama] = useState({
    title : '',
    year : '',
    type : '',
    season: '',
    episodes : '',
    description : '',
    imageUrl: '',
    rating: '',
    genre: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();

  // Pull details for current drama from backend and set current form fields to contain them
  useEffect(() => {
    axios
      .get(`http://localhost:8082/${id}`)
      .then((res) => {
        setDrama({
          title : res.data.title,
          year : res.data.year,
          type : res.data.type,
          season: res.data.season,
          episodes : res.data.episodes,
          description : res.data.description,
          imageUrl: res.data.imageUrl,
          rating: res.data.rating,
          genre: res.data.genre
        });
      })
      .catch((err) => {
        console.log(err.response.data)
        console.log('Error from UpdateBookInfo');
      });
  }, [id]);

// On form field once filled, add to new set of array to capture user input to add to database
  const onChange = (e) => {
    setDrama({ ...drama, [e.target.name]: e.target.value });
  };

  // On form submit, add drama updated info to backend according to ID, then navigate back to current drama details page
  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title : drama.title,
      year : drama.year,
      type : drama.type,
      season: drama.season,
      episodes : drama.episodes,
      description : drama.description,
      imageUrl: drama.imageUrl,
      rating: drama.rating,
      genre: drama.genre
    };

    axios
      .put(`http://localhost:8082/${id}`, data)
      .then((res) => {
        navigate(`/show-drama/${id}`);
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response.data)
        console.log('Error in UpdateDramaInfo!');
      });
  };

  return (
    <div className='UpdateDramaInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />

            {/* Button to Show All Dramas */}
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Drama List
            </Link>
          </div>

          <div className='col-md-8 m-auto'>
            <h1 className='display-5 text-center mt-3'>Edit Drama</h1>
            <p className='lead text-center'>Update Drama&apos;s Info</p>
          </div>
        </div>

        {/* Edit Drama Details Form */}
        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>

            {/* Drama Title Field */}
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                placeholder='Drama Title'
                name='title'
                className='form-control'
                value={drama.title}
                onChange={onChange}
              />
            </div>
            <br />

            {/* Drama Image Url Field */}
            <div className='form-group'>
              <label htmlFor='imageUrl'>ImageUrl</label>
              <input
                type='text'
                placeholder='Image Url'
                name='imageUrl'
                className='form-control'
                value={drama.imageUrl}
                onChange={onChange}
              />
            </div>
            <br />

            {/* Drama Year Field */}
            <div className='form-group'>
              <label htmlFor='year'>Year</label>
              <input
                type='text'
                placeholder='Year'
                name='year'
                className='form-control'
                value={drama.year}
                onChange={onChange}
              />
            </div>
            <br />

            {/* Drama Type Field */}
            <div className="form-group">
              <label htmlFor='type'>Type: </label>
                <select name="type" value={drama.type} onChange={onChange}>
                <option value="Series">Series</option>
                <option value="Movie">Movie</option>
            </select>
              </div>
            
            {/* Drama Season Field */}
            <div className='form-group'>
              <label htmlFor='season'>Season</label>
              <input
                type='text'
                placeholder='Season'
                name='season'
                className='form-control'
                value={drama.season}
                onChange={onChange}
              />
            </div>
            <br />

            {/* Drama Number of Episodes Field */}
            <div className='form-group'>
              <label htmlFor='episodes'>Episodes</label>
              <input
                type='text'
                placeholder='Episodes'
                name='episodes'
                className='form-control'
                value={drama.episodes}
                onChange={onChange}
              />
            </div>
            <br />

            {/* Drama Description Field */}
            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <textarea
                type='text'
                placeholder='Drama Description'
                name='description'
                className='form-control'
                value={drama.description}
                onChange={onChange}
              />
            </div>
            <br />

            {/* Drama Rating Field */}
            <div className='form-group'>
              <label htmlFor='rating'>Rating</label>
              <input
                type='text'
                placeholder='Rating'
                name='rating'
                className='form-control'
                value={drama.rating}
                onChange={onChange}
              />
            </div>
            <br />

            {/* Drama Genre Field */}
            <div className='form-group'>
              <label htmlFor='genre'>Genre</label>
              <input
                type='text'
                placeholder='Genre'
                name='genre'
                className='form-control'
                value={drama.genre}
                onChange={onChange}
              />
            </div>
            <br />
            
             {/* Button to Submit Updated Drama Details */}
            <button
              type='submit'
              className='btn btn-warning btn-lg btn-block'
            >
              Update Drama
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateDramaInfo;