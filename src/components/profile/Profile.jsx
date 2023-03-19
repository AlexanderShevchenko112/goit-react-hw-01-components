import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
  return (
    <div className={css.profile}>
      <img className={css.userPic} src={avatar} alt={username} />
      <h1 className={css.userName}>{username}</h1>
      <p className={css.userTag}>@{tag}</p>
      <p className={css.userLocation}>{location}</p>
      <div className={css.bottomPart}>
        <div className={css.stat}>
          <p className={css.descText}>Followers</p>
          <h2 className={css.descNumber}>{stats.followers}</h2>
        </div>
        <div className={css.stat}>
          <p className={css.descText}>Views</p>
          <h2 className={css.descNumber}>{stats.views}</h2>
        </div>
        <div className={css.stat}>
          <p className={css.descText}>Likes</p>
          <h2 className={css.descNumber}>{stats.likes}</h2>
        </div>
      </div>
    </div>
  );
};
export default Profile;

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    stats: PropTypes.number.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
