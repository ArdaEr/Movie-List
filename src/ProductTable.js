import React from 'react';

import ListRow from './ListRow';
import Row from './Row';
import defaultmovies from "./movies";


function ProductTable() {
  const getCategories = () => {
    const categories = [];
    defaultmovies.forEach((movie) => {
      if (!categories.includes(movie.description)) {
        categories.push(movie.description);
      }
    });

   

    return categories;
  };
  return (

    <>
    
    <div className="deneme">
          <div>
            
             <ul class="list-group">
        {getCategories().map((description) => (
          <>
            <ListRow description={description} />

            {defaultmovies
              .filter((movie) => movie.description === description)
              .map((movie) => (
                <Row movie={movie} />
              ))}
          </>
        ))}
       </ul>
          </div>
      </div>
    </>
  )
};

export default ProductTable;
