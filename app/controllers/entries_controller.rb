class EntriesController < ApplicationController

  def create
    timezone = Timezone.find_by(name: params[:timezone])
    entry = Entry.create(city: params[:city],
                 user_id: current_user.id,
                 timezone_id: timezone.id)
    display = { city: entry.city,
                timezone: timezone.name,
                difference: timezone.difference,
                entry_id: entry.id }
    render json: display.to_json
  end

  def destroy
    Entry.destroy(params[:id])
    render json: { msg: 'success' }.to_json
  end
end
