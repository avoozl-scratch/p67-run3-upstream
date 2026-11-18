import test from "node:test";
import assert from "node:assert/strict";
import { one } from "../src/one.mjs";
test("one", () => assert.equal(one(), 1));
