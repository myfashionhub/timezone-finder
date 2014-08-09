class TimezonesController < ApplicationController

  def index
    timezones = Timezone.all
    render json: timezones.to_a.to_json
  end

  def search
    timezone = Timezone.find_by(name: params[:name])
    render json: timezone.cities.to_json
  end
end
