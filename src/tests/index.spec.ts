import test from "ava";

import { hello } from "..";

test("should return world!", (t) => {
  t.deepEqual(hello(), "world!");
});
