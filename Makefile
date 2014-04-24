BIN   = ./node_modules/.bin
PATH := $(BIN):$(PATH)
TESTS = $(shell find ./lib -path '**/tests/*.js')

docs-preview::
	@$(MAKE) --no-print-directory -C docs preview

docs-publish::
	@$(MAKE) --no-print-directory -C docs publish

lint:
	@eslint-jsx lib/

clean:
	@rm -rf ./node_modules/

test: test-phantomjs

ci:
	@NODE_PATH=$(NODE_PATH) mochify --watch -R dot $(TESTS)

test-phantomjs:
	@NODE_PATH=$(NODE_PATH) mochify -R spec $(TESTS)
