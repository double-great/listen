const test = require("tape");
const fs = require("fs");
const { readPost, buildList } = require("./utils");

buildList("test").forEach((post) => {
  const file = readPost(post),
    metadata = file.metadata;

  test(post, (t) => {
    // has title
    t.ok(metadata.title, "has `title`");
    t.end();
  });
});

buildList("_posts").forEach((post) => {
  const file = readPost(post),
    metadata = file.metadata;

  test(post, (t) => {
    t.equal(
      typeof metadata,
      "object",
      `frontmatter must be formatted correctly: ${post}`
    );
    // has test case file
    const testPath = `test/${post.replace("_posts/", "").substring(11)}`;
    t.ok(fs.existsSync(testPath), `has test case file at ${testPath}`);
    // has title
    t.ok(metadata.title, "has `title`");
    // has cases
    t.ok(metadata.cases, "has `cases`");
    // validate cases
    if (metadata.cases) {
      t.true(Array.isArray(metadata.cases), "cases is an array");
      metadata.cases.map((c) => {
        // metadata
        ["title", "example"].map((field) => {
          t.ok(c[field], `has ${field}`);
        });
        // files
        ["macos", "jaws", "nvda", "ios"].map((field) => {
          const path = `audio/${c[field]}`;
          // has field
          t.ok(c[field], `has ${field}`);
          if (c[field]) t.ok(fs.existsSync(path), `file ${path} exists`);
        });
      });
    }
    t.end();
  });
});
