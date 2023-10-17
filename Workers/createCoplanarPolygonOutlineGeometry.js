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
import{a as T}from"./chunk-CYVKPNY7.js";import"./chunk-6HPXDM4G.js";import{a as f}from"./chunk-JZTQKYX2.js";import"./chunk-GDU4HM25.js";import{a as G}from"./chunk-XCRGRNQS.js";import{a as C}from"./chunk-SWN2FXZS.js";import"./chunk-7QQVIQUI.js";import"./chunk-KHY6RFC7.js";import"./chunk-B5XY4KJS.js";import"./chunk-BXEYVAPQ.js";import"./chunk-OG7KJPIH.js";import{a as L}from"./chunk-HD5MEFMW.js";import"./chunk-JNTN7NAL.js";import"./chunk-AAT5S4I6.js";import"./chunk-S2GBLW2R.js";import{a as w}from"./chunk-7P3UWTUX.js";import{a as O}from"./chunk-GIF3NIGD.js";import{b,c as d,d as k}from"./chunk-7VHC7I6W.js";import{d as P}from"./chunk-VNH2ZAFU.js";import"./chunk-2YKWURU2.js";import"./chunk-TL76KVMB.js";import{a as H}from"./chunk-EK7K4JTS.js";import{a as l,c as g}from"./chunk-TZVAMLG3.js";import"./chunk-7IOYEWZQ.js";import"./chunk-XE4KLUZ2.js";import"./chunk-TL6AL3PA.js";import{a as c}from"./chunk-DYKDQ7Q5.js";import{b as a}from"./chunk-57R6MEVR.js";import{e as u}from"./chunk-KNXNZS2Q.js";function E(e){let r=e.length,t=new Float64Array(3*r),o=w.createTypedArray(r,2*r),n=0,i=0;for(let a=0;a<r;a++){let s=e[a];t[n++]=s.x,t[n++]=s.y,t[n++]=s.z,o[i++]=a,o[i++]=(a+1)%r}let s=new O({position:new k({componentDatatype:H.DOUBLE,componentsPerAttribute:3,values:t})});return new d({attributes:s,indices:o,primitiveType:b.LINES})}function m(e){e=c(e,c.EMPTY_OBJECT);let r=e.polygonHierarchy;a.defined("options.polygonHierarchy",r),this._polygonHierarchy=r,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=f.computeHierarchyPackedLength(r,l)+1}m.fromPositions=function(e){e=c(e,c.EMPTY_OBJECT),a.defined("options.positions",e.positions);let r={polygonHierarchy:{positions:e.positions}};return new m(r)},m.pack=function(e,r,t){return a.typeOf.object("value",e),a.defined("array",r),t=c(t,0),t=f.packPolygonHierarchy(e._polygonHierarchy,r,t,l),r[t]=e.packedLength,r};var v={polygonHierarchy:{}};m.unpack=function(e,r,t){a.defined("array",e),r=c(r,0);let o=f.unpackPolygonHierarchy(e,r,l);r=o.startingIndex,delete o.startingIndex;let n=e[r];return u(t)||(t=new m(v)),t._polygonHierarchy=o,t.packedLength=n,t},m.createGeometry=function(e){let r=e._polygonHierarchy,t=r.positions;if(t=L(t,l.equalsEpsilon,!0),t.length<3||!T.validOutline(t))return;let o=f.polygonOutlinesFromHierarchy(r,!1);if(0===o.length)return;let n=[];for(let a=0;a<o.length;a++){let e=new G({geometry:E(o[a])});n.push(e)}let i=C.combineInstances(n)[0],s=P.fromPoints(r.positions);return new d({attributes:i.attributes,indices:i.indices,primitiveType:i.primitiveType,boundingSphere:s})};var h=m;function A(e,r){return u(r)&&(e=h.unpack(e,r)),e._ellipsoid=g.clone(e._ellipsoid),h.createGeometry(e)}var Z=A;export{Z as default};