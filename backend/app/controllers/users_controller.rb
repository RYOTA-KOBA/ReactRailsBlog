class UsersController < ApplicationController
    def edit
        @user = User.find(params[:id])
    end

    def update
        # @user = User.find(params[:id])
        logger.debug(user_params)
        # logger.debug(@user)
        if @user.update(user_params)
            render json: { status: 'SUCCESS', message: 'Updated the user', data: @user }
          else
            render json: { status: 'SUCCESS', message: 'Not updated', data: @user.errors }
          end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email)
    end

end
