words = [ 
          ['john', 'steve', 'jen'], 
          ['ate', 'sat on', 'bought'], 
          ['an apple', 'the couch', 'a toothbrush']
        ]

sentence = words.map do |word_type|
             word_type.sample
           end

puts sentence.join(' ')

## ADVANCED TECHNIQUES
puts (words.map do |word_type|
        word_type.sample
      end.join(' '))

puts words.map {|word_type| word_type.sample }.join(' ')

puts words.map(&:sample).join(' ')