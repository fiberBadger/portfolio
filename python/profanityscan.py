import urllib.request


def read_file(filename):
    with open(filename,'r') as file:
        check_profanity(file.read())
def check_profanity(text):
    connection = urllib.request.urlopen('http://www.wdylike.appspot.com/?q='+text)
    print(connection.read())
    connection.close()

filepath = 'C:\\Users\\Alex\\Desktop\\profanity.txt'
read_file(filepath)