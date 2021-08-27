class Book < ApplicationRecord
  has_and_belongs_to_many :authors
  belongs_to :topic
  belongs_to :storage_place

  validates :title, :authors, :storage_place, presence: true
  validates :title, length: { minimum: 3 }

  def self.search(query)
    tokens = query.strip.split(" ")
    tokens_condition = tokens.join("|")
  
    searchable_attr = %w[
      books.title
      authors.first_name
      authors.last_name
      topics.name
      storage_places.name
    ]
    search_attrs = searchable_attr.join(" || ")
  
    search_condition = "#{search_attrs} ~* '.*#{tokens_condition}.*'"
  
    includes(:author, :topic, :storage_place)
      .references(:author, :topic, :storage_place)
      .where(search_condition)
      .distinct
      .uniq
  end
end
