#!/usr/bin/env node

new (require('./DazCli'))(process.stdin, process.stdout, console).run(process.argv)