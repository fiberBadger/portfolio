from twilio.rest import Client

accountSid = ''
authToken = ''
client = Client(accountSid, authToken)
message = client.messages.create(
    to='',
    from_='',
    body=''
    )

print(message.sid)
