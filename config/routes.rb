Rails.application.routes.draw do
  namespace :api do
    #API ROUTES SHOULD GO HERE
    resources :products
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
