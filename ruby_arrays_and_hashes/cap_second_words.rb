puts 'Give me a sentence'

sentence_split = gets.split

sentence_split.each_with_index do  
  if index % 2 == 1
    sentence_split[index] = word.downcase
  else
    sentence_split[index] = word.upcase
  end
end

puts sentence_split.join(' ')