array = []

for num in 1..100
  if num % 15 == 0
    array << 'FIZZBUZZ'
  elsif num % 5 == 0
    array << 'BUZZ'
  elsif num % 3 == 0
    array << 'FIZZ'
  else
    array << num
  end
end

print array