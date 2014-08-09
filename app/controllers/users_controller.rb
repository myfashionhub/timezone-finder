class UsersController < ApplicationController
  def show
    entries = Entry.where(user_id: current_user.id).to_a
    display = entries.map do |entry|
      timezone = Timezone.find(entry.timezone_id)
      { city: entry.city,
        timezone: timezone.name,
        difference: timezone.difference
      }
    end
    render json: display.to_json
  end

  def create
    user = User.create(user_params)
    if user.save!
      msg = { msg: 'success' }
    else
      msg = { msg: 'failure' }
    end
    render json: msg.to_json
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
