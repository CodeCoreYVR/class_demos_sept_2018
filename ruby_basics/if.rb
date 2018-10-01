print 'Give me a number '

number = gets.to_i

# if and conditionals in Ruby are expressions meaning they return a value
# almost everything in Ruby is an expression
if number > 1000
  puts 'The number is very large'
elsif number > 500
  puts 'the The number is large'
elsif number > 100
  puts 'The number is medium'
else
  puts 'The number is small'
end

# Inline conditionals
x = 10
y = 11
y = 5 if x > 7
y = 5 unless x <= 7

# in JS:
# if(x > 7) {
#   y = 5;
# }