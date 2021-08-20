json.extract! book_shelf, :id, :name, :created_at, :updated_at
json.storage_place_type book_shelf.class.to_s
json.url book_shelf_url(book_shelf, format: :json)
