students = []

loop do
  puts "Please Give students Information"
  print 'student name (exit to finish): '
  name = gets.chomp
  break if name.downcase == 'exit'
  print 'phone number: '
  number = gets.chomp
  students << { name: name, phone_number: number }
end

students.each_with_index do |student, index|
  puts "#{index + 1} - #{student[:name]} | #{student[:phone_number]}"
end