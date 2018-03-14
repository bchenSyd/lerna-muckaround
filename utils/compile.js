const exec = require('child_process').exec;
const argv = require('yargs')
    .alias('c', 'component')
    .argv;

let component = argv.component;
const projectRoot = __dirname + '/../';
const packagePath = `packages/${component}/`;

const cmd = exec(`yarn babel ${packagePath}/src --out-dir ${packagePath}/dist`,
    { cwd: `${__dirname}/../` });

cmd.stdout.pipe(process.stdout);
cmd.stderr.pipe(process.stderr);
cmd.on('exit', code => process.exit(code));