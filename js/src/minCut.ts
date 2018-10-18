import {kargerMinCut} from './kargerMinCut';
import * as fs from 'fs';

const str = fs.readFileSync('./test/data/kargerMinCut.txt', 'utf-8')

console.log(kargerMinCut(str));