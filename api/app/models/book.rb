class Book < ApplicationRecord
  belongs_to :author
  belongs_to :topic
  belongs_to :storage_place

  validates :title, :author, :storage_place, presence: true
  validates :title, length: { minimum: 3 }
end
