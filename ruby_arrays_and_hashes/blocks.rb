my_array = [1,2,3]

my_array.each do |el|
  puts el
end

# every method in Ruby accepts a block
def multiply(a, b)
  a * b
end

multiply 4, 1
multiply 4, 1 do 
  puts "hello"
end
# in the call above 👆 blocks does nothing

def multiply(a, b)
  yield if block_given?
  a * b
end

multiply 4, 1 do 
  puts "hello"
end