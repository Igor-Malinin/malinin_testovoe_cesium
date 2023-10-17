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
import{a as r}from"./chunk-MLSGXY4I.js";import"./chunk-RC3J75N5.js";import{a as m}from"./chunk-H77XG57N.js";import"./chunk-7P3UWTUX.js";import"./chunk-GIF3NIGD.js";import"./chunk-7VHC7I6W.js";import"./chunk-VNH2ZAFU.js";import"./chunk-2YKWURU2.js";import"./chunk-TL76KVMB.js";import"./chunk-EK7K4JTS.js";import{a as s}from"./chunk-TZVAMLG3.js";import"./chunk-7IOYEWZQ.js";import"./chunk-XE4KLUZ2.js";import"./chunk-TL6AL3PA.js";import{a as l}from"./chunk-DYKDQ7Q5.js";import{b as p}from"./chunk-57R6MEVR.js";import{e as c}from"./chunk-KNXNZS2Q.js";function n(t){let i=l(t.radius,1),e={radii:new s(i,i,i),stackPartitions:t.stackPartitions,slicePartitions:t.slicePartitions,vertexFormat:t.vertexFormat};this._ellipsoidGeometry=new r(e),this._workerName="createSphereGeometry"}n.packedLength=r.packedLength,n.pack=function(t,i,e){return p.typeOf.object("value",t),r.pack(t._ellipsoidGeometry,i,e)};var f=new r,i={radius:void 0,radii:new s,vertexFormat:new m,stackPartitions:void 0,slicePartitions:void 0};n.unpack=function(t,e,o){let a=r.unpack(t,e,f);return i.vertexFormat=m.clone(a._vertexFormat,i.vertexFormat),i.stackPartitions=a._stackPartitions,i.slicePartitions=a._slicePartitions,c(o)?(s.clone(a._radii,i.radii),o._ellipsoidGeometry=new r(i),o):(i.radius=a._radii.x,new n(i))},n.createGeometry=function(t){return r.createGeometry(t._ellipsoidGeometry)};var d=n;function u(r,t){return c(t)&&(r=d.unpack(r,t)),d.createGeometry(r)}var v=u;export{v as default};