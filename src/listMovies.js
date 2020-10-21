import React from 'react';
import movies from "./movies";




function MovieNight( ) {
    return (
        <div>
        {
           movies.map(item =>
            {
                return (
                  
                    
                  <div style ={properties}>
                        <h3>{`#${item.id} - ${item.title}`}</h3>
                        <p>{`Türü: ${item.description}`}</p>
                    </div>
                

            )

            })
        }
        </div>
        )

    }

    const properties = 
    {
        marginTop: '5px',
        padding: '1px 5px',
        borderRadiues: '10px',
        backgroundColor: '#363636',
        color: "white",
        border: 1,
    
        }
    
 // çalışan hali


 

export default MovieNight;
