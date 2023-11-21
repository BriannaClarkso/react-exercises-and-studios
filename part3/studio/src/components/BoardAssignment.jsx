import { useState } from 'react';

export default function BoardAssignment () {

   const [boardName, setName] = useState('no boards yet!'); 

   const boards = [
      {
         label: "Yummy Food",
         value: "newFood"
      },
      {
         label: "Fav Meals",
         value: "favFood"
      },
      {
         label: "Thanksgiving",
         value: "thanksgiving"
      }
   ];

   let boardOptions = boards.map((board, index) => {
      return <option key={index} value={board.value}>{board.label}</option>;
   })


   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boardOptions}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
