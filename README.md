# ng2_gulp
gulpfile for ng2 and typescript
* npm init [entry point: (index.js) gulpfile.js]
* just once per box: (sudo) npm install -g gulp
* npm install gulp gulp-typescript gulp-sourcemaps --save-dev
* npm install browser-sync superstatic --save-dev (has some errors but runs through)

* [tslint.json](https://github.com/palantir/tslint/blob/master/docs/sample.tslint.json)

* tsconfig.json
        <pre><code>
        {
            "compilerOptions": {
                "target": "es5",
                "module": "commonjs",
                "declaration": false,
                "noImplicitAny": false,
                "removeComments": true,
                "noLib": false,
                "emitDecoratorMetadata": true,
                "experimentalDecorators": true
            },
            
            "filesGlob": [ 
                "./**/*.ts" 
            ],
            "files": [
        
            ],
            "exclude": [
                "node_modules"
            ]
        }
        </code></pre>

* gulp.config.js
        <pre><code>
        module.exports = function () {
            var config = {
                all_ts = './app/**/*.ts',
                typings: './typings/**/*.d.ts',
                tsOutputPath: '/app/'    
            };
            return config;
        }
        </code></pre>

* gulpfile.js
