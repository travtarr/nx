#!/usr/bin/env bash

if [ "$1" = "fast" ]; then
  ./scripts/build_for_test.sh
fi

if [ "$1" != "fast" ]; then
  ./scripts/build.sh
fi

rm -rf node_modules/@nrwl
rm -rf node_modules/angular-vscode

cp -r build/packages node_modules/@nrwl
mv node_modules/@nrwl/angular-vscode node_modules/angular-vscode