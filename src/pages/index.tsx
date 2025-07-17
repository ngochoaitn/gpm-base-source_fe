import { useState } from "react";



export default function Home() {
  const [content, setContent] = useState<string | null>(null);

  const getContent = async () => {
    try {
      const response = await fetch("http://localhost:4000/");
        const data = await response.json();
        setContent(data.message);
    } catch (error) {
      setContent("Failed to fetch content");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Fetch Content</h1>
      <button
        onClick={getContent}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200 mb-4"
      >
        Fetch Content
      </button>
      {content && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded text-blue-800 text-center">
        {content}
        </div>
      )}
      </div>
    </div>
  );
}
