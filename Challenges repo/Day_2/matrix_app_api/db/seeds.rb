# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Character.create([

	{ name: "Neo", description: "The 1"},
	{ name: "Trinity", description: "Father, Son, Holy Spirit...JK, Neo's love interest" },
	{ name: "Morpheus", description: "The prophet"},
	{ name: "Agent Smith", description: "The 0 to Neo" },

])

Vehicles.create([
	{ name: "Nebuchadnezzar", style: "Spaceship" },
])