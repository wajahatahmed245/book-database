class ApplicationRecord < ActiveRecord::Base
  include StripWhitespaces

  self.abstract_class = true

  before_validation :strip_whitespaces
end
