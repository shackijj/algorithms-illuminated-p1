import {AdjList} from '../src/kargerMinCut';

describe('AdjList', () => {
    it('takes a string', () => {
        const input = [
            '1 2 3',
            '2 3 1',
            '3 1 2'
        ].join('\n');

        expect((new AdjList(input)).toString()).toEqual(
            'vertices: [[1,2],[1,3],[2,3]] edges: [[1,2],[1,3],[2,3]]');
    });
});

describe('kargerMinCut', () => {

});