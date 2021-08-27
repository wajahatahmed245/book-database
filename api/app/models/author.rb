class Author < ApplicationRecord
  has_and_belongs_to_many :books
  
  validates :first_name, :last_name, presence: true, length: { minimum: 3 }

  def full_name
    "#{first_name} #{last_name}"
  end
end
