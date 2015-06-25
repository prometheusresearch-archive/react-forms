BIN 	= ./node_modules/.bin
TESTS = $(shell find ./src -path '*/__tests__/*-test.js')
SRC   = $(shell find ./src -name '*.js' -not -path '*/__tests__/*')

build:
	@$(BIN)/webpack

watch:
	@$(BIN)/webpack --watch

test-validation:
	@$(BIN)/tape src/validation/__tests__/*.js

test:: test-validation

lint::
	@$(BIN)/eslint $(SRC)

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
