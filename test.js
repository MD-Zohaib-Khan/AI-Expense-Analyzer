const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('certificate.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

let passed = true;

function assert(condition, message) {
    if (!condition) {
        console.error("FAIL: " + message);
        passed = false;
    } else {
        console.log("PASS: " + message);
    }
}

assert(document.querySelector('.org-name-under-logo') !== null, "Organization name div exists");
assert(document.querySelector('.org-name-under-logo').textContent.includes("LiveTalk Software House"), "Organization name text is correct");
assert(document.querySelector('.shape-1').style !== undefined, "Shape 1 exists");

if(passed) {
    console.log("All tests passed!");
    process.exit(0);
} else {
    console.log("Some tests failed.");
    process.exit(1);
}
