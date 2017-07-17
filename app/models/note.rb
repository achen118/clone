class Note < ApplicationRecord
  validates :author, :notebook, :title, :body, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
  belongs_to :notebook
  has_many :taggings
  has_many :tags, through: :taggings
end
