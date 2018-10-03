my_array = [1, 5, 6, 7]

# do...end is called a `block` in Ruby (similar to JS anonymous functions)
my_array.each do |num|
  result = num * 2
  puts result
end

# similar JS code:
# const myArray = [1, 5, 6, 7];
# myArray.forEach( (x) => {
#     y = x * 2;
#     console.log(y);
# });