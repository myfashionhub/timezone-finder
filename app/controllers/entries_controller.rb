class EntriesController < ApplicationController

  def create
    timezone = Timezone.find_by(name: params[:timezone])
    Entry.create(city: params[:city],
                 user_id: current_user.id,
                 timezone_id: timezone.id)
    render json: { msg: 'success' }.to_json
  end

  def destroy
  end
end
