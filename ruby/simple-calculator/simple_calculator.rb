# frozen_string_literal: true

class SimpleCalculator
  ALLOWED_OPERATIONS = %w[+ / *].freeze

  class UnsupportedOperation < StandardError
  end

  def self.calculate(first_operand, second_operand, operation)
    case operation
    when '+'
      "#{first_operand} + #{second_operand} = #{first_operand + second_operand}"
    when '*'
      "#{first_operand} * #{second_operand} = #{first_operand * second_operand}"
    when '/'
      raise ZeroDivisionError if second_operand.zero?

      "#{first_operand} / #{second_operand} = #{first_operand / second_operand}"
    else
      raise UnsupportedOperation
    end
  rescue ZeroDivisionError
    'Division by zero is not allowed.'
  rescue UnsupportedOperation
    raise UnsupportedOperation
  rescue StandardError
    raise ArgumentError
  end
end
