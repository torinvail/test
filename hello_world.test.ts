#!/usr/bin/env node
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { test } from "node:test";

test("hello_world.ts prints hello world", () => {
  const output = execFileSync(process.execPath, ["hello_world.ts"], {
    cwd: import.meta.dirname,
    encoding: "utf8",
  });

  assert.equal(output.trim(), "hello world");
});
