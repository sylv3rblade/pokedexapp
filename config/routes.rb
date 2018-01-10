Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #
  namespace :api do
    resources :pokemons, only: %w(index show)
  end
  root to: 'static#index'
end
