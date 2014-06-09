BIN   = ./node_modules/.bin
PATH := $(BIN):$(PATH)
TESTS = $(shell find ./lib -path '**/__tests__/*.js')
INTEGRATION_TESTS = $(shell find ./tests -name '*.js')
MAKE_DOCS = $(MAKE) --no-print-directory -C docs

lint:
	@eslint-jsx lib/

clean:
	@rm -rf ./node_modules/

test: unit-test integration-test

unit-test: test-phantomjs

integration-ci:
	@NODE_PATH=$(NODE_PATH) mochify --watch -R dot $(INTEGRATION_TESTS)

integration-test:
	@NODE_PATH=$(NODE_PATH) mochify -R dot $(INTEGRATION_TESTS)

unit-ci:
	@NODE_PATH=$(NODE_PATH) mochify --watch -R dot $(TESTS)

test-phantomjs:
	@NODE_PATH=$(NODE_PATH) mochify -R dot $(TESTS)
