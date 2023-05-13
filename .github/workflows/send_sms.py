from twilio.rest import Client
import os

account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']
phone_number = os.environ['PHONE_NUMBER']

def send_sms(to):
    client = Client(account_sid, auth_token)
    message = client.messages.create(
        body="Pipeline Notification: Repository - Branch - Commit",
        from_=phone_number,
        to=to
    )

if __name__ == "__main__":
    import sys
    phone_number = sys.argv[1]
    send_sms(phone_number)
