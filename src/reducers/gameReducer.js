export default function gameReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_GAME':
      return [...state,
        Object.assign({}, action.game)
      ];

    default:
      return state;
  }
}
