.DELETE_ON_ERROR:
.INTERMEDIATE: react-forms.prod.js

TARGETS = react-forms.js react-forms.min.js

PATH := ../node_modules/.bin:$(PATH)

build: $(TARGETS)

react-forms.js:
	$(call browserify,development)

react-forms.prod.js:
	$(call browserify,production)

react-forms.min.js: react-forms.prod.js
	@cat $< | uglifyjs -cm > $@

clean:
	@rm -f $(TARGETS)

define browserify
	@NODE_ENV=$(1) browserify -t [ reactify --es6] . \
		| sed -E 's/function\(require/function(__browserify__/g' \
		| sed -E 's/require\(/__browserify__(/g' \
		>> $@
endef
