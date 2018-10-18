import {AdjList, kargerMinCut} from '../src/kargerMinCut';

describe('AdjList', () => {
    let adjList: AdjList;

    describe('a simple graph', () => {
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

    describe('given other simple graph', () => {
        beforeEach(() => {
            const input = [
                '1 2 3 4',
                '2 1 4',
                '3 1 4',
                '4 1 2 3'
            ].join('\n');
    
            adjList = new AdjList(input);
        });
        describe('#toString', () => {
            it('shold return an array of vertices and an array of edges', () => {
                expect(adjList.toString()).toEqual(
                    'vertices: [[1,2,3],[1,4],[2,5],[3,4,5]] edges: [[1,2],[1,3],[1,4],[2,4],[3,4]]');
            });
        });

        it('should have 4 vertices', () => {
            expect(adjList.getVerticesCount()).toEqual(4);
        });

        it('should have 5 edges', () => {
            expect(adjList.getEdgeCount()).toEqual(5);
        });

        describe('given that 2nd edge is contracted', () => {
            beforeEach(() => {
                adjList.contractEdge(2);
            });

            it('should merge vertices 1 and 4 and delete self-loops', () => {
                expect(adjList.toString()).toEqual(
                    'vertices: [[1,2,4,5],[1,4],[2,5],null] edges: [[1,2],[1,3],null,[1,2],[1,3]]');
            });

            it('should have 3 vertices', () => {
                expect(adjList.getVerticesCount()).toEqual(3);
            });

            it('should have 4 edges', () => {
                expect(adjList.getEdgeCount()).toEqual(4);
            });
        });
    });
});

describe('kargerMinCut', () => {
    const input = [
        '1 2 3',
        '2 3 1',
        '3 1 2'
    ].join('\n');

    it('should return a number', () => {
        const actual = kargerMinCut(input)
        expect(typeof actual).toEqual('number');
    });
});