# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Note.destroy_all
Notebook.destroy_all
Tag.destroy_all
Tagging.destroy_all

user1 = User.create!(email: "demo@appacademy.io", username: "demo", image_url: "https://res.cloudinary.com/malice/image/upload/c_scale,w_100/v1500414084/default-profile-pic_bhulg4.svg", password: "password");

User.create!(email: "alicechen118@gmail.com", username: "alice", image_url: "https://res.cloudinary.com/malice/image/upload/c_scale,w_100/v1500414084/default-profile-pic_bhulg4.svg", password: "password");

notebook1 = Notebook.create!(title: "App Academy", description: "Software Development", author_id: user1.id)

notebook2 = Notebook.create!(title: "Shopping Lists", description: "", author_id: user1.id)

notebook3 = Notebook.create!(title: "To-Dos", description: "Random to-do lists", author_id: user1.id)

notebook4 = Notebook.create!(title: "Gym", description: "Workout routines", author_id: user1.id)

note1 = Note.create!(title: "React", body: "React is the entry point to the React library. If you load React from a <script> tag, these top-level APIs are available on the React global. If you use ES6 with npm, you can write import React from 'react'. If you use ES5 with npm, you can write var React = require('react').", author_id: user1.id, notebook_id: notebook1.id)

note2 = Note.create!(title: "React Component", body: "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. React.Component is provided by React. Each component has several 'lifecycle methods' that you can override to run code at particular times in the process. Methods prefixed with will are called right before something happens, and methods prefixed with did are called right after something happens.", author_id: user1.id, notebook_id: notebook1.id)

note3 = Note.create!(title: "React DOM", body: "The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to. Most of your components should not need to use this module. Render a React element into the DOM in the supplied container and return a reference to the component (or returns null for stateless components). If the React element was previously rendered into container, this will perform an update on it and only mutate the DOM as necessary to reflect the latest React element. If the optional callback is provided, it will be executed after the component is rendered or updated.", author_id: user1.id, notebook_id: notebook1.id)
