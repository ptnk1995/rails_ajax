Product.delete_all

5.times do |n|
  name = "product-#{n+1}"
  price = rand(10..100) + rand(10..99).to_f / 100
  Product.create! name: name, price: price
end
