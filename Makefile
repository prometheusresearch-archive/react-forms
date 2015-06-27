BIN 	= ./node_modules/.bin
TESTS = $(shell find ./src -path '*/__tests__/*-test.js')
SRC   = $(shell find ./src -name '*.js' -not -path '*/__tests__/*')

build:
	@$(BIN)/webpack --config webpack.build.config.js

watch:
	@$(BIN)/webpack --config webpack.build.config.js --watch

test-base:
	@$(BIN)/webtest --config webpack.test.config.js

watch-test-base:
	@$(BIN)/webtest --config webpack.test.config.js --watch

test-schema:
	@$(BIN)/tape src/_schema/__tests__/*.js

test:: test-schema test-base

watch-test:: watch-test-base

lint::
	@$(BIN)/eslint src/*.js

prerelease: lint test build

release-patch: prerelease
	npm version patch

release-minor: prerelease
	npm version minor

release-major: prerelease
	npm version major

publish:
	git push --tags origin HEAD:master
	npm publish

clean:
	@rm -rf lib/
