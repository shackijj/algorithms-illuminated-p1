import {AdjList} from '../src/kargerMinCut';

describe('AdjList', () => {
    let adjList: AdjList;

    beforeEach(() => {
        const input = [
            '1 2 3',
            '2 3 1',
            '3 1 2'
        ].join('\n');

        adjList = new AdjList(input);
    });

    describe('#toString', () => {
        it('shold return an array of vertices and an array of edges', () => {
            expect(adjList.toString()).toEqual(
                'vertices: [[1,2],[1,3],[2,3]] edges: [[1,2],[1,3],[2,3]]');
        });
    });

    describe('#getEdgeCount', () => {
        it('shold return an array of vertices and an array of edges', () => {
            expect(adjList.getEdgeCount()).toEqual(3);
        });
    });

    describe('#getVerticesCount', () => {
        it('shold return an array of vertices and an array of edges', () => {
            expect(adjList.getVerticesCount()).toEqual(3);
        });
    });

    describe('#contractEdge', () => {
        describe('given that 1st edge is contracted', () => {
            beforeEach(() => {
                adjList.contractEdge(0);
            });

            it('should merge vertives 1 and 2 and delete self-loops', () => {
                expect(adjList.toString()).toEqual(
                    'vertices: [[2,3],null,[2,3]] edges: [null,[1,3],[1,3]]');
            });

            it('should have 2 vertices', () => {
                expect(adjList.getVerticesCount()).toEqual(2);
            });

            it('should have 2 edges', () => {
                expect(adjList.getEdgeCount()).toEqual(2);
            });
        });
        describe('given that 2nd edge is contracted', () => {
            beforeEach(() => {
                adjList.contractEdge(1);
            });

            it('should merge vertives 1 and 2 and delete self-loops', () => {
                expect(adjList.toString()).toEqual(
                    'vertices: [[1,3],[1,3],null] edges: [[1,2],null,[1,2]]');
            });

            it('should have 2 vertices', () => {
                expect(adjList.getVerticesCount()).toEqual(2);
            });

            it('should have 2 edges', () => {
                expect(adjList.getEdgeCount()).toEqual(2);
            });
        });
    });
});

describe('kargerMinCut', () => {

});