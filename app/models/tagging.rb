class Tagging < ApplicationRecord
  validates :note, :tag, presence: true
  validates :note, uniqueness: { scope: :tag, message: "already has this tag" }

  belongs_to :note
  belongs_to :tag
end
