const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, 'src/environments/environment.prod.ts');
const dir = path.dirname(targetPath);

// Ensure directory exists
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

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
