# frozen_string_literal: true
word = 'banana'
frequency_character = Hash.new(0)
word.each_char {|char| frequency_character[char] += 1}
frequency_character.each { |char, count| puts "the #{char} exists #{count} times" }
