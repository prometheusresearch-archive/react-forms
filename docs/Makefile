BIN = ./node_modules/.bin

preview build::
	@$(BIN)/wintersmith $@

install: node_modules/react-forms
	@npm install

node_modules/react-forms:
	@mkdir -p $(@D)
	@(cd node_modules && ln -s ../../ react-forms)

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
