# The Game Rules

## Stacks

- There are 4 stacks of card: 2 ascending and 2 descending stacks
  * Ascending stack starts at 1 and goes up to 100
  * Descending stack starts at 100 and goes down to 1

## Value

- For each ascending stack, every later card must be higher than the previous one
- For each descending stack, every later card must be lower than the previous one

- You can go in the opposite direction if the value is exactly 10 higher or lower than the previous card
  * For example, on an ascending stack with a top card of 42, you can play a 32
  * For example, on a descending stack with a top card of 57, you can play a 67

## Gameplay

- You start with a hand of 8 cards. You must play at least 2 cards per turn.

# Impl

- Undo is available each 2 cards played
- Deck is shuffled
- Hand has a max size of 8 cards, draw every 2 cards played.