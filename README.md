# NodeMailer

### Request
curl --location 'http://localhost:8081/send' \
--header 'Content-Type: application/json' \
--data-raw '{
"to": [
"one@gmail.net",
"two@gmail.com"
],
"from": "No reply email <noreply@fake.com>",
"subject": "Test message",
"html": "SOME HTML TEXT"
}'

### Response success
{
"messageId": "<70535a03-6f7e-e718-6cfc-6f84467d98de@fake.com>"
}

### Response error
{
"message": "Ooops... Something went wrong! Please try later!",
"err": "Invalid login: 535-5.7.8 Username and Password not accepted. Learn more at\n535 5.7.8  https://support.google.com/mail/?p=BadCredentials ec17-20020a170906b6d100b0094f6bf5ac9asm11336574ejb.22 - gsmtp"
}
