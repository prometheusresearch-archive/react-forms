BIN   = ./node_modules/.bin
PATH := $(BIN):$(PATH)
TESTS = $(shell find ./lib -path '**/__tests__/*.js')
INTEGRATION_TESTS = $(shell find ./tests -name '*.js')
MAKE_DOCS = $(MAKE) --no-print-directory -C docs

lint:
	@eslint-jsx lib/

clean:
	@rm -rf ./node_modules/

test: test-phantomjs integration-test

integration-ci:
	@NODE_PATH=$(NODE_PATH) mochify --watch -R dot $(INTEGRATION_TESTS)

integration-test:
	@NODE_PATH=$(NODE_PATH) mochify -R dot $(INTEGRATION_TESTS)

ci:
	@NODE_PATH=$(NODE_PATH) mochify --watch -R dot $(TESTS)

test-phantomjs:
	@NODE_PATH=$(NODE_PATH) mochify -R dot $(TESTS)
