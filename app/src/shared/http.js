import fetch from 'isomorphic-fetch';

const api_host = "http://localhost:3000"

function generateFetchConfig(method, body = null) {

  const upCasedMethod = method.toUpperCase();
  const config = {
    method: upCasedMethod,
    headers: {
      'Content-Type': 'application/json',
    }
  };

  if (['POST', 'PATCH'].includes(upCasedMethod)) {
    config.body = JSON.stringify(body);
  }

  return config;
}

export function searchBooks(query) {
  return fetch(`${api_host}/search?q=${encodeURIComponent(query)}`, generateFetchConfig('GET'));
}

export function createTopic(payload) {
  return fetch(`${api_host}/topics`, generateFetchConfig("POST", payload));
}

export function updateTopic(payload) {
  return fetch(`${api_host}/topics/${payload.id}`, generateFetchConfig("PATCH", payload));
}

export function deleteTopic(id) {
  return fetch(`${api_host}/topics/${id}`, generateFetchConfig("DELETE"));
}

export function fetchTopics() {
  return fetch(`${api_host}/topics`, generateFetchConfig('GET'));
}

export function createAuthor(payload) {
  return fetch(`${api_host}/authors`, generateFetchConfig("POST", payload));
}

export function updateAuthor(payload) {
  return fetch(`${api_host}/authors/${payload.id}`, generateFetchConfig("PATCH", payload));
}

export function deleteAuthor(id) {
  return fetch(`${api_host}/authors/${id}`, generateFetchConfig("DELETE"));
}

export function fetchAuthors() {
  return fetch(`${api_host}/authors`, generateFetchConfig('GET'));
}

export function createBox(payload) {
  return fetch(`${api_host}/boxes`, generateFetchConfig("POST", payload));
}

export function updateBox(payload) {
  return fetch(`${api_host}/boxes/${payload.id}`, generateFetchConfig("PATCH", payload));
}

export function deleteBox(id) {
  return fetch(`${api_host}/boxes/${id}`, generateFetchConfig("DELETE"));
}

export function fetchBoxes() {
  return fetch(`${api_host}/boxes`, generateFetchConfig('GET'));
}

export function createBookShelf(payload) {
  return fetch(`${api_host}/book_shelves`, generateFetchConfig("POST", payload));
}

export function updateBookShelf(payload) {
  return fetch(`${api_host}/book_shelves/${payload.id}`, generateFetchConfig("PATCH", payload));
}

export function deleteBookShelf(id) {
  return fetch(`${api_host}/book_shelves/${id}`, generateFetchConfig("DELETE"));
}

export function fetchBookShelves() {
  return fetch(`${api_host}/book_shelves`, generateFetchConfig('GET'));
}

function transformBookPayload(payload) {
  console.log(payload)
  const [storage_place_type, storage_place_id] = payload.storage_place.split(",")
  return {
    id: payload.id,
    title: payload.title,
    author_id: payload.author_id,
    topic_id: payload.topic_id,
    storage_place_id: storage_place_id,
    storage_place_type: storage_place_type
  }
}
export function createBook(payload) {
  return fetch(`${api_host}/books`, generateFetchConfig("POST", transformBookPayload(payload)));
}

export function updateBook(payload) {
  return fetch(`${api_host}/books/${payload.id}`, generateFetchConfig("PATCH", transformBookPayload(payload)));
}

export function deleteBook(id) {
  return fetch(`${api_host}/books/${id}`, generateFetchConfig("DELETE"));
}

export function fetchBooks() {
  return fetch(`${api_host}/books`, generateFetchConfig('GET'));
}

