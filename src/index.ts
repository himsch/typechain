class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(
  0,
  "202020202020202",
  "",
  "Hello",
  123455
);

// 변수를 block 타입 Array 생성 후 그 안에 genesisBlock 넣는다.
let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

export {};
