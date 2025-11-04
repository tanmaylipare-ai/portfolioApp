const fs = require('fs');

const targetPath = './src/environments/environment.prod.ts';

const envConfigFile = `
export const environment = {
  production: true,
  emailServiceID: '${process.env.EMAIL_SERVICE_ID}',
  emailTemplateID: '${process.env.EMAIL_TEMPLATE_ID}',
  emailPublicKey: '${process.env.EMAIL_PUBLIC_KEY}'
};
`;

fs.writeFileSync(targetPath, envConfigFile);
console.log(`✅ Environment file created at ${targetPath}`);