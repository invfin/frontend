build:
	docker compose build

up:
	docker compose up ${ar}

logs:
	docker compose logs -f

test:
	docker compose run --rm vue yarn test:unit

test-e2e:
	docker compose run --rm vue yarn test:e2e

lint:
	docker compose run --rm vue yarn lint

install:
	docker compose run --rm vue yarn install ${ar}