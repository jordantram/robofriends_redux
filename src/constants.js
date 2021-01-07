export const CHANGE_SEARCHFIELD = 'CHANGE_SEARCHFIELD';

// 3 actions because a promise is returned when we make fetch to request robots
// and promises can have 3 states
export const REQUEST_ROBOTS_PENDING = 'REQUEST_ROBOTS_PENDING';
export const REQUEST_ROBOTS_SUCCESS = 'REQUEST_ROBOTS_SUCCESS';
export const REQUEST_ROBOTS_FAILED = 'REQUEST_ROBOTS_FAILED';