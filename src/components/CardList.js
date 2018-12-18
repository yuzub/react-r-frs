import React from 'react';
import Card from './Card';

const CardList = ({ users }) => {
  // const cardsArray = users.map(user => {
  //     return (
  //         <Card
  //             key={user.id}
  //             id={user.id}
  //             name={user.name}
  //             email={user.email}
  //         />
  //     );
  // });
  return (
    <div>
      {
        // cardsArray
        users.map(user => {
          return (
            <Card
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
            />
          );
        })
      }
    </div>
  );
};

export default CardList;