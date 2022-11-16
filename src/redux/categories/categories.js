const CHECK_STATUS = 'CHECK_STATUS';

const checkStatusReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return action.payload;

    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
  payload: 'Check Status',
});

export default checkStatusReducer;
