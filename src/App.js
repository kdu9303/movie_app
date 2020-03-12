import React from 'react';

function Food({name, picture}) {
  
  return <div> 
    <h2>I like {name}</h2>
    <img src={picture} alt={name}/>
  
  </div>;
}

const foodILike = [
  {
    id:1,
    name: "Girl",
    images: "https://t1.daumcdn.net/news/202003/12/yonhap/20200312195050579izrb.jpg"

  }
];


function App() {
  return <div> 
    
    {foodILike.map(dish => <Food key = {dish.id} name = {dish.name} picture = {dish.images}/>)}
    </div>
}
export default App;
