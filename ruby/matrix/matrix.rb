=begin
Write your code for the 'Matrix' exercise in this file. Make the tests in
`matrix_test.rb` pass.

To get started with TDD, see the `README.md` file in your
`ruby/matrix` directory.
=end

class Matrix
  attr_reader :rows,
              :columns

  def initialize(text)
    @rows = text.lines.map { |line| line.split(' ').map(&:to_i) }
    puts "rows #{@rows}"
    @columns = rows.transpose
    puts "column #{@columns}"

  end

  def row(offset)
    rows[offset - 1]
  end

  def column(offset)
    columns[offset - 1]
  end
end

matrix = Matrix.new("1 2\n3 4")
