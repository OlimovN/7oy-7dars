// import React, { useState, useEffect } from "react";

// // useDebounce custom hook
// function useDebounce(value, delay) {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// }

// function SearchComponent() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const debouncedSearchTerm = useDebounce(searchTerm, 500);

//   useEffect(() => {
//     if (debouncedSearchTerm) {
//       console.log(`Qidirilayotgan so'z: ${debouncedSearchTerm}`);
     
//     }
//   }, [debouncedSearchTerm]);

//   return (
//     <div className="p-4">
//       <input
//         type="text"
//         placeholder="Qidiruv..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="p-2 border border-gray-300 rounded"
//       />
//       <p className="mt-2">Qidirilayotgan so'z: {debouncedSearchTerm}</p>
//     </div>
//   );
// }


// export default SearchComponent;


import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

function DebouncedInput() {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 500);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Matn kiriting"
      />
      <p>Kechiktirilgan natija: {debouncedText}</p>
    </div>
  );
}

export default DebouncedInput;
