const fs = require('fs');
const path = require('path');

const srcNewDir = path.join(__dirname, 'srcnew');
const appModulePath = path.join(__dirname, 'src', 'app', 'app.module.ts');

// Scan srcnew directory for module files
fs.readdir(srcNewDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const imports = [];
  const modules = new Set(); // Using a set to ensure uniqueness

  files.forEach(file => {
    const moduleName = path.basename(file, '.module.ts');
    const modulePath = `./srcnew/${moduleName.toLowerCase()}/${moduleName.toLowerCase()}.module`;
    const moduleImport = `import { ${moduleName}Module } from '${modulePath}';`;
    
    // Check if the module already exists in the imports
    if (!imports.includes(moduleImport)) {
      imports.push(moduleImport);
    }

    modules.add(`${moduleName}Module`); // Add module name to the set
  });

  // Construct the new imports string
  const newImports = imports.join('\n');
  const newModules = Array.from(modules).join(', '); // Convert set to array and then join

  // Read app.module.ts file
  fs.readFile(appModulePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading app.module.ts:', err);
      return;
    }

    // Construct the import statement for the first module
    const firstModuleImport = imports.length > 0 ? imports[0] : '';

    // Replace existing imports array with newImports if it exists
    const importsRegex = /(imports: \[[\s\S]*?)(\s*\])/m;
    let newData = data.replace(importsRegex, (match, importsArray, closingBracket) => {
      return importsArray + `\n  ${newModules}\n` + closingBracket;
    });

    // If imports array doesn't exist, insert it after the first import statement
    if (!importsRegex.test(newData)) {
      newData = newData.replace(/import {.*?};\n\n/, (match) => {
        return firstModuleImport + '\n\n' + `imports: [${newModules}],\n\n`;
      });
    }

    // Write modified content back to app.module.ts
    fs.writeFile(appModulePath, newData, 'utf8', err => {
      if (err) {
        console.error('Error writing to app.module.ts:', err);
        return;
      }
      console.log('App module updated successfully.');
    });
  });
});
