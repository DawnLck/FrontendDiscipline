/**
 * Input 拿出牌的顺序 1,2,3,4,5,6,7,8,9,10,11,12,13
 * Output 牌堆原来的顺序
 */
function getCardsOrder(input, cards) {
  //Swap
  if (cards.length) {
    let popCard = cards.pop();
    cards.unshift(popCard);
  }

  //Push
  let popItem = input.pop();
  cards.unshift(popItem);

  console.log(`Popitem: ${popItem}`);
  console.log(`inputAfterPop: ${input}`);
  console.log(`Cards ${cards}`);
  console.log("");

  if (input.length == 0) {
    return cards;
  } else {
    return getCardsOrder(input, cards);
  }
}
let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let test = [1, 3, 5, 4, 2]; //1,2,3,4,5
let test2 = [1, 3, 2]; //1,2,3
let callback = getCardsOrder(input, []);
console.log(callback.toString());

function getCardsOrder(output) {
  const input = [];
  let startIndex = 0,
    endIndex = output.length - 1;
  while (startIndex <= endIndex) {
    if (startIndex === endIndex) {
      input.push(output[endIndex]);
      break;
    }
    input.push(output[startIndex], output[endIndex]);
    startIndex++;
    endIndex--;
  }
  return input;
}
console.log(getCardsOrder(input).toString());
