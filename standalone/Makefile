.DELETE_ON_ERROR:
.INTERMEDIATE: react-forms.prod.js
REPO = $(shell git config --local --get remote.origin.url)

TARGETS = react-forms.js react-forms.min.js

PATH := ./node_modules/.bin:../node_modules/.bin:$(PATH)

build: $(TARGETS)

react-forms.js:
	$(call browserify,development)

react-forms.prod.js:
	$(call browserify,production)

react-forms.min.js: react-forms.prod.js
	@cat $< | uglifyjs -cm > $@

clean:
	@rm -f $(TARGETS)
	@rm -f react-forms-build-*.tgz
	@rm -rf ./themes
	@rm -rf ./package

themes README.md LICENSE:
	cp -r ../$@ ./$@

# called by npm
prepublish: clean build themes README.md LICENSE

publish: publish-repo

publish-repo:
	BUILD_REPO=$(REPO:%.git=%-build.git);\
	npm pack;\
	git clone $$BUILD_REPO package;\
	tar xzf react-forms-build-*.tgz;\
	rm -rf ./package/*;\
	tar xzf react-forms-build-*.tgz;\
	cd package;\
	git add --all .;\
	git commit -m "Build.";\
	git push origin master;

define browserify
	@NODE_ENV=$(1) browserify -t [ reactify --es6] . \
		| sed -E 's/function\(require/function(__browserify__/g' \
		| sed -E 's/require\(/__browserify__(/g' \
		>> $@
endef
