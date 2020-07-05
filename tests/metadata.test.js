const test = require("tape");
const fs = require("fs");
const jsyaml = require("js-yaml");

const readPost = (filename) => {
  const buffer = fs.readFileSync(filename),
    file = buffer.toString("utf8");

  try {
    const parts = file.split(/---\s*[\n^]/),
      frontmatter = parts[1];

    return {
      name: filename,
      file: file,
      metadata: jsyaml.load(frontmatter),
      content: parts[2],
    };
  } catch (err) {
    console.log(
      `\nCould not read metadata, check the syntax of the metadata and front matter in ${filename}`
    );
  }
};

const posts = fs.readdirSync(`_posts/`).reduce((arr, file) => {
  if (file[0] !== ".") arr.push(`_posts/${file}`);
  return arr;
}, []);

const testCases = fs.readdirSync(`test/`).reduce((arr, file) => {
  if (file[0] !== ".") arr.push(`test/${file}`);
  return arr;
}, []);

testCases.forEach((post) => {
  const file = readPost(post),
    metadata = file.metadata;

  test(post, (t) => {
    // has title
    t.ok(metadata.title, "has `title`");

    t.end();
  });
});

posts.forEach((post) => {
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
          t.ok(fs.existsSync(path), `file ${path} exists`);
          t.ok(c[field], `has ${field}`);
        });
      });
    }
    t.end();
  });
});
