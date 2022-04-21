# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bench.destroy_all

benches_array = [
                {description: "Glen Canyon Park", lat: 37.741 , lng: -122.44378 }
                {description: "Crane Cove Park", lat: 37.76489 , lng: -122.39434 }
                {description: "Middle Harbor Shoreline Park", lat: 37.80895 , lng: -122.32333 }
                {description: "Treasure Island", lat: 37.82485 , lng: -122.37053 }
                {description: "San Francisco Zoo", lat: 37.73694 , lng: -122.50453 }
                {description: "Bay Farm Island", lat: 37.73903 , lng: -122.2329 }
                {description: "Angel Island State Park", lat: 37.86264 , lng: -122.43192 }
                ]
benches = Benches.create(benches_array)