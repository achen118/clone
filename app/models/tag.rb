class Tag < ApplicationRecord
  validates :name, :author, presence: true
  validates :name, uniqueness: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
  has_many :taggings,
    primary_key: :name,
    foreign_key: :tag_name,
    class_name: :Tagging,
    dependent: :destroy
  has_many :notes, through: :taggings
end
