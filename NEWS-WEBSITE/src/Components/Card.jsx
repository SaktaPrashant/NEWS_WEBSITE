// const Card = ({data}) => {
//   console.log(data);
//   return (
//     <div className='cardContainer'>
//       {data.map((curItem,index)=> {  
//           return(
//             <div className='card'>
//               <img src={curItem.urlToImage}/>
//               <div className='cardContent'>
//             <a>{curItem.title}</a>
//             <p>{curItem.descreption}</p>
//             <button>Read More</button>
//           </div>
//         </div>
//       )})}

//     </div>
//   )
// }

//export default Card

const Card = ({ data }) => {
  console.log(data);

  return (
    <div className="cardContainer">
      {data.map((curItem, index) => {
        return (
          <div className="card" key={index}>
            <img 
              src={curItem.urlToImage} 
              alt={curItem.title} 
            />

            <div className="cardContent">
              <a>{curItem.title}</a>
              <p>{curItem.description}</p>
              <button>Read More</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;


