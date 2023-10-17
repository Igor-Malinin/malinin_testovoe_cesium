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
import{a as N}from"./chunk-D3MZSVDY.js";import{a as z}from"./chunk-RC3J75N5.js";import{b as B}from"./chunk-OG7KJPIH.js";import"./chunk-JNTN7NAL.js";import{a as O}from"./chunk-7P3UWTUX.js";import{a as F}from"./chunk-GIF3NIGD.js";import{b as q,c as x,d as v}from"./chunk-7VHC7I6W.js";import{d as C}from"./chunk-VNH2ZAFU.js";import"./chunk-2YKWURU2.js";import{c as m}from"./chunk-TL76KVMB.js";import{a as y}from"./chunk-EK7K4JTS.js";import{a as M,b as Y,c as b}from"./chunk-TZVAMLG3.js";import{a as P}from"./chunk-7IOYEWZQ.js";import"./chunk-XE4KLUZ2.js";import"./chunk-TL6AL3PA.js";import{a as A}from"./chunk-DYKDQ7Q5.js";import{a as k}from"./chunk-57R6MEVR.js";import{e as S}from"./chunk-KNXNZS2Q.js";var j=new C,K=new C,Q=new M,X=new m;function V(t,e){let i=t._ellipsoid,r=e.height,o=e.width,n=e.northCap,a=e.southCap,s=r,l=2,u=0,c=4;n&&(l-=1,s-=1,u+=1,c-=2),a&&(l-=1,s-=1,u+=1,c-=2),u+=l*o+2*s-c;let h,p=new Float64Array(3*u),f=0,m=0,g=Q;if(n)N.computePosition(e,i,!1,m,0,g),p[f++]=g.x,p[f++]=g.y,p[f++]=g.z;else for(h=0;h<o;h++)N.computePosition(e,i,!1,m,h,g),p[f++]=g.x,p[f++]=g.y,p[f++]=g.z;for(h=o-1,m=1;m<r;m++)N.computePosition(e,i,!1,m,h,g),p[f++]=g.x,p[f++]=g.y,p[f++]=g.z;if(m=r-1,!a)for(h=o-2;h>=0;h--)N.computePosition(e,i,!1,m,h,g),p[f++]=g.x,p[f++]=g.y,p[f++]=g.z;for(h=0,m=r-2;m>0;m--)N.computePosition(e,i,!1,m,h,g),p[f++]=g.x,p[f++]=g.y,p[f++]=g.z;let d=p.length/3*2,_=O.createTypedArray(p.length/3,d),b=0;for(let k=0;k<p.length/3-1;k++)_[b++]=k,_[b++]=k+1;_[b++]=p.length/3-1,_[b++]=0;let A=new x({attributes:new F,primitiveType:q.LINES});return A.attributes.position=new v({componentDatatype:y.DOUBLE,componentsPerAttribute:3,values:p}),A.indices=_,A}function Z(t,e){let i=t._surfaceHeight,r=t._extrudedHeight,o=t._ellipsoid,n=r,a=i,s=V(t,e),l=e.height,u=e.width,c=B.scaleToGeodeticHeight(s.attributes.position.values,a,o,!1),h=c.length,p=new Float64Array(2*h);p.set(c);let f=B.scaleToGeodeticHeight(s.attributes.position.values,n,o);p.set(f,h),s.attributes.position.values=p;let m=e.northCap,g=e.southCap,d=4;m&&(d-=1),g&&(d-=1);let _=2*(p.length/3+d),b=O.createTypedArray(p.length/3,_);h=p.length/6;let A,k=0;for(let y=0;y<h-1;y++)b[k++]=y,b[k++]=y+1,b[k++]=y+h,b[k++]=y+h+1;if(b[k++]=h-1,b[k++]=0,b[k++]=h+h-1,b[k++]=h,b[k++]=0,b[k++]=h,m)A=l-1;else{let t=u-1;b[k++]=t,b[k++]=t+h,A=u+l-2}if(b[k++]=A,b[k++]=A+h,!g){let t=u+A-1;b[k++]=t,b[k]=t+h}return s.indices=b,s}function D(t){t=A(t,A.EMPTY_OBJECT);let e=t.rectangle,i=A(t.granularity,P.RADIANS_PER_DEGREE),r=A(t.ellipsoid,b.WGS84),o=A(t.rotation,0);if(!S(e))throw new k("rectangle is required.");if(m.validate(e),e.north<e.south)throw new k("options.rectangle.north must be greater than options.rectangle.south");let n=A(t.height,0),a=A(t.extrudedHeight,n);this._rectangle=m.clone(e),this._granularity=i,this._ellipsoid=r,this._surfaceHeight=Math.max(n,a),this._rotation=o,this._extrudedHeight=Math.min(n,a),this._offsetAttribute=t.offsetAttribute,this._workerName="createRectangleOutlineGeometry"}D.packedLength=m.packedLength+b.packedLength+5,D.pack=function(t,e,i){if(!S(t))throw new k("value is required");if(!S(e))throw new k("array is required");return i=A(i,0),m.pack(t._rectangle,e,i),i+=m.packedLength,b.pack(t._ellipsoid,e,i),i+=b.packedLength,e[i++]=t._granularity,e[i++]=t._surfaceHeight,e[i++]=t._rotation,e[i++]=t._extrudedHeight,e[i]=A(t._offsetAttribute,-1),e};var J=new m,W=b.clone(b.UNIT_SPHERE),L={rectangle:J,ellipsoid:W,granularity:void 0,height:void 0,rotation:void 0,extrudedHeight:void 0,offsetAttribute:void 0};D.unpack=function(t,e,i){if(!S(t))throw new k("array is required");e=A(e,0);let r=m.unpack(t,e,J);e+=m.packedLength;let o=b.unpack(t,e,W);e+=b.packedLength;let n=t[e++],a=t[e++],s=t[e++],l=t[e++],u=t[e];return S(i)?(i._rectangle=m.clone(r,i._rectangle),i._ellipsoid=b.clone(o,i._ellipsoid),i._surfaceHeight=a,i._rotation=s,i._extrudedHeight=l,i._offsetAttribute=-1===u?void 0:u,i):(L.granularity=n,L.height=a,L.rotation=s,L.extrudedHeight=l,L.offsetAttribute=-1===u?void 0:u,new D(L))};var $=new Y;D.createGeometry=function(t){let e,i,r=t._rectangle,o=t._ellipsoid,n=N.computeOptions(r,t._granularity,t._rotation,0,X,$);if(P.equalsEpsilon(r.north,r.south,P.EPSILON10)||P.equalsEpsilon(r.east,r.west,P.EPSILON10))return;let a,s=t._surfaceHeight,l=t._extrudedHeight,u=!P.equalsEpsilon(s,l,0,P.EPSILON2);if(u){if(e=Z(t,n),S(t._offsetAttribute)){let i=e.attributes.position.values.length/3,r=new Uint8Array(i);t._offsetAttribute===z.TOP?r=r.fill(1,0,i/2):(a=t._offsetAttribute===z.NONE?0:1,r=r.fill(a)),e.attributes.applyOffset=new v({componentDatatype:y.UNSIGNED_BYTE,componentsPerAttribute:1,values:r})}let u=C.fromRectangle3D(r,o,s,K),c=C.fromRectangle3D(r,o,l,j);i=C.union(u,c)}else{if(e=V(t,n),e.attributes.position.values=B.scaleToGeodeticHeight(e.attributes.position.values,s,o,!1),S(t._offsetAttribute)){let i=e.attributes.position.values.length;a=t._offsetAttribute===z.NONE?0:1;let r=new Uint8Array(i/3).fill(a);e.attributes.applyOffset=new v({componentDatatype:y.UNSIGNED_BYTE,componentsPerAttribute:1,values:r})}i=C.fromRectangle3D(r,o,s)}return new x({attributes:e.attributes,indices:e.indices,primitiveType:q.LINES,boundingSphere:i,offsetAttribute:t._offsetAttribute})};var U=D;function G(t,e){return S(e)&&(t=U.unpack(t,e)),t._ellipsoid=b.clone(t._ellipsoid),t._rectangle=m.clone(t._rectangle),U.createGeometry(t)}var Ht=G;export{Ht as default};