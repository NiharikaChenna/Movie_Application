// import React, { useState, createContext } from "react";
// import { options } from "./Api";
// import axios from "axios";

// const MovieContext = createContext();

// export const MovieProvider = (props) => {
//   const [Data, setData] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.request(options);
//       setData(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <MovieContext.Provider value={{ Data: Data, fetchData }}>
//       {Data ? props.children : <div>Loading...</div>}
//     </MovieContext.Provider>
//   );
// };

// export { MovieContext };
