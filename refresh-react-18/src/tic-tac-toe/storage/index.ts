export const saveGame = (board: any, turn: any) => {
  window.localStorage.setItem('board', JSON.stringify(board));
  window.localStorage.setItem('turn', JSON.stringify(turn));
}

export const resetGameStorage = () => {
  window.localStorage.removeItem('board');
  window.localStorage.removeItem('turn');
}