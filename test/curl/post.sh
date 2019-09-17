curl \
  --header "Content-type: application/json" \
  --request POST \
  --data '{"email": "brandon@gmail.com", "password": "Brandon666"}' \
  http://localhost:8080/login

curl \
  --header "Content-type: application/json" \
  --request POST \
  --data '{"email": "brandon@gmail.com", "password": "brandon666"}' \
  http://localhost:8080/login

curl \
  --header "Content-type: application/json" \
  --request POST \
  --data '{"email": "brandon@gmail.com", "password": "Br4ndon"}' \
  http://localhost:8080/login

curl \
  --header "Content-type: application/json" \
  --request POST \
  --data '{"email": "brandon@gmail.com", "password": "BrandonOHYA"}' \
  http://localhost:8080/login