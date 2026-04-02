const fs = require('fs');
const path = require('path');

const map = {
  'main_dashboard/code.html': 'app/src/pages/MainDashboard.jsx',
  'campaign_timeline/code.html': 'app/src/pages/CampaignTimeline.jsx',
  'content_editor/code.html': 'app/src/pages/ContentEditor.jsx',
  'campus_pulse/code.html': 'app/src/pages/CampusPulse.jsx',
  'create_campaign_form/code.html': 'app/src/pages/CreateCampaignForm.jsx',
  'export_summary/code.html': 'app/src/pages/ExportSummary.jsx'
};

function convertHtmlToJsx(htmlStr, functionName) {
  // Extract main content
  let match = htmlStr.match(/<div class="p-10 max-w-6xl mx-auto">([\s\S]*?)<\/main>/i);
  let inner = match ? match[1] : htmlStr;
  
  if (!match) {
    match = htmlStr.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    inner = match ? match[1] : "";
  }
  
  // Replace class=" with className="
  inner = inner.replace(/class="/g, 'className="');
  
  // Replace comments
  inner = inner.replace(/<!--(.*?)-->/g, '{/* $1 */}');

  // Fix self-closing tags
  inner = inner.replace(/<img(.*?)>/g, (m, g1) => g1.endsWith('/') ? m : `<img${g1} />`);
  inner = inner.replace(/<input(.*?)>/g, (m, g1) => g1.endsWith('/') ? m : `<input${g1} />`);
  inner = inner.replace(/<br(.*?)>/g, (m, g1) => g1.endsWith('/') ? m : `<br${g1} />`);
  inner = inner.replace(/<hr(.*?)>/g, (m, g1) => g1.endsWith('/') ? m : `<hr${g1} />`);
  
  // Fix inline styles string
  inner = inner.replace(/style="([^"]+)"/g, (match, p1) => {
    let rules = p1.split(';').filter(i => i.trim());
    let obj = {};
    for (let r of rules) {
      let [k, ...vParts] = r.split(':');
      let v = vParts.join(':');
      if (k && v) {
        k = k.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        obj[k] = v.trim();
      }
    }
    return `style={${JSON.stringify(obj)}}`;
  });

  // Fix unescaped characters in JSX text (rare, but sometimes present)
  // E.g. inline scripts or bad formatted strings. For our HTML, it's mostly fine.

  // Simple wrap
  return `export default function ${functionName}() {\n  return (\n    <div className="p-10 max-w-6xl mx-auto">\n      ${inner}    </div>\n  );\n}\n`;
}

for (const [src, dest] of Object.entries(map)) {
  const compName = path.basename(dest, '.jsx');
  try {
      const html = fs.readFileSync(path.join(__dirname, src), 'utf-8');
      const jsx = convertHtmlToJsx(html, compName);
      fs.writeFileSync(path.join(__dirname, dest), jsx);
      console.log(`Converted ${compName}`);
  } catch(e) {
      console.error("Error converting", compName, e);
  }
}
