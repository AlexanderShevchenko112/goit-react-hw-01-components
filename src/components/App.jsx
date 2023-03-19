import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactionHistory/TransactionHistory';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
export const App = () => {
  return (
    <div>
      <Profile user={user}></Profile>
      <Statistics title="Upload stats" stats={data}></Statistics>
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions}></TransactionHistory>
    </div>
  );
};
