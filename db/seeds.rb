# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(email: "demo@appacademy.io", username: "demo", image_url: "https://res.cloudinary.com/malice/image/upload/c_scale,w_100/v1500414084/default-profile-pic_bhulg4.svg", password: "password");

User.create!(email: "alicechen118@gmail.com", username: "alice", image_url: "https://res.cloudinary.com/malice/image/upload/c_scale,w_100/v1500414084/default-profile-pic_bhulg4.svg", password: "password");
