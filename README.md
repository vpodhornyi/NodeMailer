# NodeMailer

curl --location 'http://localhost:8081/send' \
--header 'Content-Type: application/json' \
--data-raw '{
"to": [
"one@gmail.net",
"two@gmail.com"
],
"from": "No reply email <noreply@fake.com>",
"subject": "Test message",
"html": "<h1>Hello title</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, sint.</p>"
}'
