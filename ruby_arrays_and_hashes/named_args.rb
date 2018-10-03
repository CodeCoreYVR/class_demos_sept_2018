def my_method(hash)
  hash.first[1]
end

my_method({ a: 1, b: 2 })

# named arguments syntax (Sepcial type of arguemtns that we can pass out-of-order)
def my_method(first: nil, second: nil)
  puts "First is #{first} and second is #{second}"
end

# arguments don't have to be passed in a specific order
my_method first: 'Hi', second: 'hello'
my_method second: 'hello', first: 'Hi'