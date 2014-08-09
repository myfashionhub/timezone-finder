class User < ActiveRecord::Base
  has_many :entries

  has_secure_password
  validates :email, uniqueness: true
  validates :password, length: {within: 6..12, wrong_length: "Password length does not match requirement"}, :on => :create

end
