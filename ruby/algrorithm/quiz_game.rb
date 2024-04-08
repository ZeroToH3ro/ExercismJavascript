# frozen_string_literal: true
class Question
  def initialize(prompt, answer)
    @prompt = prompt
    @answer = answer
  end

  def display
    puts @prompt
  end

  def check_answer(answer)
    @answer.include?(answer)
  end
end

class QuizGame
  def initialize(questions)
    @questions = questions
    @score = 0
  end

  def start
    @questions.each do |question|
      question.display
      answer = gets.chomp
      @score += 1 if question.check_answer(answer)
    end
  end

  def finish 
    puts "your score #{@score} out of #{@questions.length}"
  end
end

questions = [
  Question.new("How many sides does a square have?\n(a) 2\n(b) 4\n(c) 6", ['b']),
  Question.new("When it's raining, what do you need?\n(a) A parachute\n(b) A teapot\n(c) An umbrella", ['c']),
  Question.new("What sea creature has 8 legs?\n(a) An octopus\n(b) A dolphin\n(c) A crocodile", ['a'])
]

game = QuizGame.new(questions)
game.start
game.finish
