import React, { useEffect } from 'react';

export const Thought = (props) => {
  const { thought, removeThought } = props;

  useEffect(() => {
        const timeRemaining = thought.expiresAt - Date.now();
        const timeout = setTimeout(() => {
            removeThought(thought.id);
            return () => {
                clearTimeout(timeout);
            };
        }, timeRemaining)
    }, [thought]);

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
