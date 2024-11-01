import { useState } from 'react';
import { Thought } from './components/thought';
import { AddThoughtForm } from './components/addThoughtForm';
import { generateId, getNewExpirationTime } from './info/utilities';

/*
  Passing Thoughts
  What if you could post something and know it wouldn’t live forever? In this project, we’ll build a place 
  for our passing thoughts. Once you add a short thought, it’ll disappear after just 15 seconds.
*/
export const App = () => {

  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = (thought) => {
    setThoughts((thoughts) => [thought, ...thoughts]);
  }

  const removeThought = (thoughtIdToRemove) => {
    setThoughts((thoughts) => thoughts.filter((thought) => thought.id !== thoughtIdToRemove));
  }
  
  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought removeThought={removeThought} key={thought.id} thought={thought} />
          ))}
        </ul>
      </main>
    </div>
  );
}