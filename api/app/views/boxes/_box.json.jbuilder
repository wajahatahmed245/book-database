json.extract! box, :id, :name, :created_at, :updated_at
json.storage_place_type box.class.to_s
json.url box_url(box, format: :json)
