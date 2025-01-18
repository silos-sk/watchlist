import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

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

  const onChange = (e) => {
    setDrama({ ...drama, [e.target.name]: e.target.value });
  };

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
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Drama List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Drama</h1>
            <p className='lead text-center'>Update Drama&apos;s Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
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
            <div>
            <label htmlFor='type'>Type </label>
                <select name="type" value={drama.type} onChange={onChange}>
                <option value="Series">Series</option>
                <option value="Movie">Movie</option>
            </select>

              
              {/* <input
                type='text'
                placeholder='Type'
                name='type'
                className='form-control'
                value={drama.type}
               
              /> */}
            </div>
            <br />
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

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
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