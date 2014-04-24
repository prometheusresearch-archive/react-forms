BIN   = ./node_modules/.bin
PATH := $(BIN):$(PATH)
TESTS = $(shell find ./lib -path '**/tests/*.js')
MAKE_DOCS = $(MAKE) --no-print-directory -C docs

docs-preview docs-publish::
	@$(MAKE_DOCS) $(@:docs-%=%)

lint:
	@eslint-jsx lib/

clean:
	@rm -rf ./node_modules/

test: test-phantomjs

ci:
	@NODE_PATH=$(NODE_PATH) mochify --watch -R dot $(TESTS)

test-phantomjs:
	@NODE_PATH=$(NODE_PATH) mochify -R spec $(TESTS)
