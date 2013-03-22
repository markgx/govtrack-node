SHELL := /bin/bash

test:
	./node_modules/.bin/mocha ./test --reporter list

.PHONY: test
