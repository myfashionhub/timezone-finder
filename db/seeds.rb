require 'csv'

CSV.foreach('db/timezones.csv') do |row|
  Timezone.create(abbreviation: row[0], name: row[1], difference: row[3].delete('UTChours ').to_i, cities: [])
end

cities = []
CSV.foreach('db/cities.csv') do |row|
  city = {name: "#{row[0]}, #{row[2]}",
          difference: row[1].scan(/\+?-?\d+:\d+/).first.to_i
         }
  cities.push(city)
end
cities.sort_by! { |city| city[:difference] }

timezones = Timezone.all.to_a
timezones.sort_by! { |timezone| timezone.difference }

timezones.each do |timezone|
  cities.each do |city|
    timezone.cities.push(city[:name]) if timezone.difference == city[:difference]
  end
  timezone.save
end

# time zones http://www.timeanddate.com/library/abbreviations/timezones/

# city time zone http://www.citytimezones.info/pending_requests.htm


