// import { useState } from "react";
// import Card from "./Card"

// const Newsapp = () => {
    
  
//     const [search,setSearch] = useState("india");
//     const [newsData,setNewsData] = useState(null);
//     const API_KEY ="xxxxxxxxxxxxx";
//     const getData =async() =>{
//         const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
//         const jsonData = await response.json();
//         console.log(jsonData.articles);
//         setNewsData(jsonData.articles);


//     }
    

//     const handleInput =(e)=>{
//       console.log(e.target.value);
//       setSearch(e.target.value)
//     }
//   return (
//     <div>
//       <nav>
//         <div>
//           <h1>Trendy News</h1>
//         </div>
//         <ul>
//         <a>All News</a>
//         <a>Trending</a>
//         </ul>
//         <div className='searchBar'>
//           <input type='text' placeholder='Search News' onChange={handleInput}/>
//           <button onClick={getData}>search</button>
//         </div>
//       </nav>
//       <div>
//         <p  className='head'>Stay Update With TrendyNews</p>
//       </div>
//       <div className='categoryBtn'>
//             <button>Sports</button>
//             <button>Politics</button>
//             <button>Entertainment</button>
//             <button>Health</button>
//             <button>Fitness</button>
//             <div>
//             <Card data={newsData}/>
//             </div>
//       </div>
//     </div>
//   )
// }



import { useEffect, useState } from "react";
import Card from "./Card";

const Newsapp = () => {

  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState([]);

  const API_KEY = "xxxxxxxxxxxxxxxxx";

  const getData = async (query = search) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    setNewsData(jsonData.articles);
  };

  
  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleCategory = (category) => {
    setSearch(category);
    getData(category);
  };

  return (
    <div>
      <nav>
        <h1>Trendy News</h1>

        <ul>
          <li>All News</li>
          <li>Trending</li>
        </ul>

        <div className="searchBar">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            onChange={handleInput}
          />
          <button onClick={() => getData()}>Search</button>
        </div>
      </nav>

      <p className="head">Stay Updated With TrendyNews</p>

      <div className="categoryBtn">
        <button onClick={() => handleCategory("sports")}>Sports</button>
        <button onClick={() => handleCategory("politics")}>Politics</button>
        <button onClick={() => handleCategory("entertainment")}>Entertainment</button>
        <button onClick={() => handleCategory("health")}>Health</button>
        <button onClick={() => handleCategory("fitness")}>Fitness</button>
        <button onClick={() => handleCategory("Top news")}>Top news</button>

      </div>

      <Card data={newsData} />
    </div>
  );
};

export default Newsapp;

