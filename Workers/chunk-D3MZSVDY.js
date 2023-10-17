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
import{a as O}from"./chunk-VNH2ZAFU.js";import{c as I,e as V}from"./chunk-TL76KVMB.js";import{a as W,b as v}from"./chunk-TZVAMLG3.js";import{a as R}from"./chunk-7IOYEWZQ.js";import{a as k}from"./chunk-57R6MEVR.js";import{e as N}from"./chunk-KNXNZS2Q.js";var z=Math.cos,Z=Math.sin,D=Math.sqrt,L={computePosition:function(t,n,a,r,o,s,e){let i=n.radiiSquared,g=t.nwCorner,h=t.boundingRectangle,l=g.latitude-t.granYCos*r+o*t.granXSin,u=z(l),c=Z(l),S=i.z*c,C=g.longitude+r*t.granYSin+o*t.granXCos,w=u*z(C),R=u*Z(C),m=i.x*w,d=i.y*R,O=D(m*w+d*R+S*c);if(s.x=m/O,s.y=d/O,s.z=S/O,a){let n=t.stNwCorner;N(n)?(l=n.latitude-t.stGranYCos*r+o*t.stGranXSin,C=n.longitude+r*t.stGranYSin+o*t.stGranXCos,e.x=(C-t.stWest)*t.lonScalar,e.y=(l-t.stSouth)*t.latScalar):(e.x=(C-h.west)*t.lonScalar,e.y=(l-h.south)*t.latScalar)}}},A=new V,g=new W,F=new v,b=new W,q=new O;function B(t,n,a,r,o,s,e){let i=Math.cos(n),h=r*i,l=a*i,u=Math.sin(n),c=r*u,S=a*u;g=q.project(t,g),g=W.subtract(g,b,g);let C=V.fromRotation(n,A);g=V.multiplyByVector(C,g,g),g=W.add(g,b,g),t=q.unproject(g,t),s-=1,e-=1;let w=t.latitude,R=w+s*S,m=w-h*e,d=w-h*e+s*S,O=Math.max(w,R,m,d),p=Math.min(w,R,m,d),X=t.longitude,Y=X+s*l,I=X+e*c,f=X+e*c+s*l,M=Math.max(X,Y,I,f),_=Math.min(X,Y,I,f);return{north:O,south:p,east:M,west:_,granYCos:h,granYSin:c,granXCos:l,granXSin:S,nwCorner:t}}L.computeOptions=function(t,n,a,r,o,s,e){let i=t.east,g=t.west,h=t.north,l=t.south,u=!1,c=!1;h===R.PI_OVER_TWO&&(u=!0),l===-R.PI_OVER_TWO&&(c=!0);let S,C=h-l;S=g>i?R.TWO_PI-g+i:i-g;let w=Math.ceil(S/n)+1,m=Math.ceil(C/n)+1,d=S/(w-1),O=C/(m-1),p=I.northwest(t,s),X=I.center(t,F);(0!==a||0!==r)&&(X.longitude<p.longitude&&(X.longitude+=R.TWO_PI),b=q.project(X,b));let Y=O,W=d,V=0,f=0,M=I.clone(t,o),_={granYCos:Y,granYSin:V,granXCos:W,granXSin:f,nwCorner:p,boundingRectangle:M,width:w,height:m,northCap:u,southCap:c};if(0!==a){let t=B(p,a,d,O,X,w,m);if(h=t.north,l=t.south,i=t.east,g=t.west,h<-R.PI_OVER_TWO||h>R.PI_OVER_TWO||l<-R.PI_OVER_TWO||l>R.PI_OVER_TWO)throw new k("Rotated rectangle is invalid.  It crosses over either the north or south pole.");_.granYCos=t.granYCos,_.granYSin=t.granYSin,_.granXCos=t.granXCos,_.granXSin=t.granXSin,M.north=h,M.south=l,M.east=i,M.west=g}if(0!==r){a-=r;let t=I.northwest(M,e),n=B(t,a,d,O,X,w,m);_.stGranYCos=n.granYCos,_.stGranXCos=n.granXCos,_.stGranYSin=n.granYSin,_.stGranXSin=n.granXSin,_.stNwCorner=t,_.stWest=n.west,_.stSouth=n.south}return _};var nt=L;export{nt as a};