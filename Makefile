build:
	docker-compose -f docker-compose.yml build front

up:
	docker-compose -f docker-compose.yml up -d front

logs:
	docker-compose -f docker-compose.yml logs -f front

test:
	docker-compose -f docker-compose.yml run --rm front npm run test:unit

lint:
	docker-compose -f docker-compose.yml run --rm front npm run lint

install:
	docker-compose -f docker-compose.yml run --rm front npm run install