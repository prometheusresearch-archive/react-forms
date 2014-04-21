PATH := ../node_modules/.bin:./node_modules/.bin:$(PATH)

start:
	@node ./server.js

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
	@node ./build-less.js > $@

render-pages::
	@node ./build/bundle.deopt.js --pages | while read p; do\
		mkdir -p ./build$$p;\
		echo '<!doctype html><html><head>' > ./build$${p}index.html;\
		echo '<meta charset="utf8">' >> ./build$${p}index.html;\
		echo '<link rel="stylesheet" href="/bundle.css">' >>\
			./build$${p}index.html;\
		echo '</head><body>' >> ./build$${p}index.html;\
		node ./build/bundle.deopt.js $$p >> ./build$${p}index.html; \
		echo '<script src="/bundle.js"></script></body></html>' >>\
			./build$${p}index.html;\
	done;

