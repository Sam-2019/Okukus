import React from 'react';

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
    return (
      <div className="Comment">
        <span>
     
            {props.author.name}
          </span>
    
        <div> {props.text}</div>
        <div >
          {formatDate(props.date)}
        </div>
        </div>
    );
  }
  
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      why: 'Kitty',
    },
  };

 export default Comment;