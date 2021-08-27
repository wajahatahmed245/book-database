import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Nav } from "./components/layout/Nav";

import { Authors } from './components/authors/Authors';
import { AuthorForm } from './components/authors/AuthorForm';

import { Topics } from './components/topics/Topics';
import { TopicForm } from './components/topics/TopicForm';

import { Boxes } from './components/boxes/Boxes';
import { BoxForm } from './components/boxes/BoxForm';

import { BookShelves } from './components/book_shelves/BookShelves';
import { BookShelfForm } from './components/book_shelves/BookShelfForm';

import { Books } from './components/books/Books';
import { BookForm } from './components/books/BookForm';

import { Home } from "./components/home/Home";
import { Row, Col } from 'antd';


import './App.css';


function App() {

  return (
    <>
      <Router>
        <Nav />

        <Row justify={"center"} align={"middle"} style={{ minHeight: '75vh' }}>

          <Col span={16}>
          </Col>

          <Col span={16}>
            <Switch>

              <Route path="/authors/:id/edit">
                <AuthorForm />
              </Route>
              <Route path="/authors/new">
                <AuthorForm />
              </Route>
              <Route path="/authors">
                <Authors />
              </Route>

              <Route path="/topics/:id/edit">
                <TopicForm />
              </Route>
              <Route path="/topics/new">
                <TopicForm />
              </Route>
              <Route path="/topics">
                <Topics />
              </Route>

              <Route path="/boxes/:id/edit">
                <BoxForm />
              </Route>
              <Route path="/boxes/new">
                <BoxForm />
              </Route>
              <Route path="/boxes">
                <Boxes />
              </Route>

              <Route path="/bookshelves/:id/edit">
                <BookShelfForm />
              </Route>
              <Route path="/bookshelves/new">
                <BookShelfForm />
              </Route>
              <Route path="/bookshelves">
                <BookShelves />
              </Route>

              <Route path="/books/:id/edit">
                <BookForm />
              </Route>
              <Route path="/books/new">
                <BookForm />
              </Route>
              <Route path="/books">
                <Books />
              </Route>

              <Route path="/">
                <Home />
              </Route>

            </Switch>
          </Col>

          <Col span={16}>
          </Col>

        </Row>
      </Router>
    </>
  );
}

export default App;
