server:
	npx nodos server

start:
	docker-compose up

test:
	docker-compose --file docker-compose.yml up --abort-on-container-exit
