#!/usr/bin/env node
const { program } = require("commander");
const pkg = require("../package.json");
const { handleCreate } = require("../dist");
program.version(pkg.version);

program.command("create").description("创建应用").action(handleCreate);
program.parse(process.argv);
