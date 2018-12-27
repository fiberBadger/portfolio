import random

def guessApp():
    randomNumber = random.randint(0,101)
    print('I am thinking of a number between 0 and 100. Guess what it is?')

    for guesses in range(1,10):
        print('Take a guess!')
        userGuess=0
        try:
            userGuess = int(input())
        except ValueError:
            print('Not a valid guess!')

        if userGuess > randomNumber:
            print('Guess is greater than the number')
        elif userGuess < randomNumber:
            print('Guess is less than the number')
        else:
            break

    if userGuess == randomNumber:
        print('You got the number!')
    else:
        print(f'Nope! Try again! The number was {randomNumber}')


guessApp();