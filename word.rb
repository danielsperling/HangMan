require 'spicy-proton'

words = []

gen = Spicy::Proton.new
100.times do
  words << gen.adjective
end
