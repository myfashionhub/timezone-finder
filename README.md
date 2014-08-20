# Timezone Finder

A one-page application using a REST API to let users enter and save time zones.

## How it works
Users can create an account with an email and password. When logged in, they can add new timezone and see the current time of each timezones that have been saved.

## Specs
  - Front end: `gem 'jquery-ui-rails'` autocomplete library.
  - Back end: Rails application with a PostgreSQL database.
  - Testing: `gem 'rspec-rails'` and `gem 'capybara'`
  - Installation: Clone the repository and run `rake db:create db:migrate`, `bundle`. `rake db:seed` will seed the database with all the time zones and cities in each of them.
