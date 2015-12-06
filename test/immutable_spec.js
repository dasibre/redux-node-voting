import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('immutability', () => {
  describe('A tree', () => {
    function addMovie(currentState,movie) {
      return currentState.update('movies', (movies) => movies.push(movie));
    }

    it('is immutable', () => {
      let state = Map({movies: List.of('Trainspotting', 'Matrix')});
      let nextState = addMovie(state,'Sunshine');

      expect(nextState).to.equal(Map({movies: List.of('Trainspotting', 'Matrix', 'Sunshine')}));
      expect(state).to.equal(Map({movies: List.of('Trainspotting', 'Matrix')}));
    })
  })
  describe('A List', () => {
    function addMovie(currentState,movie) {
      return currentState.push(movie);
    }

    it('is immutable', () => {
      let state = List.of('Trainspotting', '28 days Later');
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(List.of('Trainspotting', '28 days Later', 'Sunshine'));
      expect(state).to.equal(List.of('Trainspotting', '28 days Later'));
    });
  });
  describe('a number', () => {
    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });
  });
});
