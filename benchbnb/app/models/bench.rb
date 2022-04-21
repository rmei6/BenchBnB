class Bench < ApplicationRecord
    validates :description, :lat, :lng, presence:true

    def self.in_bounds(bounds)
        maxLat, maxLng = bounds["northEast"].values_at('lat','lng')
        minLat, minLng = bounds["southWest"].values_at('lat','lng')

        Bench.where("lat >= :minLat AND lat <= :maxLat AND lng >= :minLng AND lng <= :maxLng", minLat: minLat,)
    end
end
