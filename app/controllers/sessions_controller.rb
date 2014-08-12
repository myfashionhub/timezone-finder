class SessionsController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json { render json: { id: current_user.id }.to_json }
    end
  end

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
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
    msg = { msg: 'success' }
    render json: msg.to_json
  end

end
