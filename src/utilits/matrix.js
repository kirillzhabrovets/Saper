import {createBox} from "./box";
import {generateRandom} from "./getRandom";

export let matrix = [];

function addBombs(bombCount) {
  let currentBombCount = bombCount;

  const matrixHeight = matrix.length,
        matrixWidth = matrix[0].length;

  while (currentBombCount) {
    const x = generateRandom(0, matrixWidth - 1),
          y = generateRandom(0, matrixHeight - 1);

    const matrixElem = matrix[y][x];

    if (!matrixElem) {
      matrix[y][x] = 1;
      currentBombCount--;
    }
  }
}


export function getAllNeighbors(coordinates) {
  const { x, y } = coordinates;

  const n_1 = matrix[y - 1]?.[x];
  const n_2 = matrix[y - 1]?.[x + 1];
  const n_3 = matrix[y]?.[x + 1];
  const n_4 = matrix[y + 1]?.[x + 1];
  const n_5 = matrix[y + 1]?.[x];
  const n_6 = matrix[y + 1]?.[x - 1];
  const n_7 = matrix[y]?.[x - 1];
  const n_8 = matrix[y - 1]?.[x - 1];
  const n_9 = matrix[y - 1]?.[x];
  const n_10 = matrix[y - 1]?.[x + 1];
  const n_11 = matrix[y]?.[x + 1];
  const n_12 = matrix[y + 1]?.[x + 1];
  const n_13 = matrix[y + 1]?.[x];
  const n_14 = matrix[y + 1]?.[x - 1];
  const n_15 = matrix[y]?.[x - 1];
  const n_16 = matrix[y - 1]?.[x - 1];


  return [n_1, n_2, n_3, n_4, n_5, n_6, n_7, n_8, n_9, n_10, n_11, n_12, n_13, n_14, n_15, n_16].filter(
    (item) => typeof item !== "undefined"
  );
}


export function openAllBoxes() {
  matrix.forEach((matrixLine) => {
    matrixLine.forEach((box) => {
      if (box.isBomb) {
        box.open();
      }
    });
  });
}

export function createMatrix(width = 16, height = 16, bombCount = 20) {
  matrix = Array.from({length: height}, () =>
    Array.from({length: width}, () => 0)
  );

  addBombs(bombCount);

  matrix.forEach((matrixLine, y) => {
    matrixLine.forEach((matrixElem, x) => {
      const newBox = createBox(Boolean(matrixElem), {x, y});

      matrix[y][x] = newBox;
    });
  });
}
