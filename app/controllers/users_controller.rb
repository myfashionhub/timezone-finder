class UsersController ApplicationController

  def create
    user = User.create(email: params[:email], password: params[:password])
    if user.save!
      msg = { msg: 'Success' }
    else
      msg = { msg: 'Failure' }
    end
    render json: msg.to_json
  end

end
