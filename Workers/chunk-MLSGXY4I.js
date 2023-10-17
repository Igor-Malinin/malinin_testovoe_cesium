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
import{a as wt}from"./chunk-RC3J75N5.js";import{a as k}from"./chunk-H77XG57N.js";import{a as kt}from"./chunk-7P3UWTUX.js";import{a as Ct}from"./chunk-GIF3NIGD.js";import{b as dt,c as _t,d as R}from"./chunk-7VHC7I6W.js";import{d as pt}from"./chunk-VNH2ZAFU.js";import{d as ht}from"./chunk-TL76KVMB.js";import{a as N}from"./chunk-EK7K4JTS.js";import{a as s,c as ot}from"./chunk-TZVAMLG3.js";import{a as M}from"./chunk-7IOYEWZQ.js";import{a as p}from"./chunk-DYKDQ7Q5.js";import{a as z}from"./chunk-57R6MEVR.js";import{e as E}from"./chunk-KNXNZS2Q.js";var yt=new s,vt=new s,Et=new s,Mt=new s,Nt=new s,Rt=new s(1,1,1),Pt=Math.cos,At=Math.sin;function O(t){t=p(t,p.EMPTY_OBJECT);let e=p(t.radii,Rt),i=p(t.innerRadii,e),n=p(t.minimumClock,0),r=p(t.maximumClock,M.TWO_PI),a=p(t.minimumCone,0),o=p(t.maximumCone,M.PI),m=Math.round(p(t.stackPartitions,64)),c=Math.round(p(t.slicePartitions,64)),u=p(t.vertexFormat,k.DEFAULT);if(c<3)throw new z("options.slicePartitions cannot be less than three.");if(m<3)throw new z("options.stackPartitions cannot be less than three.");this._radii=s.clone(e),this._innerRadii=s.clone(i),this._minimumClock=n,this._maximumClock=r,this._minimumCone=a,this._maximumCone=o,this._stackPartitions=m,this._slicePartitions=c,this._vertexFormat=k.clone(u),this._offsetAttribute=t.offsetAttribute,this._workerName="createEllipsoidGeometry"}O.packedLength=2*s.packedLength+k.packedLength+7,O.pack=function(t,e,i){if(!E(t))throw new z("value is required");if(!E(e))throw new z("array is required");return i=p(i,0),s.pack(t._radii,e,i),i+=s.packedLength,s.pack(t._innerRadii,e,i),i+=s.packedLength,k.pack(t._vertexFormat,e,i),i+=k.packedLength,e[i++]=t._minimumClock,e[i++]=t._maximumClock,e[i++]=t._minimumCone,e[i++]=t._maximumCone,e[i++]=t._stackPartitions,e[i++]=t._slicePartitions,e[i]=p(t._offsetAttribute,-1),e};var mt,bt=new s,xt=new s,Ot=new k,y={radii:bt,innerRadii:xt,vertexFormat:Ot,minimumClock:void 0,maximumClock:void 0,minimumCone:void 0,maximumCone:void 0,stackPartitions:void 0,slicePartitions:void 0,offsetAttribute:void 0};O.unpack=function(t,e,i){if(!E(t))throw new z("array is required");e=p(e,0);let n=s.unpack(t,e,bt);e+=s.packedLength;let r=s.unpack(t,e,xt);e+=s.packedLength;let a=k.unpack(t,e,Ot);e+=k.packedLength;let o=t[e++],m=t[e++],c=t[e++],u=t[e++],l=t[e++],f=t[e++],h=t[e];return E(i)?(i._radii=s.clone(n,i._radii),i._innerRadii=s.clone(r,i._innerRadii),i._vertexFormat=k.clone(a,i._vertexFormat),i._minimumClock=o,i._maximumClock=m,i._minimumCone=c,i._maximumCone=u,i._stackPartitions=l,i._slicePartitions=f,i._offsetAttribute=-1===h?void 0:h,i):(y.minimumClock=o,y.maximumClock=m,y.minimumCone=c,y.maximumCone=u,y.stackPartitions=l,y.slicePartitions=f,y.offsetAttribute=-1===h?void 0:h,new O(y))},O.createGeometry=function(t){let e=t._radii;if(e.x<=0||e.y<=0||e.z<=0)return;let i=t._innerRadii;if(i.x<=0||i.y<=0||i.z<=0)return;let n=t._minimumClock,r=t._maximumClock,a=t._minimumCone,o=t._maximumCone,m=t._vertexFormat,c=t._slicePartitions+1,u=t._stackPartitions+1;c=Math.round(c*Math.abs(r-n)/M.TWO_PI),u=Math.round(u*Math.abs(o-a)/M.PI),c<2&&(c=2),u<2&&(u=2);let l,f,p=0,k=[a],h=[n];for(l=0;l<u;l++)k.push(a+l*(o-a)/(u-1));for(k.push(o),f=0;f<c;f++)h.push(n+f*(r-n)/(c-1));h.push(r);let _=k.length,d=h.length,y=0,w=1,A=i.x!==e.x||i.y!==e.y||i.z!==e.z,x=!1,P=!1,C=!1;A&&(w=2,a>0&&(x=!0,y+=c-1),o<Math.PI&&(P=!0,y+=c-1),(r-n)%M.TWO_PI?(C=!0,y+=2*(u-1)+1):y+=1);let v=d*_*w,b=new Float64Array(3*v),g=new Array(v).fill(!1),O=new Array(v).fill(!1),T=c*u*w,F=6*(T+y+1-(c+u)*w),L=kt.createTypedArray(T,F),z=m.normal?new Float32Array(3*v):void 0,I=m.tangent?new Float32Array(3*v):void 0,j=m.bitangent?new Float32Array(3*v):void 0,D=m.st?new Float32Array(2*v):void 0,U=new Array(_),G=new Array(_);for(l=0;l<_;l++)U[l]=At(k[l]),G[l]=Pt(k[l]);let K=new Array(d),S=new Array(d);for(f=0;f<d;f++)S[f]=Pt(h[f]),K[f]=At(h[f]);for(l=0;l<_;l++)for(f=0;f<d;f++)b[p++]=e.x*U[l]*S[f],b[p++]=e.y*U[l]*K[f],b[p++]=e.z*G[l];let W,V,Y,Z,B=v/2;if(A)for(l=0;l<_;l++)for(f=0;f<d;f++)b[p++]=i.x*U[l]*S[f],b[p++]=i.y*U[l]*K[f],b[p++]=i.z*G[l],g[B]=!0,l>0&&l!==_-1&&0!==f&&f!==d-1&&(O[B]=!0),B++;for(p=0,l=1;l<_-2;l++)for(W=l*d,V=(l+1)*d,f=1;f<d-2;f++)L[p++]=V+f,L[p++]=V+f+1,L[p++]=W+f+1,L[p++]=V+f,L[p++]=W+f+1,L[p++]=W+f;if(A){let t=_*d;for(l=1;l<_-2;l++)for(W=t+l*d,V=t+(l+1)*d,f=1;f<d-2;f++)L[p++]=V+f,L[p++]=W+f,L[p++]=W+f+1,L[p++]=V+f,L[p++]=W+f+1,L[p++]=V+f+1}if(A){if(x)for(Z=_*d,l=1;l<d-2;l++)L[p++]=l,L[p++]=l+1,L[p++]=Z+l+1,L[p++]=l,L[p++]=Z+l+1,L[p++]=Z+l;if(P)for(Y=_*d-d,Z=_*d*w-d,l=1;l<d-2;l++)L[p++]=Y+l+1,L[p++]=Y+l,L[p++]=Z+l,L[p++]=Y+l+1,L[p++]=Z+l,L[p++]=Z+l+1}if(C){for(l=1;l<_-2;l++)Z=d*_+d*l,Y=d*l,L[p++]=Z,L[p++]=Y+d,L[p++]=Y,L[p++]=Z,L[p++]=Z+d,L[p++]=Y+d;for(l=1;l<_-2;l++)Z=d*_+d*(l+1)-1,Y=d*(l+1)-1,L[p++]=Y+d,L[p++]=Z,L[p++]=Y,L[p++]=Y+d,L[p++]=Z+d,L[p++]=Z}let Q=new Ct;m.position&&(Q.position=new R({componentDatatype:N.DOUBLE,componentsPerAttribute:3,values:b}));let X,q=0,H=0,J=0,$=0,tt=v/2,et=ot.fromCartesian3(e),it=ot.fromCartesian3(i);if(m.st||m.normal||m.tangent||m.bitangent){for(l=0;l<v;l++){X=g[l]?it:et;let t=s.fromArray(b,3*l,yt),e=X.geodeticSurfaceNormal(t,vt);if(O[l]&&s.negate(e,e),m.st){let t=ht.negate(e,Nt);D[q++]=Math.atan2(t.y,t.x)/M.TWO_PI+.5,D[q++]=Math.asin(e.z)/Math.PI+.5}if(m.normal&&(z[H++]=e.x,z[H++]=e.y,z[H++]=e.z),m.tangent||m.bitangent){let t,i=Et,n=0;if(g[l]&&(n=tt),t=!x&&l>=n&&l<n+2*d?s.UNIT_X:s.UNIT_Z,s.cross(t,e,i),s.normalize(i,i),m.tangent&&(I[J++]=i.x,I[J++]=i.y,I[J++]=i.z),m.bitangent){let t=s.cross(e,i,Mt);s.normalize(t,t),j[$++]=t.x,j[$++]=t.y,j[$++]=t.z}}}m.st&&(Q.st=new R({componentDatatype:N.FLOAT,componentsPerAttribute:2,values:D})),m.normal&&(Q.normal=new R({componentDatatype:N.FLOAT,componentsPerAttribute:3,values:z})),m.tangent&&(Q.tangent=new R({componentDatatype:N.FLOAT,componentsPerAttribute:3,values:I})),m.bitangent&&(Q.bitangent=new R({componentDatatype:N.FLOAT,componentsPerAttribute:3,values:j}))}if(E(t._offsetAttribute)){let e=b.length,i=t._offsetAttribute===wt.NONE?0:1,n=new Uint8Array(e/3).fill(i);Q.applyOffset=new R({componentDatatype:N.UNSIGNED_BYTE,componentsPerAttribute:1,values:n})}return new _t({attributes:Q,indices:L,primitiveType:dt.TRIANGLES,boundingSphere:pt.fromEllipsoid(et),offsetAttribute:t._offsetAttribute})},O.getUnitEllipsoid=function(){return E(mt)||(mt=O.createGeometry(new O({radii:new s(1,1,1),vertexFormat:k.POSITION_ONLY}))),mt};var Kt=O;export{Kt as a};