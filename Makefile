.PHONY: install-react install-vue build-theme setup-env start stop build-dockers lint-docker setup



install-react:
	cd react-ui; yarn install

install-vue:
	cd vue-ui; yarn install

build-theme:
	cd keycloack-theme; mvn clean install

setup-env:
	echo "Downloading keycloak theme"
	cp keycloack-theme/target/*.jar docker-compose/keycloack/deployments/
	sudo rm -rf docker-compose/postgres/
	mkdir -p docker-compose/postgres
	chmod o+w docker-compose/postgres/
	cd docker-compose; docker-compose -f setup-docker-compose.yml  up -d

start:
	cd docker-compose; docker-compose up -d

stop:
	cd docker-compose; docker-compose stop

build-dockers: lint-docker
	cd vue-ui; docker build -t mcabral/sso-example-vue-ui:latest .
	cd react-ui; docker build -t mcabral/sso-example-react-ui:latest .

lint-docker:
	docker run --rm -i hadolint/hadolint < vue-ui/Dockerfile
	docker run --rm -i hadolint/hadolint < react-ui/Dockerfile


setup: build-dockers build-theme setup-env