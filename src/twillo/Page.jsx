import React from 'react';
import './page.css';

// Section component with user object and random color
const Section = ({ user, color }) => (
  <section className={`flex flex-col gap-2 p-4 border border-gray-700 rounded-md bg-gray-900`}>
    <h4 className={`text-lg font-bold ${color}`}>{user.name}:</h4>
    <p className="text-gray-300">
      {/* Display random chat text with icons */}
      {user.chat.map((message, index) => (
        <span key={index} className="block">
          {message.icon} {message.text}
        </span>
      ))}
    </p>
  </section>
);

// Main Page component
function Page() {
  // Array of user objects with names and random chat texts
  const users = [
    {
      name: 'Alice',
      chat: [
        { text: 'Hello!', icon: '👋' },
       
      ],
    },
    {
      name: 'Bob',
      chat: [
        { text: 'Hi there!', icon: '👀' },
        
      ],
    },
    // Add more users as needed
  ];

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

  return (
    <div className="min-h-screen px-3 py-10 w-screen bg-black">
      {/* Loop through the array of users and render a Section for each with a random color */}
      {users.map((user, index) => (
        <Section key={index} user={user} color={randCol()} />
      ))}
    </div>
  );
}

export default Page;
