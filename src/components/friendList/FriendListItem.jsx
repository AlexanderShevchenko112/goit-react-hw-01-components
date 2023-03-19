import css from './FriendListItem.module.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.statusOn : css.statusOff}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
export default FriendListItem;
