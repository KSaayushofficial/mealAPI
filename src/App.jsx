import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css"

function App() {
  const [items, setItem] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItem(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

 
   const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return(
        <section className="card" key={idMeal}>
          <img src={strMealThumb} alt={strMeal} />
          <section className="content">
            <p>{strMeal}</p>
            <p>ID: {idMeal}</p>
          </section>
        </section>
   )})

   return(
    <div className="items-container">{itemsList}</div>
   )


}

export default App;
