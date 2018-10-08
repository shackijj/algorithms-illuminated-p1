type Edge = number[];
type Vertex = number[];

class AdjList {
    private edges: Edge[];
    private vertices: Vertex[];

    constructor(str: string) {
        this.edges = [];
        this.vertices = [];
        this._parseGraphString(str);
    }
    public toString(): string {
        const toJson = JSON.stringify;
        return `vertices: ${toJson(this.vertices)} edges: ${toJson(this.edges)}`;
    }
    private _areVerticesConnected(v1num: number, v2num: number): boolean {
        const v1 = this.vertices[v1num - 1];
        for (let edgeNum of v1) {
            const edge = this.edges[edgeNum - 1];
            if (edge.indexOf(v2num) > -1) {
                return true;
            }
        }
        return false;
    }
    private _parseGraphString(str: string): void {
        const lines = str.split('\n');
        for (let line of lines) {
            const [vertexNum, ...adjacentVertices] = line.split(' ').map(Number);
            this._initVertex(vertexNum, adjacentVertices);
        }
    }
    private _initVertex(vertexNum: number, adjacentVertices: number[]): void {
        const vertexIdx = vertexNum - 1;
        let vertex = this.vertices[vertexIdx];
        if (vertex === undefined) {
            vertex = [];
            this.vertices[vertexIdx] = vertex;
        }

        for (let adjVertexNum of adjacentVertices) {
            const adjVertexIdx = adjVertexNum - 1;
            let adjVertex = this.vertices[adjVertexIdx];
            if (!adjVertex) {
                adjVertex = [];
                this.vertices[adjVertexIdx] = adjVertex;
            }
            if (!this._areVerticesConnected(vertexNum, adjVertexNum)) {
                let newEdgeIdx = this.edges.length;
                let newEdgeNum = newEdgeIdx + 1;
                let newEdge = [vertexNum, adjVertexNum];
                this.edges[newEdgeIdx] = newEdge;
                vertex.push(newEdgeNum);
                adjVertex.push(newEdgeNum);
            }
        }
    }
}

export {AdjList}