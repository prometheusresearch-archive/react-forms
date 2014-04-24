PATH := ./node_modules/.bin:$(PATH)

preview build::
	@wintersmith $@

clean:
	@rm -rf build

publish: clean build
	@REPO=`git config --local --get remote.origin.url`;\
	(cd ./build; git init;\
	git remote add origin $$REPO;\
	git co -b gh-pages;\
	git add .;\
	git ci -m 'Update docs';\
	git push -f origin gh-pages);
