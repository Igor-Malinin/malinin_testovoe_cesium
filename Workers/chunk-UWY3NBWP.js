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
import{f as C}from"./chunk-VNH2ZAFU.js";import{a as n,d as b}from"./chunk-TZVAMLG3.js";import{a as w}from"./chunk-7IOYEWZQ.js";var j={},q=new n,L=new n,Q=new C,G=new b;function W(t,e,r,a,o,i,l,s,y,c){let m=t+e;n.multiplyByScalar(a,Math.cos(m),q),n.multiplyByScalar(r,Math.sin(m),L),n.add(q,L,q);let u=Math.cos(t);u*=u;let w=Math.sin(t);w*=w;let x=i/Math.sqrt(l*u+o*w)/s;return C.fromAxisAngle(q,x,Q),b.fromQuaternion(Q,G),b.multiplyByVector(G,y,c),n.normalize(c,c),n.multiplyByScalar(c,s,c),c}var U=new n,Z=new n,N=new n,v=new n;j.raisePositionsToHeight=function(t,e,r){let a=e.ellipsoid,o=e.height,i=e.extrudedHeight,l=r?t.length/3*2:t.length/3,s=new Float64Array(3*l),y=t.length,c=r?y:0;for(let m=0;m<y;m+=3){let e=m+1,l=m+2,y=n.fromArray(t,m,U);a.scaleToGeodeticSurface(y,y);let u=n.clone(y,Z),w=a.geodeticSurfaceNormal(y,v),x=n.multiplyByScalar(w,o,N);n.add(y,x,y),r&&(n.multiplyByScalar(w,i,x),n.add(u,x,u),s[m+c]=u.x,s[e+c]=u.y,s[l+c]=u.z),s[m]=y.x,s[e]=y.y,s[l]=y.z}return s};var D=new n,J=new n,K=new n;j.computeEllipsePositions=function(t,e,r){let a=t.semiMinorAxis,o=t.semiMajorAxis,i=t.rotation,l=t.center,s=8*t.granularity,y=a*a,c=o*o,m=o*a,u=n.magnitude(l),x=n.normalize(l,D),h=n.cross(n.UNIT_Z,l,J);h=n.normalize(h,h);let f=n.cross(x,h,K),z=1+Math.ceil(w.PI_OVER_TWO/s),O=w.PI_OVER_TWO/(z-1),_=w.PI_OVER_TWO-z*O;_<0&&(z-=Math.ceil(Math.abs(_)/O));let p,d,P,M,I,T=z*(z+2)*2,V=e?new Array(3*T):void 0,g=0,A=U,E=Z,j=4*z*3,v=j-1,R=0,S=r?new Array(j):void 0;for(_=w.PI_OVER_TWO,A=W(_,i,f,h,y,m,c,u,x,A),e&&(V[g++]=A.x,V[g++]=A.y,V[g++]=A.z),r&&(S[v--]=A.z,S[v--]=A.y,S[v--]=A.x),_=w.PI_OVER_TWO-O,p=1;p<z+1;++p){if(A=W(_,i,f,h,y,m,c,u,x,A),E=W(Math.PI-_,i,f,h,y,m,c,u,x,E),e){for(V[g++]=A.x,V[g++]=A.y,V[g++]=A.z,P=2*p+2,d=1;d<P-1;++d)M=d/(P-1),I=n.lerp(A,E,M,N),V[g++]=I.x,V[g++]=I.y,V[g++]=I.z;V[g++]=E.x,V[g++]=E.y,V[g++]=E.z}r&&(S[v--]=A.z,S[v--]=A.y,S[v--]=A.x,S[R++]=E.x,S[R++]=E.y,S[R++]=E.z),_=w.PI_OVER_TWO-(p+1)*O}for(p=z;p>1;--p){if(_=w.PI_OVER_TWO-(p-1)*O,A=W(-_,i,f,h,y,m,c,u,x,A),E=W(_+Math.PI,i,f,h,y,m,c,u,x,E),e){for(V[g++]=A.x,V[g++]=A.y,V[g++]=A.z,P=2*(p-1)+2,d=1;d<P-1;++d)M=d/(P-1),I=n.lerp(A,E,M,N),V[g++]=I.x,V[g++]=I.y,V[g++]=I.z;V[g++]=E.x,V[g++]=E.y,V[g++]=E.z}r&&(S[v--]=A.z,S[v--]=A.y,S[v--]=A.x,S[R++]=E.x,S[R++]=E.y,S[R++]=E.z)}_=w.PI_OVER_TWO,A=W(-_,i,f,h,y,m,c,u,x,A);let q={};return e&&(V[g++]=A.x,V[g++]=A.y,V[g++]=A.z,q.positions=V,q.numPts=z),r&&(S[v--]=A.z,S[v--]=A.y,S[v--]=A.x,q.outerPositions=S),q};var tt=j;export{tt as a};