import Benchmark from 'benchmark';
import rectangleGrid from '.';
import glob from 'glob';
import path from 'path';
import load from 'load-json-file';

/**
 * Benchmark Results
 *
 * <Place results here>
 */
const suite = new Benchmark.Suite('turf-rectangle-grid');
glob.sync(path.join(__dirname, 'test', 'in', '*.geojson')).forEach(filepath => {
    const {name} = path.parse(filepath);
    const geojson = load.sync(filepath);
    const [feature1, feature2] = geojson.features;
    console.time(name);
    rectangleGrid(feature1, feature2);
    console.timeEnd(name);
    suite.add(name, () => rectangleGrid(feature1, feature2));
});

suite
    .on('cycle', e => console.log(String(e.target)))
    .on('complete', () => {})
    .run();
