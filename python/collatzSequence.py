

def collatz(number):
    if number % 2 == 0:
         print(number // 2)
         return number // 2
    else:
         print(3 * number + 1)
         return 3 * number + 1

def app():
    inputNumber = 0
    print('Enter a number for the collatz functon!')

    try:
        inputNumber = int(input())
    except (ValueError, UnboundLocalError):
        print('invalid number')

    if not inputNumber or inputNumber < 0:
        print('Enter an absolute number!')
    else:
        while inputNumber != 1:
            inputNumber = collatz(inputNumber)


app()