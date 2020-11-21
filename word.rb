require 'spicy-proton'

words = []

gen = Spicy::Proton.new
25.times do
  words << gen.adjective(min: 6)
end

print words
