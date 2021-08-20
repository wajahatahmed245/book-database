class BookShelvesController < ApplicationController
  before_action :set_book_shelf, only: %i[ show update destroy ]

  # GET /book_shelves
  # GET /book_shelves.json
  def index
    @book_shelves = BookShelf.all
  end

  # GET /book_shelves/1
  # GET /book_shelves/1.json
  def show
  end

  # POST /book_shelves
  # POST /book_shelves.json
  def create
    @book_shelf = BookShelf.new(book_shelf_params)

    if @book_shelf.save
      render :show, status: :created, location: @book_shelf
    else
      render json: @book_shelf.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /book_shelves/1
  # PATCH/PUT /book_shelves/1.json
  def update
    if @book_shelf.update(book_shelf_params)
      render :show, status: :ok, location: @book_shelf
    else
      render json: @book_shelf.errors, status: :unprocessable_entity
    end
  end

  # DELETE /book_shelves/1
  # DELETE /book_shelves/1.json
  def destroy
    @book_shelf.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book_shelf
      @book_shelf = BookShelf.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def book_shelf_params
      params.require(:book_shelf).permit(:name)
    end
end
