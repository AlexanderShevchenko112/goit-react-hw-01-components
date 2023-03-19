import PropTypes from 'prop-types';
import css from './FriendsList.module.css';
import FriendListItem from './FriendListItem';
const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(({ avatar, id, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        ></FriendListItem>
      ))}
    </ul>
  );
};
export default FriendList;
FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.number.isRequired,
      id: PropTypes.number,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
