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
import{a as Q}from"./chunk-K6KKGJV3.js";import{a as z}from"./chunk-RC3J75N5.js";import{a as _}from"./chunk-H77XG57N.js";import{a as K}from"./chunk-7P3UWTUX.js";import{a as H}from"./chunk-GIF3NIGD.js";import{b as J,c as W,d as P}from"./chunk-7VHC7I6W.js";import{d as j}from"./chunk-VNH2ZAFU.js";import{d as k}from"./chunk-TL76KVMB.js";import{a as L}from"./chunk-EK7K4JTS.js";import{a as b}from"./chunk-TZVAMLG3.js";import{a as Z}from"./chunk-7IOYEWZQ.js";import{a as x}from"./chunk-DYKDQ7Q5.js";import{a as F}from"./chunk-57R6MEVR.js";import{e as g}from"./chunk-KNXNZS2Q.js";var M=new k,ot=new b,nt=new b,it=new b,st=new b;function O(t){t=x(t,x.EMPTY_OBJECT);let e=t.length,o=t.topRadius,n=t.bottomRadius,r=x(t.vertexFormat,_.DEFAULT),a=x(t.slices,128);if(!g(e))throw new F("options.length must be defined.");if(!g(o))throw new F("options.topRadius must be defined.");if(!g(n))throw new F("options.bottomRadius must be defined.");if(a<3)throw new F("options.slices must be greater than or equal to 3.");if(g(t.offsetAttribute)&&t.offsetAttribute===z.TOP)throw new F("GeometryOffsetAttribute.TOP is not a supported options.offsetAttribute for this geometry.");this._length=e,this._topRadius=o,this._bottomRadius=n,this._vertexFormat=_.clone(r),this._slices=a,this._offsetAttribute=t.offsetAttribute,this._workerName="createCylinderGeometry"}O.packedLength=_.packedLength+5,O.pack=function(t,e,o){if(!g(t))throw new F("value is required");if(!g(e))throw new F("array is required");return o=x(o,0),_.pack(t._vertexFormat,e,o),o+=_.packedLength,e[o++]=t._length,e[o++]=t._topRadius,e[o++]=t._bottomRadius,e[o++]=t._slices,e[o]=x(t._offsetAttribute,-1),e};var G,X=new _,C={vertexFormat:X,length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,offsetAttribute:void 0};O.unpack=function(t,e,o){if(!g(t))throw new F("array is required");e=x(e,0);let n=_.unpack(t,e,X);e+=_.packedLength;let r=t[e++],a=t[e++],i=t[e++],s=t[e++],u=t[e];return g(o)?(o._vertexFormat=_.clone(n,o._vertexFormat),o._length=r,o._topRadius=a,o._bottomRadius=i,o._slices=s,o._offsetAttribute=-1===u?void 0:u,o):(C.length=r,C.topRadius=a,C.bottomRadius=i,C.slices=s,C.offsetAttribute=-1===u?void 0:u,new O(C))},O.createGeometry=function(t){let e=t._length,o=t._topRadius,n=t._bottomRadius,r=t._vertexFormat,a=t._slices;if(e<=0||o<0||n<0||0===o&&0===n)return;let i,s=a+a,u=a+s,m=s+s,f=Q.computePositions(e,o,n,a,!0),p=r.st?new Float32Array(2*m):void 0,l=r.normal?new Float32Array(3*m):void 0,c=r.tangent?new Float32Array(3*m):void 0,h=r.bitangent?new Float32Array(3*m):void 0,d=r.normal||r.tangent||r.bitangent;if(d){let t=r.tangent||r.bitangent,s=0,u=0,m=0,f=Math.atan2(n-o,e),p=ot;p.z=Math.sin(f);let g=Math.cos(f),_=it,w=nt;for(i=0;i<a;i++){let e=i/a*Z.TWO_PI,o=g*Math.cos(e),n=g*Math.sin(e);d&&(p.x=o,p.y=n,t&&(_=b.normalize(b.cross(b.UNIT_Z,p,_),_)),r.normal&&(l[s++]=p.x,l[s++]=p.y,l[s++]=p.z,l[s++]=p.x,l[s++]=p.y,l[s++]=p.z),r.tangent&&(c[u++]=_.x,c[u++]=_.y,c[u++]=_.z,c[u++]=_.x,c[u++]=_.y,c[u++]=_.z),r.bitangent&&(w=b.normalize(b.cross(p,_,w),w),h[m++]=w.x,h[m++]=w.y,h[m++]=w.z,h[m++]=w.x,h[m++]=w.y,h[m++]=w.z))}for(i=0;i<a;i++)r.normal&&(l[s++]=0,l[s++]=0,l[s++]=-1),r.tangent&&(c[u++]=1,c[u++]=0,c[u++]=0),r.bitangent&&(h[m++]=0,h[m++]=-1,h[m++]=0);for(i=0;i<a;i++)r.normal&&(l[s++]=0,l[s++]=0,l[s++]=1),r.tangent&&(c[u++]=1,c[u++]=0,c[u++]=0),r.bitangent&&(h[m++]=0,h[m++]=1,h[m++]=0)}let _=12*a-12,w=K.createTypedArray(m,_),y=0,A=0;for(i=0;i<a-1;i++)w[y++]=A,w[y++]=A+2,w[y++]=A+3,w[y++]=A,w[y++]=A+3,w[y++]=A+1,A+=2;for(w[y++]=s-2,w[y++]=0,w[y++]=1,w[y++]=s-2,w[y++]=1,w[y++]=s-1,i=1;i<a-1;i++)w[y++]=s+i+1,w[y++]=s+i,w[y++]=s;for(i=1;i<a-1;i++)w[y++]=u,w[y++]=u+i,w[y++]=u+i+1;let v=0;if(r.st){let t=Math.max(o,n);for(i=0;i<m;i++){let e=b.fromArray(f,3*i,st);p[v++]=(e.x+t)/(2*t),p[v++]=(e.y+t)/(2*t)}}let x=new H;r.position&&(x.position=new P({componentDatatype:L.DOUBLE,componentsPerAttribute:3,values:f})),r.normal&&(x.normal=new P({componentDatatype:L.FLOAT,componentsPerAttribute:3,values:l})),r.tangent&&(x.tangent=new P({componentDatatype:L.FLOAT,componentsPerAttribute:3,values:c})),r.bitangent&&(x.bitangent=new P({componentDatatype:L.FLOAT,componentsPerAttribute:3,values:h})),r.st&&(x.st=new P({componentDatatype:L.FLOAT,componentsPerAttribute:2,values:p})),M.x=.5*e,M.y=Math.max(n,o);let F=new j(b.ZERO,k.magnitude(M));if(g(t._offsetAttribute)){e=f.length;let o=t._offsetAttribute===z.NONE?0:1,n=new Uint8Array(e/3).fill(o);x.applyOffset=new P({componentDatatype:L.UNSIGNED_BYTE,componentsPerAttribute:1,values:n})}return new W({attributes:x,indices:w,primitiveType:J.TRIANGLES,boundingSphere:F,offsetAttribute:t._offsetAttribute})},O.getUnitCylinder=function(){return g(G)||(G=O.createGeometry(new O({topRadius:1,bottomRadius:1,length:1,vertexFormat:_.POSITION_ONLY}))),G};var yt=O;export{yt as a};