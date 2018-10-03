def largest *numbers
  max = numbers[0]
  numbers.each do |num|
    max = num if num > max
  end
  max
end

puts largest 6, 7, 4, 32 ,23, 23, 23,23, 45,2341
puts largest 6, 7, 4, 32 ,23, 23, 23,23, 45,2
puts largest 6
puts largest