export const useCountProvider = () => {
  // state
  const countState = {
    count: 0
  }
  //action
  const increment = () => {
    countState.count++;
  }

  const decrement = () => {
    countState.count--;
  }

  return { countState, increment, decrement }
}
