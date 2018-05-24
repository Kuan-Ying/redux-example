import { createSelector } from 'reselect';

export const countValueSelector = store => store.count.value;

export const countSelector = createSelector(
    [
        countValueSelector, 
    ],
    (count) => 2 * count
);