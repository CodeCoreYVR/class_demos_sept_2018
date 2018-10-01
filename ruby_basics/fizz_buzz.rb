for num in 1..100
  if num % 15 == 0 # num % 5 == 0 && num % 3 == 0
    puts "FIZZBUZZ"
  elsif num % 5 == 0 
    puts "BUZZ"
  elsif num % 3 == 0
    puts "FIZZ"
  else
    puts num
  end
end

# if x > 10
#   puts 'hi'
# end

# if x > 10
#   puts 'hi'
# else
#   puts 'hello'
# end