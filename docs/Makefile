PATH := ../node_modules/.bin:./node_modules/.bin:$(PATH)

start:
	@./bin/react-forms-demo

publish:
	@REPO=`git config --local --get remote.origin.url`;\
	(cd ./build; git init;\
	git remote add origin $$REPO;\
	git co -b gh-pages;\
	git add .;\
	git ci -m 'Update docs';\
	git push -f origin gh-pages);

build::
	rm -rf ./build
	$(MAKE) --no-print-directory build/bundle.deopt.js
	$(MAKE) --no-print-directory render-pages
	$(MAKE) --no-print-directory build/bundle.js
	$(MAKE) --no-print-directory build/bundle.css

build/bundle.deopt.js::
	@mkdir -p $(@D)
	@browserify ./index.js > $@

build/bundle.js::
	@cat build/bundle.deopt.js | uglifyjs -cm > $@

build/bundle.css::
	@./bin/react-forms-demo-build-less > $@

render-pages::
	@node ./build/bundle.deopt.js --pages | while read p; do\
		P=./build`echo $$p | sed -e 's_^/react-forms/_/_'`index.html;\
		R=`node ./build/bundle.deopt.js $$p`;\
		mkdir -p `dirname $$P`;\
		echo '<!doctype html>' > $$P;\
		echo '<html><head>'   >> $$P;\
		echo '<meta charset="utf8">' >> $$P;\
		echo '<link rel="stylesheet" href="/react-forms/bundle.css">' >> $$P;\
		echo '</head><body>' >> $$P;\
		echo $$R >> $$P; \
		echo '<script src="/react-forms/bundle.js"></script>' >> $$P;\
	  echo '</body></html>' >> $$P;\
	done;

