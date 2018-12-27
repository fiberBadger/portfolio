seq = 'attcgaatcggtaagtccaatttagggacca';

def complimentseq(strand):
    compliment = [];
    for letter in strand:
        if letter == 'a':
            compliment.append('t');
        elif letter == 't':
            compliment.append('a');
        elif letter == 'c':
            compliment.append('g');
        else:
            compliment.append('c');
    return print(compliment);


complimentseq(seq);