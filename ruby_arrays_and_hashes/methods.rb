# by defauly, Ruby methods return the last executed line in them or nil if it's 
# empty (empty methods definition)
# it's recommended that you don't put the keyword `return` unless you have to (exiting early)
def multiply a, b
  a * b
end

puts multiply(1, 4)
puts multiply 1, 4 # brackets are optional unless we're chaining method calls

def multiply(a, b)
  a * b
end

puts multiply(1, 4)
puts multiply 1, 4 # brackets are optional unless we're chaining method calls

# this makes b optional so if it's not passed it will default to 1
def multiply(a, b = 1)
  a * b
end

puts multiply 1, 4
puts multiply 5

# Greeter
def greet(name = 'beautiful')
  "Hello, #{name}!"
end

puts greet 'john'

def by_five?(number = 0)
  number % 5 == 0
end
