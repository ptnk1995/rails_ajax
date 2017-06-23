Rails.application.routes.draw do
  root "products#index"
  resources :products do
    get "delete"
  end
end
