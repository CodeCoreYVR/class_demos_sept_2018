prov_cities = { 'BC' => ['Vancouver', 'Richmond'],  'AB' => ['Edmonton', 'Calgary'] }

prov_cities.each do |provice, cities|
  puts "#{provice}: #{cities.join(', ')}"
end
