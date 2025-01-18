import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowDramaDetails() {
  const [drama, setDrama] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/${id}`)
      .then((res) => {
        setDrama(res.data);
      })
      .catch((err) => {
        console.log(err.response.data)
        console.log('Error from ShowDramaDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/${id}`)
      .then((res) => {
        navigate('/');
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response.data)
        console.log('Error form ShowBookDetails_deleteClick');
      });
  };

  const DramaItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Title</td>
            <td>{drama.title}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Year</td>
            <td>{drama.year}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Genre</td>
            <td>{drama.genre}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Season</td>
            <td>{drama.season}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Episodes</td>
            <td>{drama.episodes}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Description</td>
            <td>{drama.description}</td>
          </tr>
          <tr>
            <th scope='row'>7</th>
            <td>Rating</td>
            <td>{drama.rating}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowDramaDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Book List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Drama&apos;s Record</h1>
            <p className='lead text-center'>View Drama&apos;s Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{DramaItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(drama._id);
              }}
            >
              Delete Drama
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-drama/${drama._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Drama
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDramaDetails;