const fs = require('fs');
const path = require('path');
const pkg = require('../package.json');

// Define the path to your README file
const readmePath = path.join(__dirname, '../README.md'); // Update with the correct path

// Define the pattern to find the existing CDN link
const cdnPattern = /https:\/\/cdn\.jsdelivr\.net\/gh\/([^/]+)\/([^/]+)\/dist\/([^/]+\.js)/g; // Update with your CDN link pattern

// Define the new CDN link (you can retrieve this from your build process)
const newCdnLink = `https://cdn.jsdelivr.net/gh/bloomscorp/bloomsight-js/dist/bloomsight@${pkg.version}.js`; // Update with your new CDN link

// Read the README file
fs.readFile(readmePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading README file:', err);
        process.exit(1);
    }

    // Replace the existing CDN link with the new CDN link
    const updatedData = data.replace(cdnPattern, newCdnLink);

    // Write the updated content back to the README file
    fs.writeFile(readmePath, updatedData, (writeErr) => {
        if (writeErr) {
            console.error('Error writing to README file:', writeErr);
            process.exit(1);
        }

        console.log('CDN link updated in README file:', newCdnLink);
    });
});
