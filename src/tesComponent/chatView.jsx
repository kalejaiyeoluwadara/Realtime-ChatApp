import React from "react";

function ChatView() {

    const generateUniqueId = () => {
        const timestamp = new Date().getTime();
        const uniqueId = 'user_' + Math.random().toString(36).substr(2, 9); // Unique alphanumeric identifier
        const randomComponent = Math.floor(Math.random() * 1000);
      
        const uniqueCombinedId = `${timestamp}_${uniqueId}_${randomComponent}`;
        return uniqueCombinedId;
      };
      
      let userId = generateUniqueId();
      console.log(userId);
      
  const text = [
    {
      text: "hello there",
      date: "2min ago",
      id: userId,
    },
    {
      text: "I dey oo",
      date: "1min ago",
      id: "221",
    },
    {
      text: "Okay naw",
      date: "1min ago",
      id: "121",
    },
    {
      text: "we'll talk later chief",
      date: "just now",
      id: userId,
    },
  ];
  return (
    <div className="bg-gray-900 flex flex-col gap-6 py-8 px-3 h-screen w-screen text-white">
      {text.map((message, Id) => {
        const {text,date,id} = message;
        return (
          <>
            {id === userId ? (
              <div className="flex relative  w-full items-center justify-end   ">
                <span className="px-4 py-3 rounded-[20px] bg-blue-500 min-w-[20px]  ">
                  {text}
                </span>
                <span className="text-gray-400 absolute -bottom-5 right-2 text-[12px]  " >{date}</span>
              </div>
            ) : (
              <div className="flex relative  w-full items-center justify-start   ">
                <span className="px-4 py-3 rounded-[15px] bg-gray-700 min-w-[20px]  ">
                <span className="text-gray-400 absolute -bottom-5 left-2 text-[12px]  " >{date}</span>
                {text}
                </span>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}

export default ChatView;

{
  /* <div className='flex  w-full items-center justify-end   '>
<span className='px-4 py-3 rounded-[15px] bg-blue-500 min-w-[20px]  ' >hello there</span>
</div>

<div className='flex  w-full items-center justify-start   '>
<span className='px-4 py-3 rounded-[15px] bg-gray-700 min-w-[20px]  ' >i dey oo</span>
</div> */
}
