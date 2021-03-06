class PostsController < ApplicationController

    def index
        @posts = Post.all.order(created_at: "DESC")
        render json: @posts
    end

    def create
        @post = Post.new(post_params)
        @post.save
        redirect_to action: 'index'
    end

    def destroy
        @post = Post.find(params[:id])
        @post.destroy
        redirect_to action: 'index'
    end
      
    private

        def post_params
            params.require(:post).permit(:title, :content, :uid)
        end
end
