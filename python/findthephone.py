from twilio.rest import Client

accountSid = ''

authToken = ''

client=Client(accountSid, authToken)

call = client.calls.create(
    to='',
    from_= '',
    url='')

print(call.sid)

