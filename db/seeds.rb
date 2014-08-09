require 'csv'

CSV.foreach('db/timezones.csv') do |row|
  difference = row[3].delete('UTChours ')
  if difference == nil
    difference = 0
  elsif difference.include?(':30')
    difference = difference.to_i + 0.5
  else
    difference = difference.to_i
  end
  Timezone.create(abbreviation: row[0], name: row[1], difference: difference, cities: [])
end

cities = []
CSV.foreach('db/cities.csv') do |row|
  difference = row[1].scan(/\+?-?\d+:\d+/).first
  if difference == nil
    difference = 0
  elsif difference.include?(':30')
    difference = difference.to_i + 0.5
  else
    difference = difference.to_i
  end
  city = {name: "#{row[0]}, #{row[2]}",
          difference: difference
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


