const exec = require('child_process').exec;
const argv = require('yargs')
    .alias('c', 'component')
    .argv;

let component = argv.component;
const projectRoot = __dirname + '/../';

// rollup -c (--config), move configuration into rollup.config.js
// --source passed here is handled by yargs (custom para)
const cmd = exec(`yarn rollup -c --gel-component=${component}`,
    { cwd: projectRoot });

cmd.stdout.pipe(process.stdout);
cmd.stderr.pipe(process.stderr);
cmd.on('exit', code => process.exit(code));