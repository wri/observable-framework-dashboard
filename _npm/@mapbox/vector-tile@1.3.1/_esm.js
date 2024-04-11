/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@mapbox/vector-tile@1.3.1/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import t from"../point-geometry@0.1.0/_esm.js";var e={},r=t,n=a;function a(t,e,r,n,a){this.properties={},this.extent=r,this.type=0,this._pbf=t,this._geometry=-1,this._keys=n,this._values=a,t.readFields(i,this,e)}function i(t,e,r){1==t?e.id=r.readVarint():2==t?function(t,e){var r=t.readVarint()+t.pos;for(;t.pos<r;){var n=e._keys[t.readVarint()],a=e._values[t.readVarint()];e.properties[n]=a}}(r,e):3==t?e.type=r.readVarint():4==t&&(e._geometry=r.pos)}function s(t){for(var e,r,n=0,a=0,i=t.length,s=i-1;a<i;s=a++)e=t[a],n+=((r=t[s]).x-e.x)*(e.y+r.y);return n}a.types=["Unknown","Point","LineString","Polygon"],a.prototype.loadGeometry=function(){var t=this._pbf;t.pos=this._geometry;for(var e,n=t.readVarint()+t.pos,a=1,i=0,s=0,o=0,h=[];t.pos<n;){if(i<=0){var p=t.readVarint();a=7&p,i=p>>3}if(i--,1===a||2===a)s+=t.readSVarint(),o+=t.readSVarint(),1===a&&(e&&h.push(e),e=[]),e.push(new r(s,o));else{if(7!==a)throw new Error("unknown command "+a);e&&e.push(e[0].clone())}}return e&&h.push(e),h},a.prototype.bbox=function(){var t=this._pbf;t.pos=this._geometry;for(var e=t.readVarint()+t.pos,r=1,n=0,a=0,i=0,s=1/0,o=-1/0,h=1/0,p=-1/0;t.pos<e;){if(n<=0){var u=t.readVarint();r=7&u,n=u>>3}if(n--,1===r||2===r)(a+=t.readSVarint())<s&&(s=a),a>o&&(o=a),(i+=t.readSVarint())<h&&(h=i),i>p&&(p=i);else if(7!==r)throw new Error("unknown command "+r)}return[s,h,o,p]},a.prototype.toGeoJSON=function(t,e,r){var n,i,o=this.extent*Math.pow(2,r),h=this.extent*t,p=this.extent*e,u=this.loadGeometry(),f=a.types[this.type];function d(t){for(var e=0;e<t.length;e++){var r=t[e],n=180-360*(r.y+p)/o;t[e]=[360*(r.x+h)/o-180,360/Math.PI*Math.atan(Math.exp(n*Math.PI/180))-90]}}switch(this.type){case 1:var l=[];for(n=0;n<u.length;n++)l[n]=u[n][0];d(u=l);break;case 2:for(n=0;n<u.length;n++)d(u[n]);break;case 3:for(u=function(t){var e=t.length;if(e<=1)return[t];for(var r,n,a=[],i=0;i<e;i++){var o=s(t[i]);0!==o&&(void 0===n&&(n=o<0),n===o<0?(r&&a.push(r),r=[t[i]]):r.push(t[i]))}r&&a.push(r);return a}(u),n=0;n<u.length;n++)for(i=0;i<u[n].length;i++)d(u[n][i])}1===u.length?u=u[0]:f="Multi"+f;var v={type:"Feature",geometry:{type:f,coordinates:u},properties:this.properties};return"id"in this&&(v.id=this.id),v};var o=n,h=p;function p(t,e){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=t,this._keys=[],this._values=[],this._features=[],t.readFields(u,this,e),this.length=this._features.length}function u(t,e,r){15===t?e.version=r.readVarint():1===t?e.name=r.readString():5===t?e.extent=r.readVarint():2===t?e._features.push(r.pos):3===t?e._keys.push(r.readString()):4===t&&e._values.push(function(t){var e=null,r=t.readVarint()+t.pos;for(;t.pos<r;){var n=t.readVarint()>>3;e=1===n?t.readString():2===n?t.readFloat():3===n?t.readDouble():4===n?t.readVarint64():5===n?t.readVarint():6===n?t.readSVarint():7===n?t.readBoolean():null}return e}(r))}p.prototype.feature=function(t){if(t<0||t>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[t];var e=this._pbf.readVarint()+this._pbf.pos;return new o(this._pbf,e,this.extent,this._keys,this._values)};var f=h,d=function(t,e){this.layers=t.readFields(l,{},e)};function l(t,e,r){if(3===t){var n=new f(r,r.readVarint()+r.pos);n.length&&(e[n.name]=n)}}var v=e.VectorTile=d,y=e.VectorTileFeature=n,_=e.VectorTileLayer=h;export{v as VectorTile,y as VectorTileFeature,_ as VectorTileLayer,e as default};