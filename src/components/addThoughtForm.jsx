import React from 'react';

export const AddThoughtForm = (props) => {
    return (
        <form className="AddThoughtForm">
          <input
            type="text"
            aria-label="What's on your mind?"
            placeholder="What's on your mind?"
          />
          <input type="submit" value="Add" />
        </form>
      );
}
