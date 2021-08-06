import { spawn } from './spawn';
import yargs from 'yargs';

const hasEnv = Boolean(yargs.argv.env);
const env = hasEnv ? String(yargs.argv.env) : 'default';
const projectName = hasEnv ? env : 'sale-counter';

spawn('docker', ['image', 'build', '-t', projectName, '.', '--build-arg', projectName], 'cannot build docker');
