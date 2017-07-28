class Note < ApplicationRecord
  validates :author, :notebook, :title, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
  belongs_to :notebook
  has_many :taggings,
    primary_key: :id,
    foreign_key: :note_id,
    class_name: :Tagging,
    dependent: :destroy
  has_many :tags, through: :taggings
end
