module Blackjack
  def self.parse_card(card)
    PARSE.index(card) || 10
  end

  def self.card_range(card1, card2)
    value = parse_card(card1) + parse_card(card2)
    case value
    when (4..11) then 'low'
    when (12..16) then 'mid'
    when (17..20) then 'high'
    when 21 then 'blackjack'
    end
  end

  def self.first_turn(card1, card2, dealer_card)
    dealer_parse_card = parse_card(dealer_card)
    sum_two_cards = parse_card(card1) + parse_card(card2)

    if card1 == card2 && card1 == 'ace'
      'P'
    elsif card1 != card2 && card1 != dealer_card && card1 == 'ace'
      'W'
    elsif sum_two_cards <= 16 && dealer_parse_card > 6 || dealer_parse_card == 5 || dealer_parse_card == 2
      'H'
    elsif sum_two_cards >= 16 || parse_card(dealer_card) <= 6
      'S'
    end
  end

  PARSE = %w[joker one two three four five six seven eight nine ten ace].freeze
end
