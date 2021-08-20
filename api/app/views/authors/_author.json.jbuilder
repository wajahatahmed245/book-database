json.extract! author, :id, :first_name, :last_name, :created_at, :updated_at, :full_name
json.url author_url(author, format: :json)
