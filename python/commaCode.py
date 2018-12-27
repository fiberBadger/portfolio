def commaCode(value):
    items = ''
    items = items.join(', ').join(value)
    return print(items)

def app():
    x = ['alpha', 'beta', 'ceta', 'delta' ]
    commaCode(x)

app()