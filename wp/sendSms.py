from twilio import rest

# Find these values at https://twilio.com/user/account
account_sid = "AC21f0971993c6d163163a7abc88638ec8"
auth_token = "dc839d30f4b8e5699abfcff9d927a5d9"
client = rest.TwilioRestClient(account_sid, auth_token)

message = client.api.account.messages.create(to="+919912609688",
                                             from_="+16519642138",
                                             body="Hello there!")

print message