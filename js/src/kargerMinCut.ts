type Edge = number[] | null;
type Vertex = number[] | null;

class AdjList {
    private edges: Edge[];
    private vertices: Vertex[];
    private edgeCount: number;
    private verticesCount: number;
    constructor(str: string) {
        this.edges = [];
        this.vertices = [];
        this.edgeCount = 0;
        this.verticesCount = 0;
        this._parseGraphString(str);
    }
    public toString(): string {
        const toJson = JSON.stringify;
        this.vertices.forEach(this._sortIfNotNull)
        this.edges.forEach(this._sortIfNotNull)
        return `vertices: ${toJson(this.vertices)} edges: ${toJson(this.edges)}`;
    }
    public getEdgeCount(): number {
        return this.edgeCount;
    }
    public getVerticesCount(): number {
        return this.verticesCount;
    }
    public contractEdge(idx: number = this._getRandomEdgeIdx()) {
        if (this.edges[idx] === null) {
            throw new Error('Trying to contract a deleted edge');
        }
        const [v1num, v2num] = this.edges[idx] as number[];
        this.edges[idx] = null;
        const deletedEdgeNum = idx + 1;
        this.edgeCount--;
        const v1idx = v1num - 1;
        const v2idx = v2num - 1;
        // here should be a security check
        const v1 = this.vertices[v1idx] as number[];
        const v2 = this.vertices[v2idx] as number[];
        let superVertex = v1.concat(v2).filter((edge) => deletedEdgeNum !== edge);
        this.vertices[v2idx] = null;
        this.vertices[v1idx] = superVertex;
        this.verticesCount--;

        for (let edgeNum of v2) {
            if (edgeNum !== deletedEdgeNum) {
                const edge = this.edges[edgeNum - 1] as number[];
                const oldVertexIndex = edge.findIndex(vertexNum => vertexNum === v2num);
                edge[oldVertexIndex] = v1num;
            }
        }
        // merge edges for the v1
    }
    private _getRandomEdgeIdx(): number {
        let indexes: number[] = [];
        this.edges.forEach((val, idx) => {
            if (val !== null) {
                indexes.push(idx);
            }
        });
        const len = indexes.length;
        return indexes[Math.floor(Math.random() * (len - 1))];
    }
    private _sortIfNotNull(graphEl: Edge | Vertex) {
        if (graphEl !== null) {
            graphEl.sort()
        }
    }
    private _areVerticesConnected(v1num: number, v2num: number): boolean {
        if (this.vertices[v1num - 1] === null || this.vertices[v2num - 1] === null) {
            throw new Error('Trying to check a deleted vertex');
        }
        const v1 = this.vertices[v1num - 1] as number[];
        for (let edgeNum of v1) {
            const edge = this.edges[edgeNum - 1] as number[];
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
            this.verticesCount++;
        }

        for (let adjVertexNum of adjacentVertices) {
            const adjVertexIdx = adjVertexNum - 1;
            let adjVertex = this.vertices[adjVertexIdx];
            if (!adjVertex) {
                this.verticesCount++;
                adjVertex = [];
                this.vertices[adjVertexIdx] = adjVertex;
            }
            if (!this._areVerticesConnected(vertexNum, adjVertexNum)) {
                this.edgeCount++;
                let newEdgeIdx = this.edges.length;
                let newEdgeNum = newEdgeIdx + 1;
                let newEdge = [vertexNum, adjVertexNum];
                this.edges[newEdgeIdx] = newEdge;
                (vertex as number[]).push(newEdgeNum);
                adjVertex.push(newEdgeNum);
            }
        }
    }
}

function kargerMinCut(adjMatrixStr: string): number {
    let adjList = new AdjList(adjMatrixStr);
    const timesToRun = Math.pow(adjList.getVerticesCount(), 3)
    let min = null;
    for(let i = 0; i < timesToRun; i++) {
        while(adjList.getVerticesCount() > 2) {
            adjList.contractEdge();
        }
        let curCount = adjList.getEdgeCount();
        if (min === null) {
            min = curCount
        } else {
            if (curCount < min) {
                min = curCount;
            }
        }
        adjList = new AdjList(adjMatrixStr)
    }
    return <number> min;
}

export {AdjList, kargerMinCut}
