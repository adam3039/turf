# @turf/center-of-mass

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## centerOfMass

Takes any [Feature](https://tools.ietf.org/html/rfc7946#section-3.2) or a [FeatureCollection](https://tools.ietf.org/html/rfc7946#section-3.3) and returns its [center of mass](https://en.wikipedia.org/wiki/Center_of_mass) using this formula: [Centroid of Polygon](https://en.wikipedia.org/wiki/Centroid#Centroid_of_polygon).

**Parameters**

-   `geojson` **[GeoJSON](https://tools.ietf.org/html/rfc7946#section-3)** GeoJSON to be centered
-   `properties` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** an Object that is used as the [Feature](https://tools.ietf.org/html/rfc7946#section-3.2)'s properties (optional, default `{}`)

**Examples**

```javascript
var polygon = turf.polygon([[[-81, 41], [-88, 36], [-84, 31], [-80, 33], [-77, 39], [-81, 41]]]);

var center = turf.centerOfMass(polygon);

//addToMap
var addToMap = [polygon, center]
```

Returns **[Feature](https://tools.ietf.org/html/rfc7946#section-3.2)&lt;[Point](https://tools.ietf.org/html/rfc7946#section-3.1.2)>** the center of mass

<!-- This file is automatically generated. Please don't edit it directly:
if you find an error, edit the source file (likely index.js), and re-run
./scripts/generate-readmes in the turf project. -->

---

This module is part of the [Turfjs project](http://turfjs.org/), an open source
module collection dedicated to geographic algorithms. It is maintained in the
[Turfjs/turf](https://github.com/Turfjs/turf) repository, where you can create
PRs and issues.

### Installation

Install this module individually:

```sh
$ npm install @turf/center-of-mass
```

Or install the Turf module that includes it as a function:

```sh
$ npm install @turf/turf
```
