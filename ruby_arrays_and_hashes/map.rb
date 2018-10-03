my_array = [1, 5, 7]

new_array = my_array.map do |x|
              x + 1
            end 

print new_array # [2, 6, 8]

new_array = my_array.map do |x|
              puts x + 1
            end 

print new_array # [nil, nil, nil]

new_array = my_array.map do |x|
              p x + 1
            end 

print new_array # [2, 6, 8]