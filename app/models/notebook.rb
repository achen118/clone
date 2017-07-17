class Notebook < ApplicationRecord
  validates :author, :title, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
  has_many :notes
end
