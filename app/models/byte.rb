class Byte < ApplicationRecord

  has_many :votes

  validates :content, presence: true
end
