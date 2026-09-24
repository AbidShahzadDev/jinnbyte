import { createHash } from "node:crypto";
import { readFileSync, readdirSync, renameSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const ROOT="D:/jinnbyte", TPL=join(ROOT,"templates"), IMG=join(ROOT,"public/images");
const hashOf=(b)=>createHash("sha1").update(Buffer.from(b,"base64")).digest("hex").slice(0,8);
const names=new Map();
for (const f of readdirSync(TPL).filter(n=>n.startsWith("case-"))) {
  const html=readFileSync(join(TPL,f),"utf8");
  const m=/class="csh-bg"[^>]*url\(data:image\/[a-z+.-]+;base64,([A-Za-z0-9+/=]+)\)/.exec(html);
  if(m) names.set(hashOf(m[1]), "cases/"+f.replace(/^case-|\.html$/g,"")+"-hero");
  else console.log("no hero match:", f);
}
const mp=join(IMG,"_manifest.json"), manifest=JSON.parse(readFileSync(mp,"utf8"));
let moved=0;
for(const a of manifest.assets){
  const want=names.get(a.hash); if(!want) continue;
  const ext=a.file.split(".").pop();
  const from=join(IMG,a.file.replace("/images/","")), to=join(IMG,`${want}.${ext}`);
  if(!existsSync(from)||from===to) continue;
  renameSync(from,to); a.file=`/images/${want}.${ext}`; moved++;
}
writeFileSync(mp,JSON.stringify(manifest,null,2));
console.log("renamed",moved);
