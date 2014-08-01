class SessionsController < ApplicationController
  def index
  end

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = @user.id
      msg = { msg: 'success' }
    elsif user == nil
      msg = { msg: 'User does not exist' }

    else
      msg = { msg: 'Log in failed' }
    end
      render json: msg.to_json
  end

  def destroy
    session[:user_id] = nil
  end

end
