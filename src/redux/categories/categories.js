const CHECK_STATUS = 'CHECK_STATUS';

const checkStatusReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return state.filter((category) => category.id === action.id);

    default:
      return state;
  }
};

const nextCategoryId = 0;

export const checkStatus = () => ({
  type: CHECK_STATUS,
  id: nextCategoryId + 1,
});

export default checkStatusReducer;
