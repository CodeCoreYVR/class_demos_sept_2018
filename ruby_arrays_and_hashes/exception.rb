begin
  10 / 0
rescue => e # e is the object with error (exception) info
  puts 'Can\'t divide by zero'
end
puts 'Hello'