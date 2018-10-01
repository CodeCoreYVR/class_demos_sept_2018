sum = 0
loop do
  print 'Give me a number or type `exit` to end: '  
  input = gets.chomp
  break if input.downcase == 'exit'
  sum += input.to_f
end

puts "The sum of all the numbers you entered is #{sum}"
