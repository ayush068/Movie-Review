
import './App.css';

import Header from './Header';
import Student from './Component/Student';
import Movie from './Movie';
import movies from './movie.json'
import { element } from 'prop-types';

function App() {
  
  return (
    <div className="App">
      {/* <Student /> */}
       {/* <Student name ="Ayush"
       age = {28} /> */}

{/* <Student name ="Nema"
       age = {27} /> */}
    

    {/* <Student name ="Prince"
       age = {25} /> */}

       <Header />
       <div className='main'>
        {
          movies.map((element) => {
            return( 
            <Movie
             title = {element.Title} 
             year ={element.Year}
             img ={element.Poster}
             />
            )
            
          })
        }
        
        
        

       </div>
    
    </div>

  );
}   

export default App;
