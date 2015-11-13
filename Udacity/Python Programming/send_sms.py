from twilio.rest import TwilioRestClient
 
# Your Account Sid and Auth Token from twilio.com/user/account
account_sid = "AC0c6967dd4085011eeea6244ed0fab5eb"
auth_token  = "0ec0d2b9819dd163db20657ab9f7d601"
client = TwilioRestClient(account_sid, auth_token)
 
message = client.messages.create(body="This is you from the past.",
    to="+15154919020",    # Replace with your phone number
    from_="+15156196566") # Replace with your Twilio number
#print message.sid
