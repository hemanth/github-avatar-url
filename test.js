import test from "ava";
import githubAvatarUrl from "./index.js";

test("username avatar", async t => {
  const avatar = await githubAvatarUrl("hemanth");
  t.true(avatar.startsWith("https://avatars.githubusercontent.com/u/18315"));
});
