class ProductsController < ApplicationController
  def index
    @products = Product.all.newest
  end

  def show
    @product = Product.find(params[:id])
  end

  def new
    @product = Product.new
  end

  def create
    @products = Product.all
    @product = Product.new product_params
    if @product.save
      respond_to do |format|
        format.html
        format.js
        format.json do
          render json: {id_product: @product.id}
        end
      end
    end
  end

  def edit
    @product = Product.find_by id: params[:id]
  end

  def update
    @products = Product.all
    @product = Product.find_by id: params[:id]
    @product.update_attributes product_params
  end

  def delete
    @product = Product.find params[:product_id]
  end

  def destroy
    @products = Product.all
    @product = Product.find_by id: params[:id]
    @product.destroy
  end

  private
  def product_params
    params.require(:product).permit :name, :price
  end
end
