import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';
import PhotosPage from './pages/PhotosPage';
import PostDetailPage from './pages/PostDetailPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="main-nav">
          <Link to="/">Home</Link>

          <Link to="/posts">Posts</Link>

          <Link to="/photos">Photos</Link>
        </nav>

        <div className="content-container">
          <Switch>
            <Route path="/posts/:id">
              <PostDetailPage />
            </Route>

            <Route path="/posts">
              <PostsPage />
            </Route>

            <Route path="/photos">
              <PhotosPage />
            </Route>

            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
