# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

john_brown, jim_green, joe_black = Author.create([
  {
    first_name: 'John',
    last_name: 'Brown',
  },
  {
    first_name: 'Jim',
    last_name: 'Green',
  },
  {
    first_name: 'Joe',
    last_name: 'Black',
  },
])

science, fiction = Topic.create([
  {name: "Science"},
  {name: "Fiction"}
])


shelf_1, shelf_2 = BookShelf.create([
  {name: "Shelf 1"},
  {name: "Shelf 2"},
])

box_1, box_2 = Box.create([
  {name: "Box 1"},
  {name: "Box 2"},
])

Book.create(title: "Star Wars 1", authors: [john_brown], topic: fiction, storage_place: shelf_1)
Book.create(title: "Star Wars 2", authors: [jim_green], topic: fiction, storage_place: shelf_1)

Book.create(title: "Lord of the Rings 1", authors: [john_brown], topic: fiction, storage_place: shelf_2)
Book.create(title: "Lord of the Rings 2", authors: [jim_green], topic: fiction, storage_place: shelf_2)

Book.create(title: "Physics", authors: [john_brown], topic: science, storage_place: box_1)
