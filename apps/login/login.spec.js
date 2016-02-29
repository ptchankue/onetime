//git pull --rebase
describe('example test', function() {
    it('should be true', function() {
        expect('foo').toBe('foo');
    });
});
describe('sorting the list of users', function() {
  it('should sort in descending order by default', function() {
    var users = ['jack', 'igor', 'jeff'];

    var sorted = users.sort();
    //var sorted = fruits.reverse();
    console.log(sorted.reverse());
    expect(sorted).toEqual(['jeff', 'jack', 'igor']);
  });
});
