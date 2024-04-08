# frozen_string_literal: true
original_array = [1,2,3,4,5]
new_array = original_array.map { |element| element * 2 }

puts "Original array:", original_array
puts "New array:",  new_array
