class UsersController < ApplicationController

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
