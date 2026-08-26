const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('app');
let modifiedCount = 0;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  
  if (!content.includes('export const metadata: Metadata = {') && !content.includes('export const metadata = {')) {
    continue;
  }
  if (file.includes('layout.tsx') && file.endsWith(path.join('app', 'layout.tsx'))) {
    continue; // already handled
  }
  
  const titleMatch = content.match(/title:\s*["'](.*?)["']/);
  const descMatch = content.match(/description:\s*["'](.*?)["']/);
  
  const title = titleMatch ? titleMatch[1] : 'Al-Malakiyah';
  const description = descMatch ? descMatch[1] : '';
  
  const regex = /export const metadata:\s*Metadata\s*=\s*{[\s\S]*?};/m;
  const newContent = content.replace(regex, `import { constructMetadata } from "@/utils/metadata";\n\nexport async function generateMetadata(): Promise<Metadata> {\n  return constructMetadata({\n    title: "${title}",\n    description: "${description}",\n    path: "/${file.replace(/\\\\/g, '/').replace('app/', '').replace('/page.tsx', '').replace('page.tsx', '').replace(/\(.*?\)\//g, '')}",\n  });\n}`);
  
  fs.writeFileSync(file, newContent, 'utf8');
  modifiedCount++;
  console.log('Modified:', file);
}
console.log('Total files modified:', modifiedCount);
