const fs = require('fs');

const moduleName = process.argv[2];
const filePath = '../../../src/app/app.module.ts';
const importStatement = `import { ${moduleName}Module } from '../../../srcnew/${moduleName}/${moduleName}.module';`;

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const importPosition = data.indexOf('import {');
  const importStatementWithIndentation = '  ' + importStatement + '\n';
  const updatedDataWithImport = data.slice(0, importPosition) + importStatementWithIndentation + data.slice(importPosition);

  const importsPosition = data.indexOf('imports: [');
  const importsEndPosition = data.indexOf(']', importsPosition);
  const importsArray = data.slice(importsPosition + 'imports: ['.length, importsEndPosition).trim();
  let updatedImportsArray;

  if (importsArray === '') {
    updatedImportsArray = `imports: [${moduleName}Module]`;
  } else {
    updatedImportsArray = `imports: [${importsArray}, ${moduleName}Module]`;
  }

  const updatedData = updatedDataWithImport.replace(/imports: \[\s*\],/, updatedImportsArray);

  fs.writeFile(filePath, updatedData, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`${moduleName}Module imported into app.module.ts`);
  });
});
