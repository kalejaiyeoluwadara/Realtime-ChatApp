import React from 'react';
import './page.css';

// Section component with user object and random color
const Section = ({ user }) => {
  // Function to generate a random color
  const randCol = () => {
    // Updated cols array with more colors
    const cols = [
      'text-green-500',
      'text-blue-500',
      'text-red-500',
      'text-purple-500',
      'text-pink-500',
      'text-yellow-500',
      'text-indigo-500',
      'text-teal-500',
      'text-cyan-500',
      'text-orange-500',
      'text-gray-500',
    ];

    const rand = Math.floor(Math.random() * cols.length);
    return cols[rand];
  };

  // Generate a random color for h4 and p elements
  const h4Color = randCol();
  const pColor = randCol();

  return (
    <section className="flex flex-col gap-2">
      <h4 className={`text-lg font-bold ${h4Color}`}>{user.name}:</h4>
      <p className={`text-gray-300 ${pColor}`}>
        {/* Display random chat text with an icon */}
        <span>{user.text} </span>
      </p>
    </section>
  );
};

// Main Page component
function Page() {
  // Array of user objects with names and random chat texts
  const users = [
    {
      name: 'Alice',
      text: 'Hello!',
    },
    {
      name: 'Bob',
      text: 'Hi there!',
    },
    // Add more users as needed
  ];

  return (
    <div className="min-h-screen px-3 py-10 w-screen bg-black">
      {/* Loop through the array of users and render a Section for each */}
      {users.map((user, index) => (
        <Section key={index} user={user} />
      ))}
    </div>
  );
}

export default Page;
