import React from 'react';
import axios from 'axios';
import Movie from './movies';
import './App.css';

 

class App extends React.Component{

  state = {

    isLoading: true,

    movies:[],

  };

 
  getMovies = async () => { //async는 이 함수가 비동기식을 의미

    const {

      data:{

        data:{movies}

      },

    }= await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');

    //console.log(movies);

    //console.log(movies.data.data.movies);

    this.setState({movies,isLoading:false})

  } //await 대기중

 

  componentDidMount(){

     this.getMovies()

  }

 

  render(){

    const {movies,isLoading} = this.state;

 

    return (

      <div className='container'>

        {/* {isLoading ? '로딩' : '대기'}  */}

        <div classname='movies'>

          {isLoading

          ?('로딩')

          :movies.map((movie) => (

            //console.log(movie)

            <Movie
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}

            />
          ))
         }
        </div>
      </div>
    );
  }  
}


export default App;