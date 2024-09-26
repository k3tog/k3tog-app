const path = require('path');
const execSync = require('child_process').execSync;

const swaggerApiDocs = 'https://k3tog-api.onrender.com/api/v1/openapi.json';
// eslint-disable-next-line no-undef
const targetDir = path.resolve(__dirname, '');
const filename = 'k3tog-api-schema.ts';
// eslint-disable-next-line no-undef
const templatesPath = path.resolve(__dirname, './generate-ts-templates');

execSync(
  `npx swagger-typescript-api -p ${swaggerApiDocs} -o ${targetDir} -n ${filename} --templates ${templatesPath}`,
  { stdio: 'inherit' },
);
