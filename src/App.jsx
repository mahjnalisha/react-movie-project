import React from 'react'
import './custom.scss';
import Header from './components/Navbar/Header';
import Container from 'react-bootstrap/Container';
import MovieBreadcrumb from './components/Breadcrum';
import MovieList from './components/Main/MovieList';


const App = () => {
  return (
    <>
      <div className='app'>
        <div className='navbar'> <Header></Header>   </div>
        <Container>
          {/* <MovieBreadcrumb></MovieBreadcrumb> */}

        </Container>
        <Container>
          <MovieList />
        </Container>
      </div>
    </>
  )
}

export default App

