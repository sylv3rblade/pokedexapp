class Api::PokemonsController < ApplicationController
  def index
    render json: Pokeapi::Pokemon.list
  end

  def show
    render json: Pokeapi::Pokemon.show(params[:id])
  end
end