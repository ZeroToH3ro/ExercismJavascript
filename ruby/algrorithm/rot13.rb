# frozen_string_literal: true
def rot13(secret_message)
  secret_message.map {|e| e.tr('a-z', 'n-za-m')}
end
