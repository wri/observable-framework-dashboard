/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/pmtiles@3.0.5/dist/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var e=Math.pow,t=(e,t,r)=>new Promise(((n,i)=>{var s=e=>{try{a(r.next(e))}catch(e){i(e)}},o=e=>{try{a(r.throw(e))}catch(e){i(e)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(s,o);a((r=r.apply(e,t)).next())})),r=Uint8Array,n=Uint16Array,i=Int32Array,s=new r([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),o=new r([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new r([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),c=function(e,t){for(var r=new n(31),s=0;s<31;++s)r[s]=t+=1<<e[s-1];var o=new i(r[30]);for(s=1;s<30;++s)for(var a=r[s];a<r[s+1];++a)o[a]=a-r[s]<<5|s;return{b:r,r:o}},l=c(s,2),u=l.b,h=l.r;u[28]=258,h[258]=28;var f,d=c(o,0).b,g=new n(32768);for(m=0;m<32768;++m)f=(61680&(f=(52428&(f=(43690&m)>>1|(21845&m)<<1))>>2|(13107&f)<<2))>>4|(3855&f)<<4,g[m]=((65280&f)>>8|(255&f)<<8)>>1;var y=function(e,t,r){for(var i=e.length,s=0,o=new n(t);s<i;++s)e[s]&&++o[e[s]-1];var a,c=new n(t);for(s=1;s<t;++s)c[s]=c[s-1]+o[s-1]<<1;if(r){a=new n(1<<t);var l=15-t;for(s=0;s<i;++s)if(e[s])for(var u=s<<4|e[s],h=t-e[s],f=c[e[s]-1]++<<h,d=f|(1<<h)-1;f<=d;++f)a[g[f]>>l]=u}else for(a=new n(i),s=0;s<i;++s)e[s]&&(a[s]=g[c[e[s]-1]++]>>15-e[s]);return a},p=new r(288);for(m=0;m<144;++m)p[m]=8;for(m=144;m<256;++m)p[m]=9;for(m=256;m<280;++m)p[m]=7;for(m=280;m<288;++m)p[m]=8;var m,w=new r(32);for(m=0;m<32;++m)w[m]=5;var v=y(p,9,1),x=y(w,5,1),b=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},U=function(e,t,r){var n=t/8|0;return(e[n]|e[n+1]<<8)>>(7&t)&r},D=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(7&t)},T=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],z=function(e,t,r){var n=new Error(t||T[e]);if(n.code=e,Error.captureStackTrace&&Error.captureStackTrace(n,z),!r)throw n;return n},E=function(e,t,n,i){var c=e.length,l=i?i.length:0;if(!c||t.f&&!t.l)return n||new r(0);var h=!n||2!=t.i,f=t.i;n||(n=new r(3*c));var g=function(e){var t=n.length;if(e>t){var i=new r(Math.max(2*t,e));i.set(n),n=i}},p=t.f||0,m=t.p||0,w=t.b||0,L=t.l,T=t.d,E=t.m,M=t.n,A=8*c;do{if(!L){p=U(e,m,1);var C=U(e,m+1,3);if(m+=3,!C){var $=e[(j=4+((m+7)/8|0))-4]|e[j-3]<<8,B=j+$;if(B>c){f&&z(0);break}h&&g(w+$),n.set(e.subarray(j,B),w),t.b=w+=$,t.p=m=8*B,t.f=p;continue}if(1==C)L=v,T=x,E=9,M=5;else if(2==C){var O=U(e,m,31)+257,Z=U(e,m+10,15)+4,H=O+U(e,m+5,31)+1;m+=14;for(var V=new r(H),P=new r(19),k=0;k<Z;++k)P[a[k]]=U(e,m+3*k,7);m+=3*Z;var K=b(P),I=(1<<K)-1,R=y(P,K,1);for(k=0;k<H;){var j,S=R[U(e,m,I)];if(m+=15&S,(j=S>>4)<16)V[k++]=j;else{var W=0,J=0;for(16==j?(J=3+U(e,m,3),m+=2,W=V[k-1]):17==j?(J=3+U(e,m,7),m+=3):18==j&&(J=11+U(e,m,127),m+=7);J--;)V[k++]=W}}var N=V.subarray(0,O),_=V.subarray(O);E=b(N),M=b(_),L=y(N,E,1),T=y(_,M,1)}else z(1);if(m>A){f&&z(0);break}}h&&g(w+131072);for(var F=(1<<E)-1,G=(1<<M)-1,q=m;;q=m){var Q=(W=L[D(e,m)&F])>>4;if((m+=15&W)>A){f&&z(0);break}if(W||z(2),Q<256)n[w++]=Q;else{if(256==Q){q=m,L=null;break}var X=Q-254;if(Q>264){var Y=s[k=Q-257];X=U(e,m,(1<<Y)-1)+u[k],m+=Y}var ee=T[D(e,m)&G],te=ee>>4;ee||z(3),m+=15&ee;_=d[te];if(te>3){Y=o[te];_+=D(e,m)&(1<<Y)-1,m+=Y}if(m>A){f&&z(0);break}h&&g(w+131072);var re=w+X;if(w<_){var ne=l-_,ie=Math.min(_,re);for(ne+w<0&&z(3);w<ie;++w)n[w]=i[ne+w]}for(;w<re;w+=4)n[w]=n[w-_],n[w+1]=n[w+1-_],n[w+2]=n[w+2-_],n[w+3]=n[w+3-_];w=re}}t.l=L,t.p=q,t.b=w,t.f=p,L&&(p=1,t.m=E,t.d=T,t.n=M)}while(!p);return w==n.length?n:function(e,t,n){(null==t||t<0)&&(t=0),(null==n||n>e.length)&&(n=e.length);var i=new r(n-t);return i.set(e.subarray(t,n)),i}(n,0,w)},M=new r(0),A=function(e){31==e[0]&&139==e[1]&&8==e[2]||z(6,"invalid gzip data");var t=e[3],r=10;4&t&&(r+=2+(e[10]|e[11]<<8));for(var n=(t>>3&1)+(t>>4&1);n>0;n-=!e[r++]);return r+(2&t)},C=function(e){var t=e.length;return(e[t-4]|e[t-3]<<8|e[t-2]<<16|e[t-1]<<24)>>>0},$=function(e,t){return(8!=(15&e[0])||e[0]>>4>7||(e[0]<<8|e[1])%31)&&z(6,"invalid zlib data"),(e[1]>>5&1)==+!t&&z(6,"invalid zlib data: "+(32&e[1]?"need":"unexpected")+" dictionary"),2+(e[1]>>3&4)};function B(e,t){return 31==e[0]&&139==e[1]&&8==e[2]?function(e,t){var n=A(e);return n+8>e.length&&z(6,"invalid gzip data"),E(e.subarray(n,-8),{i:2},t&&t.out||new r(C(e)),t&&t.dictionary)}(e,t):8!=(15&e[0])||e[0]>>4>7||(e[0]<<8|e[1])%31?function(e,t){return E(e,{i:2},t&&t.out,t&&t.dictionary)}(e,t):function(e,t){return E(e.subarray($(e,t&&t.dictionary),-4),{i:2},t&&t.out,t&&t.dictionary)}(e,t)}var O="undefined"!=typeof TextDecoder&&new TextDecoder;try{O.decode(M,{stream:!0}),1}catch(e){}var Z=(t,r)=>t*e(2,r),H=(t,r)=>Math.floor(t/e(2,r)),V=(e,t)=>Z(e.getUint16(t+1,!0),8)+e.getUint8(t),P=(e,t)=>Z(e.getUint32(t+2,!0),16)+e.getUint16(t,!0),k=(e,t,r,n,i)=>{if(e!==n.getUint8(i))return e-n.getUint8(i);const s=V(n,i+1);if(t!==s)return t-s;const o=V(n,i+4);return r!==o?r-o:0},K=(e,t,r,n)=>{const i=I(e,t,r,n);return i?{z:t,x:r,y:n,offset:i[0],length:i[1],isDir:!1}:null},I=(e,t,r,n)=>{let i=0,s=e.byteLength/17-1;for(;i<=s;){const o=s+i>>1,a=k(t,r,n,e,17*o);if(a>0)i=o+1;else{if(!(a<0))return[P(e,17*o+7),e.getUint32(17*o+13,!0)];s=o-1}}return null},R=(e,t)=>e.isDir&&!t.isDir?1:!e.isDir&&t.isDir?-1:e.z!==t.z?e.z-t.z:e.x!==t.x?e.x-t.x:e.y-t.y,j=(e,t)=>{const r=e.getUint8(17*t);return{z:127&r,x:V(e,17*t+1),y:V(e,17*t+4),offset:P(e,17*t+7),length:e.getUint32(17*t+13,!0),isDir:r>>7==1}},S=e=>{const t=[],r=new DataView(e);for(let e=0;e<r.byteLength/17;e++)t.push(j(r,e));return W(t)},W=e=>{e.sort(R);const t=new ArrayBuffer(17*e.length),r=new Uint8Array(t);for(let t=0;t<e.length;t++){const n=e[t];let i=n.z;n.isDir&&(i|=128),r[17*t]=i,r[17*t+1]=255&n.x,r[17*t+2]=n.x>>8&255,r[17*t+3]=n.x>>16&255,r[17*t+4]=255&n.y,r[17*t+5]=n.y>>8&255,r[17*t+6]=n.y>>16&255,r[17*t+7]=255&n.offset,r[17*t+8]=255&H(n.offset,8),r[17*t+9]=255&H(n.offset,16),r[17*t+10]=255&H(n.offset,24),r[17*t+11]=255&H(n.offset,32),r[17*t+12]=255&H(n.offset,48),r[17*t+13]=255&n.length,r[17*t+14]=n.length>>8&255,r[17*t+15]=n.length>>16&255,r[17*t+16]=n.length>>24&255}return t};var J={getHeader:function(e){return t(this,null,(function*(){const t=yield e.getBytes(0,512e3),r=new DataView(t.data),n=r.getUint32(4,!0),i=r.getUint16(8,!0),s=new TextDecoder("utf-8"),o=JSON.parse(s.decode(new DataView(t.data,10,n)));let a=0;"gzip"===o.compression&&(a=2);let c=0;"minzoom"in o&&(c=+o.minzoom);let l=0;"maxzoom"in o&&(l=+o.maxzoom);let u=0,h=0,f=0,d=-180,g=-85,y=180,p=85;if(o.bounds){const e=o.bounds.split(",");d=+e[0],g=+e[1],y=+e[2],p=+e[3]}if(o.center){const e=o.center.split(",");u=+e[0],h=+e[1],f=+e[2]}return{specVersion:r.getUint16(2,!0),rootDirectoryOffset:10+n,rootDirectoryLength:17*i,jsonMetadataOffset:10,jsonMetadataLength:n,leafDirectoryOffset:0,leafDirectoryLength:void 0,tileDataOffset:0,tileDataLength:void 0,numAddressedTiles:0,numTileEntries:0,numTileContents:0,clustered:!1,internalCompression:1,tileCompression:a,tileType:1,minZoom:c,maxZoom:l,minLon:d,minLat:g,maxLon:y,maxLat:p,centerZoom:f,centerLon:u,centerLat:h,etag:t.etag}}))},getZxy:function(e,r,n,i,s,o,a){return t(this,null,(function*(){let t=yield n.getArrayBuffer(r,e.rootDirectoryOffset,e.rootDirectoryLength,e);1===e.specVersion&&(t=S(t));const c=K(new DataView(t),i,s,o);if(c){let e=(yield r.getBytes(c.offset,c.length,a)).data;const t=new DataView(e);return 31===t.getUint8(0)&&139===t.getUint8(1)&&(e=B(new Uint8Array(e))),{data:e}}const l=((e,t)=>{if(e.byteLength<17)return null;const r=e.byteLength/17,n=j(e,r-1);if(n.isDir){const e=n.z,r=t.z-e;return{z:e,x:Math.trunc(t.x/(1<<r)),y:Math.trunc(t.y/(1<<r))}}return null})(new DataView(t),{z:i,x:s,y:o});if(l){const c=((e,t,r,n)=>{const i=I(e,128|t,r,n);return i?{z:t,x:r,y:n,offset:i[0],length:i[1],isDir:!0}:null})(new DataView(t),l.z,l.x,l.y);if(c){let t=yield n.getArrayBuffer(r,c.offset,c.length,e);1===e.specVersion&&(t=S(t));const l=K(new DataView(t),i,s,o);if(l){let e=(yield r.getBytes(l.offset,l.length,a)).data;const t=new DataView(e);return 31===t.getUint8(0)&&139===t.getUint8(1)&&(e=B(new Uint8Array(e))),{data:e}}}}}))}},N=(e,t)=>{let r=!1,n="";return new(L.GridLayer.extend({createTile:(t,i)=>{const s=document.createElement("img"),o=new AbortController,a=o.signal;return s.cancel=()=>{o.abort()},r||(e.getHeader().then((e=>{1===e.tileType?console.error("Error: archive contains MVT vector tiles, but leafletRasterLayer is for displaying raster tiles. See https://github.com/protomaps/PMTiles/tree/main/js for details."):2===e.tileType?n="image/png":3===e.tileType?n="image/jpeg":4===e.tileType?n="image/webp":5===e.tileType&&(n="image/avif")})),r=!0),e.getZxy(t.z,t.x,t.y,a).then((e=>{if(e){const t=new Blob([e.data],{type:n}),r=window.URL.createObjectURL(t);s.src=r,s.cancel=void 0,i(void 0,s)}})).catch((e=>{if("AbortError"!==e.name)throw e})),s},_removeTile:function(e){const t=this._tiles[e];t&&(t.el.cancel&&t.el.cancel(),t.el.width=0,t.el.height=0,t.el.deleted=!0,L.DomUtil.remove(t.el),delete this._tiles[e],this.fire("tileunload",{tile:t.el,coords:this._keyToTileCoords(e)}))}}))(t)},_=class{constructor(){var e;this.tilev4=(e,r)=>t(this,null,(function*(){if("json"===e.type){const t=e.url.substr(10);let r=this.tiles.get(t);r||(r=new ye(t),this.tiles.set(t,r));const n=yield r.getHeader();return{data:{tiles:[`${e.url}/{z}/{x}/{y}`],minzoom:n.minZoom,maxzoom:n.maxZoom,bounds:[n.minLon,n.minLat,n.maxLon,n.maxLat]}}}const t=new RegExp(/pmtiles:\/\/(.+)\/(\d+)\/(\d+)\/(\d+)/),n=e.url.match(t);if(!n)throw new Error("Invalid PMTiles protocol URL");const i=n[1];let s=this.tiles.get(i);s||(s=new ye(i),this.tiles.set(i,s));const o=n[2],a=n[3],c=n[4],l=yield s.getHeader(),u=yield null==s?void 0:s.getZxy(+o,+a,+c,r.signal);return u?{data:new Uint8Array(u.data),cacheControl:u.cacheControl,expires:u.expires}:1===l.tileType?{data:new Uint8Array}:{data:null}})),this.tile=(e=this.tilev4,(t,r)=>{if(r instanceof AbortController)return e(t,r);const n=new AbortController;return e(t,n).then((e=>r(void 0,e.data,e.cacheControl||"",e.expires||"")),(e=>r(e))).catch((e=>r(e))),{cancel:()=>n.abort()}}),this.tiles=new Map}add(e){this.tiles.set(e.source.getKey(),e)}get(e){return this.tiles.get(e)}};function F(e,t){return 4294967296*(t>>>0)+(e>>>0)}function G(e){const t=e.buf;let r=t[e.pos++],n=127&r;return r<128?n:(r=t[e.pos++],n|=(127&r)<<7,r<128?n:(r=t[e.pos++],n|=(127&r)<<14,r<128?n:(r=t[e.pos++],n|=(127&r)<<21,r<128?n:(r=t[e.pos],n|=(15&r)<<28,function(e,t){const r=t.buf;let n=r[t.pos++],i=(112&n)>>4;if(n<128)return F(e,i);if(n=r[t.pos++],i|=(127&n)<<3,n<128)return F(e,i);if(n=r[t.pos++],i|=(127&n)<<10,n<128)return F(e,i);if(n=r[t.pos++],i|=(127&n)<<17,n<128)return F(e,i);if(n=r[t.pos++],i|=(127&n)<<24,n<128)return F(e,i);if(n=r[t.pos++],i|=(1&n)<<31,n<128)return F(e,i);throw new Error("Expected varint not more than 10 bytes")}(n,e)))))}function q(e,t,r,n){if(0===n){1===r&&(t[0]=e-1-t[0],t[1]=e-1-t[1]);const n=t[0];t[0]=t[1],t[1]=n}}function Q(t,r){const n=e(2,t);let i=r,s=r,o=r;const a=[0,0];let c=1;for(;c<n;)i=1&o/2,s=1&(o^i),q(c,a,i,s),a[0]+=c*i,a[1]+=c*s,o/=4,c*=2;return[t,a[0],a[1]]}var X=[0,1,5,21,85,341,1365,5461,21845,87381,349525,1398101,5592405,22369621,89478485,357913941,1431655765,5726623061,22906492245,91625968981,366503875925,1466015503701,5864062014805,23456248059221,93824992236885,375299968947541,0x5555555555555];function Y(t,r,n){if(t>26)throw Error("Tile zoom level exceeds max safe number limit (26)");if(r>e(2,t)-1||n>e(2,t)-1)throw Error("tile x/y outside zoom level bounds");const i=X[t];let s=0,o=0,a=0;const c=[r,n];let l=e(2,t)/2;for(;l>0;)s=(c[0]&l)>0?1:0,o=(c[1]&l)>0?1:0,a+=l*l*(3*s^o),q(l,c,s,o),l/=2;return i+a}function ee(e){let t=0;for(let r=0;r<27;r++){const n=(1<<r)*(1<<r);if(t+n>e)return Q(r,e-t);t+=n}throw Error("Tile zoom level exceeds max safe number limit (26)")}var te=(e=>(e[e.Unknown=0]="Unknown",e[e.None=1]="None",e[e.Gzip=2]="Gzip",e[e.Brotli=3]="Brotli",e[e.Zstd=4]="Zstd",e))(te||{});function re(e,r){return t(this,null,(function*(){if(1===r||0===r)return e;if(2===r){if(void 0===globalThis.DecompressionStream)return B(new Uint8Array(e));const t=new Response(e).body;if(!t)throw Error("Failed to read response stream");const r=t.pipeThrough(new globalThis.DecompressionStream("gzip"));return new Response(r).arrayBuffer()}throw Error("Compression method not supported")}))}var ne=(e=>(e[e.Unknown=0]="Unknown",e[e.Mvt=1]="Mvt",e[e.Png=2]="Png",e[e.Jpeg=3]="Jpeg",e[e.Webp=4]="Webp",e[e.Avif=5]="Avif",e))(ne||{});function ie(e,t){let r=0,n=e.length-1;for(;r<=n;){const i=n+r>>1,s=t-e[i].tileId;if(s>0)r=i+1;else{if(!(s<0))return e[i];n=i-1}}if(n>=0){if(0===e[n].runLength)return e[n];if(t-e[n].tileId<e[n].runLength)return e[n]}return null}var se=class{constructor(e){this.file=e}getKey(){return this.file.name}getBytes(e,r){return t(this,null,(function*(){const t=this.file.slice(e,e+r);return{data:yield t.arrayBuffer()}}))}},oe=class{constructor(e,t=new Headers){this.url=e,this.customHeaders=t,this.mustReload=!1}getKey(){return this.url}setHeaders(e){this.customHeaders=e}getBytes(e,r,n,i){return t(this,null,(function*(){let t,s;n?s=n:(t=new AbortController,s=t.signal);const o=new Headers(this.customHeaders);let a;o.set("range",`bytes=${e}-${e+r-1}`),this.mustReload&&(a="reload");let c=yield fetch(this.url,{signal:s,cache:a,headers:o});if(0===e&&416===c.status){const e=c.headers.get("Content-Range");if(!e||!e.startsWith("bytes */"))throw Error("Missing content-length on 416 response");const t=+e.substr(8);c=yield fetch(this.url,{signal:s,cache:"reload",headers:{range:"bytes=0-"+(t-1)}})}let l=c.headers.get("Etag");if((null==l?void 0:l.startsWith("W/"))&&(l=null),416===c.status||i&&l&&l!==i)throw this.mustReload=!0,new ue(i);if(c.status>=300)throw Error(`Bad response code: ${c.status}`);const u=c.headers.get("Content-Length");if(200===c.status&&(!u||+u>r))throw t&&t.abort(),Error("Server returned no content-length header or content-length exceeding request. Check that your storage backend supports HTTP Byte Serving.");return{data:yield c.arrayBuffer(),etag:l||void 0,cacheControl:c.headers.get("Cache-Control")||void 0,expires:c.headers.get("Expires")||void 0}}))}};function ae(t,r){const n=t.getUint32(r+4,!0),i=t.getUint32(r+0,!0);return n*e(2,32)+i}function ce(e,t){const r=new DataView(e),n=r.getUint8(7);if(n>3)throw Error(`Archive is spec version ${n} but this library supports up to spec version 3`);return{specVersion:n,rootDirectoryOffset:ae(r,8),rootDirectoryLength:ae(r,16),jsonMetadataOffset:ae(r,24),jsonMetadataLength:ae(r,32),leafDirectoryOffset:ae(r,40),leafDirectoryLength:ae(r,48),tileDataOffset:ae(r,56),tileDataLength:ae(r,64),numAddressedTiles:ae(r,72),numTileEntries:ae(r,80),numTileContents:ae(r,88),clustered:1===r.getUint8(96),internalCompression:r.getUint8(97),tileCompression:r.getUint8(98),tileType:r.getUint8(99),minZoom:r.getUint8(100),maxZoom:r.getUint8(101),minLon:r.getInt32(102,!0)/1e7,minLat:r.getInt32(106,!0)/1e7,maxLon:r.getInt32(110,!0)/1e7,maxLat:r.getInt32(114,!0)/1e7,centerZoom:r.getUint8(118),centerLon:r.getInt32(119,!0)/1e7,centerLat:r.getInt32(123,!0)/1e7,etag:t}}function le(e){const t={buf:new Uint8Array(e),pos:0},r=G(t),n=[];let i=0;for(let e=0;e<r;e++){const e=G(t);n.push({tileId:i+e,offset:0,length:0,runLength:1}),i+=e}for(let e=0;e<r;e++)n[e].runLength=G(t);for(let e=0;e<r;e++)n[e].length=G(t);for(let e=0;e<r;e++){const r=G(t);n[e].offset=0===r&&e>0?n[e-1].offset+n[e-1].length:r-1}return n}var ue=class extends Error{};function he(e,r){return t(this,null,(function*(){const t=yield e.getBytes(0,16384);if(19792!==new DataView(t.data).getUint16(0,!0))throw new Error("Wrong magic number for PMTiles archive");if(function(e){const t=new DataView(e);return 2===t.getUint16(2,!0)?(console.warn("PMTiles spec version 2 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"),2):1===t.getUint16(2,!0)?(console.warn("PMTiles spec version 1 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"),1):3}(t.data)<3)return[yield J.getHeader(e)];const n=ce(t.data.slice(0,127),t.etag),i=t.data.slice(n.rootDirectoryOffset,n.rootDirectoryOffset+n.rootDirectoryLength),s=`${e.getKey()}|${n.etag||""}|${n.rootDirectoryOffset}|${n.rootDirectoryLength}`,o=le(yield r(i,n.internalCompression));return[n,[s,o.length,o]]}))}function fe(e,r,n,i,s){return t(this,null,(function*(){const t=yield e.getBytes(n,i,void 0,s.etag),o=le(yield r(t.data,s.internalCompression));if(0===o.length)throw new Error("Empty directory is invalid");return o}))}var de=class{constructor(e=100,t=!0,r=re){this.cache=new Map,this.maxCacheEntries=e,this.counter=1,this.decompress=r}getHeader(e){return t(this,null,(function*(){const t=e.getKey(),r=this.cache.get(t);if(r){r.lastUsed=this.counter++;return r.data}const n=yield he(e,this.decompress);return n[1]&&this.cache.set(n[1][0],{lastUsed:this.counter++,data:n[1][2]}),this.cache.set(t,{lastUsed:this.counter++,data:n[0]}),this.prune(),n[0]}))}getDirectory(e,r,n,i){return t(this,null,(function*(){const t=`${e.getKey()}|${i.etag||""}|${r}|${n}`,s=this.cache.get(t);if(s){s.lastUsed=this.counter++;return s.data}const o=yield fe(e,this.decompress,r,n,i);return this.cache.set(t,{lastUsed:this.counter++,data:o}),this.prune(),o}))}getArrayBuffer(e,r,n,i){return t(this,null,(function*(){const t=`${e.getKey()}|${i.etag||""}|${r}|${n}`,s=this.cache.get(t);if(s){s.lastUsed=this.counter++;return yield s.data}const o=yield e.getBytes(r,n,void 0,i.etag);return this.cache.set(t,{lastUsed:this.counter++,data:o.data}),this.prune(),o.data}))}prune(){if(this.cache.size>this.maxCacheEntries){let e,t=1/0;this.cache.forEach(((r,n)=>{r.lastUsed<t&&(t=r.lastUsed,e=n)})),e&&this.cache.delete(e)}}invalidate(e){return t(this,null,(function*(){this.cache.delete(e.getKey())}))}},ge=class{constructor(e=100,t=!0,r=re){this.cache=new Map,this.invalidations=new Map,this.maxCacheEntries=e,this.counter=1,this.decompress=r}getHeader(e){return t(this,null,(function*(){const t=e.getKey(),r=this.cache.get(t);if(r){r.lastUsed=this.counter++;return yield r.data}const n=new Promise(((t,r)=>{he(e,this.decompress).then((e=>{e[1]&&this.cache.set(e[1][0],{lastUsed:this.counter++,data:Promise.resolve(e[1][2])}),t(e[0]),this.prune()})).catch((e=>{r(e)}))}));return this.cache.set(t,{lastUsed:this.counter++,data:n}),n}))}getDirectory(e,r,n,i){return t(this,null,(function*(){const t=`${e.getKey()}|${i.etag||""}|${r}|${n}`,s=this.cache.get(t);if(s){s.lastUsed=this.counter++;return yield s.data}const o=new Promise(((t,s)=>{fe(e,this.decompress,r,n,i).then((e=>{t(e),this.prune()})).catch((e=>{s(e)}))}));return this.cache.set(t,{lastUsed:this.counter++,data:o}),o}))}getArrayBuffer(e,r,n,i){return t(this,null,(function*(){const t=`${e.getKey()}|${i.etag||""}|${r}|${n}`,s=this.cache.get(t);if(s){s.lastUsed=this.counter++;return yield s.data}const o=new Promise(((s,o)=>{e.getBytes(r,n,void 0,i.etag).then((e=>{s(e.data),this.cache.has(t),this.prune()})).catch((e=>{o(e)}))}));return this.cache.set(t,{lastUsed:this.counter++,data:o}),o}))}prune(){if(this.cache.size>=this.maxCacheEntries){let e,t=1/0;this.cache.forEach(((r,n)=>{r.lastUsed<t&&(t=r.lastUsed,e=n)})),e&&this.cache.delete(e)}}invalidate(e){return t(this,null,(function*(){const t=e.getKey();if(this.invalidations.get(t))return yield this.invalidations.get(t);this.cache.delete(e.getKey());const r=new Promise(((r,n)=>{this.getHeader(e).then((e=>{r(),this.invalidations.delete(t)})).catch((e=>{n(e)}))}));this.invalidations.set(t,r)}))}},ye=class{constructor(e,t,r){this.source="string"==typeof e?new oe(e):e,this.decompress=r||re,this.cache=t||new ge}getHeader(){return t(this,null,(function*(){return yield this.cache.getHeader(this.source)}))}getZxyAttempt(e,r,n,i){return t(this,null,(function*(){const t=Y(e,r,n),s=yield this.cache.getHeader(this.source);if(s.specVersion<3)return J.getZxy(s,this.source,this.cache,e,r,n,i);if(e<s.minZoom||e>s.maxZoom)return;let o=s.rootDirectoryOffset,a=s.rootDirectoryLength;for(let e=0;e<=3;e++){const e=ie(yield this.cache.getDirectory(this.source,o,a,s),t);if(!e)return;if(e.runLength>0){const t=yield this.source.getBytes(s.tileDataOffset+e.offset,e.length,i,s.etag);return{data:yield this.decompress(t.data,s.tileCompression),cacheControl:t.cacheControl,expires:t.expires}}o=s.leafDirectoryOffset+e.offset,a=e.length}throw Error("Maximum directory depth exceeded")}))}getZxy(e,r,n,i){return t(this,null,(function*(){try{return yield this.getZxyAttempt(e,r,n,i)}catch(t){if(t instanceof ue)return this.cache.invalidate(this.source),yield this.getZxyAttempt(e,r,n,i);throw t}}))}getMetadataAttempt(){return t(this,null,(function*(){const e=yield this.cache.getHeader(this.source),t=yield this.source.getBytes(e.jsonMetadataOffset,e.jsonMetadataLength,void 0,e.etag),r=yield this.decompress(t.data,e.internalCompression),n=new TextDecoder("utf-8");return JSON.parse(n.decode(r))}))}getMetadata(){return t(this,null,(function*(){try{return yield this.getMetadataAttempt()}catch(e){if(e instanceof ue)return this.cache.invalidate(this.source),yield this.getMetadataAttempt();throw e}}))}};export{te as Compression,ue as EtagMismatch,oe as FetchSource,se as FileSource,ye as PMTiles,_ as Protocol,de as ResolvedValueCache,ge as SharedPromiseCache,ne as TileType,ce as bytesToHeader,ie as findTile,ae as getUint64,N as leafletRasterLayer,G as readVarint,ee as tileIdToZxy,Y as zxyToTileId};export default null;