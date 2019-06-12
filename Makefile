default:
	@echo
	@echo "Makefile targets:"
	@grep -E '^[a-zA-Z_-].*?: .*?## .*$$' Makefile | sed 's#\\:#:#g' | awk 'BEGIN {FS = ": .*?## "}; {printf "\033[36m  %-20s\033[0m %s\n", $$1, $$2}'
	@echo

run ?= docker-compose run --rm web
run_s ?= docker-compose run --rm --service-ports web

yarn: ## Installs packages [alias: i]
	$(run) yarn

start: ## Starts the server [alias: s]
	$(run_s) yarn develop

up: ## Starts the server in the background
	docker-compose up -d

down: ## Stops the server
	docker-compose down

bash: ## Runs a shell inside a Docker container [alias: sh]
	$(run) bash

jest: ## Jest tests
	$(run) yarn jest

jest\:watch: ## Jest tests
	$(run) yarn jest --watch

tsc\:check: ## Runs the TypeScript compiler
	$(run) yarn tsc

tsc\:watch: ## Runs the TypeScript compiler (watch mode) [alias: t]
	$(run) yarn tsc --watch

prettier\:check:
	$(run) yarn prettier:check

css_modules\:update: ## Update CSS modules [alias: c]
	$(run) yarn css_modules:update

fix: ## Fix whatever can be fixed
	$(run) yarn fix

# Aliases
i: yarn
s: start
sh: bash
ts: tsc\:watch
tj: jest\:watch

# Simular CI
ci: yarn tsc\:check jest prettier\:check
