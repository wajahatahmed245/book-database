json.id book.id
json.title book.title

json.authors do 
  json.array!(book.authors, :id, :full_name)
end

json.topic book.topic.name
json.topic_id book.topic.id

json.storage_place book.storage_place.name
json.storage_place_id book.storage_place.id

json.storage_place_type book.storage_place.type

json.created_at book.created_at
json.updated_at book.updated_at

json.url book_url(book, format: :json)
