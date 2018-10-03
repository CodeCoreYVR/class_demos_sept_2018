words = [ 
          ['john', 'steve', 'jen'], 
          ['ate', 'sat on', 'bought'], 
          ['an apple', 'the couch', 'a toothbrush']
        ]

words.each do |word|
  print "#{word[rand(3)]} "
end
puts " "

puts "#{words[0].shuffle.first} #{words[1].shuffle.first} #{words[2].shuffle.first} "

puts "#{words[0][rand(words[0].length)]} #{words[1][rand(words[1].length)]} #{words[2][rand(words[2].length)]} "

puts "#{words[0].sample} #{words[1].sample} #{words[2].sample} "
