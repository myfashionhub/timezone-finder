class TimezonesController < ApplicationController

  def index
    timezones = Timezone.all
    render json: timezones.to_a.to_json
  end

end
