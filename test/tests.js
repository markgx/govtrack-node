var govTrack = require('../lib/govtrack-node');

describe('findBill()', function() {
  this.timeout(10000);

  it('should return a bill when passed a valid id', function(done) {
    govTrack.findBill(256509, function(err, res) {
      res.id.should.equal(256509);
      res.should.have.property('number').with.a('number');
      res.should.have.property('title').with.a('string');
      done();
    });
  });

  it('should search by valid parameter', function(done) {
    govTrack.findBill({ congress: 113 }, function(err, res) {
      res.objects.length.should.be.above(0);
      res.objects[0].should.have.property('bill_type');
      res.objects[0].congress.should.equal(113);
      done();
    });
  });

  it('should handle error');
});

describe('findCosponsorship()', function() {
  this.timeout(10000);

  it('should return a cosponsorship when passed a valid id', function(done) {
    govTrack.findCosponsorship(50000, function(err, res) {
      res.id.should.equal(50000);
      res.should.have.property('bill');
      res.should.have.property('person');
      done();
    });
  });
});

describe('findPerson()', function() {
  this.timeout(10000);

  it('should return a person when passed a valid id', function(done) {
    govTrack.findPerson(412200, function(err, res) {
      res.id.should.equal(412200);
      res.should.have.property('name');
      res.roles.should.be.a('object');
      res.roles[0].should.have.property('congress_numbers');
      done();
    });
  });

  it('should search by valid parameter', function(done) {
    govTrack.findPerson({ lastname: 'kennedy' }, function(err, res) {
      res.objects[0].lastname.toLowerCase().should.equal('kennedy');
      done();
    });
  });

  it('should handle error response', function(done) {
    govTrack.findPerson({ badarg: 'blah' }, function(err, res) {
      err.should.not.eql(null);
      done();
    })
  })
});

describe('findRole()', function() {
  this.timeout(10000);

  it('should return a role when passed a valid id', function(done) {
    govTrack.findRole(42050, function(err, res) {
      res.id.should.equal(42050);
      res.should.have.property('role_type');
      res.should.have.property('startdate');
      res.should.have.property('person');
      done();
    })
  });
});

describe('findVote()', function() {
  this.timeout(10000);

  it('should return a vote when passed a valid id', function(done) {
    govTrack.findVote(50000, function(err, res) {
      res.id.should.equal(50000);
      res.should.have.property('category');
      res.should.have.property('chamber');
      res.should.have.property('congress');
      res.should.have.property('result');
      done();
    })
  });
});

describe('findVoteVoter()', function() {
  this.timeout(10000);

  it('should return a vote voter when passed a valid id', function(done) {
    govTrack.findVoteVoter(28927519, function(err, res) {
      res.id.should.equal(28927519);
      res.should.have.property('person').with.a('object');
      res.should.have.property('vote').with.a('object');
      res.should.have.property('voter_type');
      done();
    });

  });
});
