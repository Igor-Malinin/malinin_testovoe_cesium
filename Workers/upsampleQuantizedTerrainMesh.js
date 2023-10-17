/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.110
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */
import{a as be,b as Ne}from"./chunk-UHQPUMWN.js";import{a as Ae}from"./chunk-T2JXMNUX.js";import{a as ue}from"./chunk-6HPXDM4G.js";import{a as ee}from"./chunk-7QQVIQUI.js";import"./chunk-B5XY4KJS.js";import"./chunk-BXEYVAPQ.js";import"./chunk-AAT5S4I6.js";import"./chunk-S2GBLW2R.js";import{a as Ve}from"./chunk-7P3UWTUX.js";import{d as de}from"./chunk-VNH2ZAFU.js";import"./chunk-2YKWURU2.js";import{c as Se,d as Z}from"./chunk-TL76KVMB.js";import"./chunk-EK7K4JTS.js";import{a as A,b as Ie,c as Ce}from"./chunk-TZVAMLG3.js";import{a as N}from"./chunk-7IOYEWZQ.js";import"./chunk-XE4KLUZ2.js";import"./chunk-TL6AL3PA.js";import"./chunk-DYKDQ7Q5.js";import{a as V,b as q}from"./chunk-57R6MEVR.js";import{e as f}from"./chunk-KNXNZS2Q.js";var ne={clipTriangleAtAxisAlignedThreshold:function(e,t,i,n,s,r){if(!f(e))throw new V("threshold is required.");if(!f(t))throw new V("keepAbove is required.");if(!f(i))throw new V("u0 is required.");if(!f(n))throw new V("u1 is required.");if(!f(s))throw new V("u2 is required.");let h,u,o;f(r)?r.length=0:r=[],t?(h=i<e,u=n<e,o=s<e):(h=i>e,u=n>e,o=s>e);let p,l,d,a,m,c,g=h+u+o;return 1===g?h?(p=(e-i)/(n-i),l=(e-i)/(s-i),r.push(1),r.push(2),1!==l&&(r.push(-1),r.push(0),r.push(2),r.push(l)),1!==p&&(r.push(-1),r.push(0),r.push(1),r.push(p))):u?(d=(e-n)/(s-n),a=(e-n)/(i-n),r.push(2),r.push(0),1!==a&&(r.push(-1),r.push(1),r.push(0),r.push(a)),1!==d&&(r.push(-1),r.push(1),r.push(2),r.push(d))):o&&(m=(e-s)/(i-s),c=(e-s)/(n-s),r.push(0),r.push(1),1!==c&&(r.push(-1),r.push(2),r.push(1),r.push(c)),1!==m&&(r.push(-1),r.push(2),r.push(0),r.push(m))):2===g?h||i===e?u||n===e?!o&&s!==e&&(l=(e-i)/(s-i),d=(e-n)/(s-n),r.push(2),r.push(-1),r.push(0),r.push(2),r.push(l),r.push(-1),r.push(1),r.push(2),r.push(d)):(c=(e-s)/(n-s),p=(e-i)/(n-i),r.push(1),r.push(-1),r.push(2),r.push(1),r.push(c),r.push(-1),r.push(0),r.push(1),r.push(p)):(a=(e-n)/(i-n),m=(e-s)/(i-s),r.push(0),r.push(-1),r.push(1),r.push(0),r.push(a),r.push(-1),r.push(2),r.push(0),r.push(m)):3!==g&&(r.push(0),r.push(1),r.push(2)),r},computeBarycentricCoordinates:function(e,t,i,n,s,r,h,u,o){if(!f(e))throw new V("x is required.");if(!f(t))throw new V("y is required.");if(!f(i))throw new V("x1 is required.");if(!f(n))throw new V("y1 is required.");if(!f(s))throw new V("x2 is required.");if(!f(r))throw new V("y2 is required.");if(!f(h))throw new V("x3 is required.");if(!f(u))throw new V("y3 is required.");let p=i-h,l=h-s,d=r-u,a=n-u,m=1/(d*p+l*a),c=t-u,g=e-h,w=(d*g+l*c)*m,x=(-a*g+p*c)*m,y=1-w-x;return f(o)?(o.x=w,o.y=x,o.z=y,o):new A(w,x,y)},computeLineSegmentLineSegmentIntersection:function(e,t,i,n,s,r,h,u,o){q.typeOf.number("x00",e),q.typeOf.number("y00",t),q.typeOf.number("x01",i),q.typeOf.number("y01",n),q.typeOf.number("x10",s),q.typeOf.number("y10",r),q.typeOf.number("x11",h),q.typeOf.number("y11",u);let p=(h-s)*(t-r)-(u-r)*(e-s),l=(i-e)*(t-r)-(n-t)*(e-s),d=(u-r)*(i-e)-(h-s)*(n-t);if(0===d)return;let a=p/d,m=l/d;return a>=0&&a<=1&&m>=0&&m<=1?(f(o)||(o=new Z),o.x=e+a*(i-e),o.y=t+a*(n-t),o):void 0}},ie=ne,a=32767,z=a/2|0,Me=[],ze=[],Xe=[],te=new Ie,E=new A,Ke=[],We=[],Ye=[],Le=[],_e=[],Je=new A,Qe=new de,Ze=new ue,Ge=new Z,$e=new A;function je(e,t){let i=e.isEastChild,n=e.isNorthChild,s=i?z:0,r=i?a:z,h=n?z:0,u=n?a:z,o=Ke,p=We,f=Ye,l=_e;o.length=0,p.length=0,f.length=0,l.length=0;let d=Le;d.length=0;let c={},g=e.vertices,w=e.indices;w=w.subarray(0,e.indexCountWithoutSkirts);let x,y,V,I,B,S=Ne.clone(e.encoding),v=S.hasVertexNormals,b=0,k=e.vertexCountWithoutSkirts,j=e.minimumHeight,q=e.maximumHeight,T=new Array(k),K=new Array(k),U=new Array(k),O=v?new Array(2*k):void 0,C=20;for(y=0,V=0;y<k;++y,V+=2){let e=S.decodeTextureCoordinates(g,y,Ge);if(x=S.decodeHeight(g,y),I=N.clamp(e.x*a|0,0,a),B=N.clamp(e.y*a|0,0,a),U[y]=N.clamp((x-j)/(q-j)*a|0,0,a),I<C&&(I=0),B<C&&(B=0),a-I<C&&(I=a),a-B<C&&(B=a),T[y]=I,K[y]=B,v){let e=S.getOctEncodedNormal(g,y,$e);O[V]=e.x,O[V+1]=e.y}(i&&I>=z||!i&&I<=z)&&(n&&B>=z||!n&&B<=z)&&(c[y]=b,o.push(I),p.push(B),f.push(U[y]),v&&(l.push(O[V]),l.push(O[V+1])),++b)}let X=[];X.push(new m),X.push(new m),X.push(new m);let H,R,Z=[];for(Z.push(new m),Z.push(new m),Z.push(new m),y=0;y<w.length;y+=3){let e=w[y],t=w[y+1],s=w[y+2],r=T[e],h=T[t],u=T[s];X[0].initializeIndexed(T,K,U,O,e),X[1].initializeIndexed(T,K,U,O,t),X[2].initializeIndexed(T,K,U,O,s);let a=ie.clipTriangleAtAxisAlignedThreshold(z,i,r,h,u,Me);H=0,!(H>=a.length)&&(H=Z[0].initializeFromClipResult(a,H,X),!(H>=a.length)&&(H=Z[1].initializeFromClipResult(a,H,X),!(H>=a.length)&&(H=Z[2].initializeFromClipResult(a,H,X),R=ie.clipTriangleAtAxisAlignedThreshold(z,n,Z[0].getV(),Z[1].getV(),Z[2].getV(),ze),Oe(o,p,f,l,d,c,R,Z,v),H<a.length&&(Z[2].clone(Z[1]),Z[2].initializeFromClipResult(a,H,X),R=ie.clipTriangleAtAxisAlignedThreshold(z,n,Z[0].getV(),Z[1].getV(),Z[2].getV(),ze),Oe(o,p,f,l,d,c,R,Z,v)))))}let L=i?-a:0,M=n?-a:0,Q=[],Y=[],W=[],P=[],F=Number.MAX_VALUE,J=-F,D=Xe;D.length=0;let G=Ce.clone(e.ellipsoid),_=Se.clone(e.childRectangle),$=_.north,ee=_.south,ne=_.east,se=_.west;for(ne<se&&(ne+=N.TWO_PI),y=0;y<o.length;++y)I=Math.round(o[y]),I<=s?(Q.push(y),I=0):I>=r?(W.push(y),I=a):I=2*I+L,o[y]=I,B=Math.round(p[y]),B<=h?(Y.push(y),B=0):B>=u?(P.push(y),B=a):B=2*B+M,p[y]=B,x=N.lerp(j,q,f[y]/a),x<F&&(F=x),x>J&&(J=x),f[y]=x,te.longitude=N.lerp(se,ne,I/a),te.latitude=N.lerp(ee,$,B/a),te.height=x,G.cartographicToCartesian(te,E),D.push(E.x),D.push(E.y),D.push(E.z);let re=de.fromVertices(D,A.ZERO,3,Qe),he=ue.fromRectangle(_,F,J,G,Ze),oe=new be(G).computeHorizonCullingPointFromVerticesPossiblyUnderEllipsoid(re.center,D,3,re.center,F,Je),pe=J-F,fe=new Uint16Array(o.length+p.length+f.length);for(y=0;y<o.length;++y)fe[y]=o[y];let le=o.length;for(y=0;y<p.length;++y)fe[le+y]=p[y];for(le+=p.length,y=0;y<f.length;++y)fe[le+y]=a*(f[y]-F)/pe;let ae,me=Ve.createTypedArray(o.length,d);if(v){let e=new Uint8Array(l);t.push(fe.buffer,me.buffer,e.buffer),ae=e.buffer}else t.push(fe.buffer,me.buffer);return{vertices:fe.buffer,encodedNormals:ae,indices:me.buffer,minimumHeight:F,maximumHeight:J,westIndices:Q,southIndices:Y,eastIndices:W,northIndices:P,boundingSphere:re,orientedBoundingBox:he,horizonOcclusionPoint:oe}}function m(){this.vertexBuffer=void 0,this.index=void 0,this.first=void 0,this.second=void 0,this.ratio=void 0}m.prototype.clone=function(e){return f(e)||(e=new m),e.uBuffer=this.uBuffer,e.vBuffer=this.vBuffer,e.heightBuffer=this.heightBuffer,e.normalBuffer=this.normalBuffer,e.index=this.index,e.first=this.first,e.second=this.second,e.ratio=this.ratio,e},m.prototype.initializeIndexed=function(e,t,i,n,s){this.uBuffer=e,this.vBuffer=t,this.heightBuffer=i,this.normalBuffer=n,this.index=s,this.first=void 0,this.second=void 0,this.ratio=void 0},m.prototype.initializeFromClipResult=function(e,t,i){let n=t+1;return-1!==e[t]?i[e[t]].clone(this):(this.vertexBuffer=void 0,this.index=void 0,this.first=i[e[n]],++n,this.second=i[e[n]],++n,this.ratio=e[n],++n),n},m.prototype.getKey=function(){return this.isIndexed()?this.index:JSON.stringify({first:this.first.getKey(),second:this.second.getKey(),ratio:this.ratio})},m.prototype.isIndexed=function(){return f(this.index)},m.prototype.getH=function(){return f(this.index)?this.heightBuffer[this.index]:N.lerp(this.first.getH(),this.second.getH(),this.ratio)},m.prototype.getU=function(){return f(this.index)?this.uBuffer[this.index]:N.lerp(this.first.getU(),this.second.getU(),this.ratio)},m.prototype.getV=function(){return f(this.index)?this.vBuffer[this.index]:N.lerp(this.first.getV(),this.second.getV(),this.ratio)};var K=new Z,oe=-1,en=[new A,new A],nn=[new A,new A];function Te(e,t){++oe;let i=en[oe],n=nn[oe];return i=ee.octDecode(e.first.getNormalX(),e.first.getNormalY(),i),n=ee.octDecode(e.second.getNormalX(),e.second.getNormalY(),n),E=A.lerp(i,n,e.ratio,E),A.normalize(E,E),ee.octEncode(E,t),--oe,t}m.prototype.getNormalX=function(){return f(this.index)?this.normalBuffer[2*this.index]:(K=Te(this,K),K.x)},m.prototype.getNormalY=function(){return f(this.index)?this.normalBuffer[2*this.index+1]:(K=Te(this,K),K.y)};var S=[];function Oe(e,t,i,n,s,r,h,u,o){if(0===h.length)return;let p=0,l=0;for(;l<h.length;)l=S[p++].initializeFromClipResult(h,l,u);for(let d=0;d<p;++d){let s=S[d];if(s.isIndexed())s.newIndex=r[s.index],s.uBuffer=e,s.vBuffer=t,s.heightBuffer=i,o&&(s.normalBuffer=n);else{let h=s.getKey();if(f(r[h]))s.newIndex=r[h];else{let u=e.length;e.push(s.getU()),t.push(s.getV()),i.push(s.getH()),o&&(n.push(s.getNormalX()),n.push(s.getNormalY())),s.newIndex=u,r[h]=u}}}3===p?(s.push(S[0].newIndex),s.push(S[1].newIndex),s.push(S[2].newIndex)):4===p&&(s.push(S[0].newIndex),s.push(S[1].newIndex),s.push(S[2].newIndex),s.push(S[0].newIndex),s.push(S[2].newIndex),s.push(S[3].newIndex))}S.push(new m),S.push(new m),S.push(new m),S.push(new m);var An=Ae(je);export{An as default};