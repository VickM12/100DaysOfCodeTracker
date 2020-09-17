# require './cards.rb'

class Player
  attr_accessor :name, :bankroll, :hand, :total 

  def initialize 
    @name = "HAL"
    @bankroll = 100
    @hand = []
    @total = total
  end

  def name
    @name
  end

  def bankroll
    @bankroll = 100
  end

  def hand
    @hand= "HAL"
  end

  def total
    @total = 0
  end
end

class Computer 
  attr_accessor :name, :bankroll, :hand, :total

  def initialize 
    @name = name
    @bankroll = 100
    @hand = []
    @total =total
  end

  def name
    @name= "HAL"
  end

  def bankroll
    @bankroll = 100
  end

  def hand
    @hand
  end

  def total
    @total = 0
  end
end

class Card
  # attr_reader name, value, color, suit

  def initialize name, value, suit, color
    @name = name
    @value = value
    @suit = suit
    @color = color
  end
  def name
    @name 
  end
  def value
    @value
  end
  def suit
    @suit
  end
  def color
    @color
  end
end



ace_hearts= Card.new "Ace of Hearts", 1, "red", "Heart"
two_hearts= Card.new "2 of Hearts", 2, "red", "Heart"
three_hearts= Card.new "3 of Hearts", 3, "red", "Heart"
four_hearts= Card.new "4 of Hearts", 4, "red", "Heart"
five_hearts= Card.new "5 of Hearts", 5, "red", "Heart"
six_hearts= Card.new "6 of Hearts", 6, "red", "Heart"
seven_hearts= Card.new "7 of Hearts", 7, "red", "Heart"
eight_hearts= Card.new "8 of Hearts", 8, "red", "Heart"
nine_hearts= Card.new "9 of Hearts", 9, "red", "Heart"
ten_hearts= Card.new "10 of Hearts", 10, "red", "Heart"
jack_hearts= Card.new "Jack of Hearts", 10, "red", "Heart"
queen_hearts= Card.new "Queen of Hearts", 10, "red", "Heart"
king_hearts= Card.new "King of Hearts", 10, "red", "Heart"

ace_diamonds= Card.new "Ace of diamonds", 1, "red", "Diamond"
two_diamonds= Card.new "2 of diamonds", 2, "red", "Diamond"
three_diamonds= Card.new "3 of diamonds", 3, "red", "Diamond"
four_diamonds= Card.new "4 of diamonds", 4, "red", "Diamond"
five_diamonds= Card.new "5 of diamonds", 5, "red", "Diamond"
six_diamonds= Card.new "6 of diamonds", 6, "red", "Diamond"
seven_diamonds= Card.new "7 of diamonds", 7, "red", "Diamond"
eight_diamonds= Card.new "8 of diamonds", 8, "red", "Diamond"
nine_diamonds= Card.new "9 of diamonds", 9, "red", "Diamond"
ten_diamonds= Card.new "10 of diamonds", 10, "red", "Diamond"
jack_diamonds= Card.new "Jack of diamonds", 10, "red", "Diamond"
queen_diamonds= Card.new "Queen of diamonds", 10, "red", "Diamond"
king_diamonds= Card.new "King of diamonds", 10, "red", "Diamond"

ace_spades= Card.new "Ace of spades", 1, "black", "Spade"
two_spades= Card.new "2 of spades", 2, "black", "Spade"
three_spades= Card.new "3 of spades", 3, "black", "Spade"
four_spades= Card.new "4 of spades", 4, "black", "Spade"
five_spades= Card.new "5 of spades", 5, "black", "Spade"
six_spades= Card.new "6 of spades", 6, "black", "Spade"
seven_spades= Card.new "7 of spades", 7, "black", "Spade"
eight_spades= Card.new "8 of spades", 8, "black", "Spade"
nine_spades= Card.new "9 of spades", 9, "black", "Spade"
ten_spades= Card.new "10 of spades", 10, "black", "Spade"
jack_spades= Card.new "Jack of spades", 10, "black", "Spade"
queen_spades= Card.new "Queen of spades", 10, "black", "Spade"
king_spades= Card.new "King of spades", 10, "black", "Spade"

ace_clubs= Card.new "Ace of clubs", 1, "black", "club"
two_clubs= Card.new "2 of clubs", 2, "black", "club"
three_clubs= Card.new "3 of clubs", 3, "black", "club"
four_clubs= Card.new "4 of clubs", 4, "black", "club"
five_clubs= Card.new "5 of clubs", 5, "black", "club"
six_clubs= Card.new "6 of clubs", 6, "black", "club"
seven_clubs= Card.new "7 of clubs", 7, "black", "club"
eight_clubs= Card.new "8 of clubs", 8, "black", "club"
nine_clubs= Card.new "9 of clubs", 9, "black", "club"
ten_clubs= Card.new "10 of clubs", 10, "black", "club"
jack_clubs= Card.new "Jack of clubs", 10, "black", "club"
queen_clubs= Card.new "Queen of clubs", 10, "black", "club"
king_clubs= Card.new "King of clubs", 10, "black", "club"


deck = []
deck.push(
ace_hearts, 
two_hearts, 
three_hearts, 
four_hearts, 
five_hearts, 
six_hearts, 
seven_hearts, 
eight_hearts, 
nine_hearts, 
ten_hearts, 
queen_hearts, 
king_hearts, 

ace_diamonds, 
two_diamonds, 
three_diamonds, 
four_diamonds, 
five_diamonds, 
six_diamonds, 
seven_diamonds, 
eight_diamonds, 
nine_diamonds, 
ten_diamonds, 
jack_diamonds, 
queen_diamonds, 
king_diamonds, 

ace_spades, 
two_spades, 
three_spades, 
four_spades, 
five_spades, 
six_spades, 
seven_spades, 
eight_spades, 
nine_spades, 
ten_spades, 
jack_spades, 
queen_spades, 
king_spades, 

ace_clubs, 
two_clubs, 
three_clubs, 
four_clubs, 
five_clubs, 
six_clubs, 
seven_clubs, 
eight_clubs, 
nine_clubs, 
ten_clubs, 
jack_clubs, 
queen_clubs, 
king_clubs
)
p deck

player1=Player.new 
hal=Computer.new

def play_game
  until player1.bankroll <= 0 || hal.bankroll <= 0 
    #player1 is erroring out as "undefined" here 
    deck.shuffle
    player1.hand.push(deck[0, 1])
    sum= 0
    player1.total == player.hand.value.inject(:+)
    print player1.hand
    #So sudo code it is.
    #After the player is dealt, computer hand is dealt.
    #Player has the option to hit.
    #If player hits, draw one more card and print player hand/total
    #If player stands, computer draws cards until total >= 17
    #Totals are compared
    #If player wins, bankroll +=10 && computer bankroll -= 10
    #If plyaer looses, bankroll -= 10 && computer bankroll +=10 
    #Player is asked if they wish to keep playing. 
    #If yes, player.hand && computer.hand are popped twice
    #New cards drawn, and repeat until bankroll <= 0

  end
end
# play_game()


def start_new_game
# p hal

p "Please print your name"
player1.name = gets.chomp
p player1
p "welcome #{player1.name}"
p "Shall we play a game? [Y/N]"
response=gets.chomp
if response.downcase == "y"
  play_game()
end

end
start_new_game()

