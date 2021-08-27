class SearchController < ApplicationController
  def index
    @books = Book.search(params[:q])
  end
end
