class User < ApplicationRecord
  validates :email, :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  has_many :notes,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Note,
    dependent: :destroy
  has_many :notebooks,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Notebook,
    dependent: :destroy
  has_many :tags,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Tag,
    dependent: :destroy
  has_many :taggings, through: :tags

  attr_reader :password

  def self.find_by_credentials(user_credential, password)
    user = User.find_by(username: user_credential)
    user = User.find_by(email: user_credential) unless user
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    ensure_session_token_uniqueness unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token_uniqueness
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
