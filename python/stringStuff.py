message = 'This is a very long message'
greeting = 'Hello'

print(message);
print('This is the same message missing every other word!');
print(message[0:5]  + message[8:9] + ' ' + message[15:19]);
print('The length of this string is: ' + str(len(message)) + 'chars long');
print('This is the message in all lower case ' + message.lower());
print('This is the message in all upper case ' + message.upper());
print('This message has: ' + str(message.count('s')) + ' S\'es');
print('The word "very" starts at' + str(message.find('very')));
print('The word long is replaced' + message.replace('Long', 'Short'));
greeting += ' World'
print('This string is contatianted: ' + greeting);
print('This is a formated string:' + '{}, {} !'.format('Hello', 'World'));
print('This is a "F" string' + f'{greeting}, {message}');
