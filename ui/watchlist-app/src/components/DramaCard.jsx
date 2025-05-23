/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import '../App.css';

// Indvidual Drama Card to display in Home Page collection
const DramaCard = ({drama}) => {
  
  return (
    <div className='card-container'>

    {/* Drama Image */}
      <img
        src={drama.imageUrl}
        alt='Dramas'
        height={380}
      />

      {/* Drama Details */}
      <div className='desc'>
        <h2>
          <Link to={`/show-drama/${drama._id}`}>{drama.title}</Link>
        </h2>
        <p>{drama.year} | {drama.type} | Genre: {drama.genre}</p>
        <p>Season: {drama.season} | Episodes {drama.episodes}</p>
        <p>Rating: {drama.rating}</p>

      </div>
    </div>
  );
};

export default DramaCard;