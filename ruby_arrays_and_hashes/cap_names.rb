names = []

while names[-1] != 'exit'
  print 'Enter one or more names: '
  names.push gets.chomp
end

names.pop

names.each do |name|
  puts name.capitalize
end

# another approach to looping
names = []

loop do
  print 'Enter one or more names: '
  name = gets.chomp
  break if name.downcase == 'exit'
  names.push name
end