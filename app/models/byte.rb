class Byte < ApplicationRecord

  belongs_to :user
  has_many :votes, dependent: :destroy

  # validates :title, presence: true
  validates :content, presence: true
  validates :user_id, presence: true
end
