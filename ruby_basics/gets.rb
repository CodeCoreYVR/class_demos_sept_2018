print 'What is your name? '

# gets pauses the program while waiting for an input from the user
# Ruby is a synchronous language, also called `blocking language`
# this means that Ruby has to finish waiting for one things before going on to
# the second thing
name = gets

puts 'Hello ' + name