BIN 					= ./node_modules/.bin
TESTS 				= $(shell find ./src -path '**/__tests__/*-test.js')
SRC   				= $(shell find ./src -name '*.js' -not -path '*/__tests__/*')
NODE          = $(BIN)/babel-node $(BABEL_OPTIONS)
MOCHA_OPTIONS = --compilers js:babel/register --require ./src/__tests__/setup.js
MOCHA					= NODE_ENV=test iojs $(BIN)/mocha $(MOCHA_OPTIONS)

build:
	@$(BIN)/webpack --config webpack.build.config.js

watch:
	@$(BIN)/webpack --config webpack.build.config.js --watch

lint::
	@$(BIN)/eslint $(SRC)

test::
	@$(MOCHA) -- $(TESTS)

ci:
	@$(MOCHA) --watch -- $(TESTS)

version-major version-minor version-patch: lint test build
	@npm version $(@:version-%=%)

publish:
	git push --tags origin HEAD:master
	npm publish

clean:
	@rm -rf lib/
