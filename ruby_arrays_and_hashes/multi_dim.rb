array = [[1,7,3], [4,4,6], [7,2,9]]

array.each do |nested_array|
  nested_array.each do |n|
    puts n * n
  end
end

array.flatten.each do |n|
  puts n * n
end