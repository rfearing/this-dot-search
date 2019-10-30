import PropTypes from 'prop-types';
import { useState } from 'react';
import { getUser } from 'ACTIONS';
import { FaStar } from 'react-icons/fa';
import css from './results.scss';

const Result = ({
  user,
}) => {
  const { avatar_url: url, login } = user;
  const [userData, setUserData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetUserData = async () => {
    setIsLoading(true);
    const userResponse = await getUser(login);
    setUserData(userResponse);
    setIsLoading(false);
  };

  let content = userData
    ? (
      <div className="card">
        <div className="card-body">
          <p className="card-title"><b>Name: </b>{userData.name}</p>
          {userData.bio && <p className="card-text"><b>Bio:</b> {userData.bio}</p>}
          {userData.location && <p className="card-text"><b>Location:</b> {userData.location}</p>}
          <p><FaStar /> Following: {userData.following}</p>
          <p><FaStar /> Followers: {userData.followers}</p>
        </div>
      </div>
    ) : (
      <button
        type="button"
        onClick={handleGetUserData}
        className="btn btn-outline-secondary"
      >
        See User Info
      </button>
    );

  if (isLoading) {
    content = (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <li className={`list-group-item ${css.result}`}>
      <div className="d-flex flex-column align-items-center">
        <h4 className="mb-3">{login}</h4>
        <img
          alt={`Avatar for ${login}'s GitHub Account`}
          src={url}
          className={`${css.userResultAvatar} mb-3`}
        />
        {content}
      </div>
    </li>
  );
};

Result.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string,
    avatar_url: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default Result;
