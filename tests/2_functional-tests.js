/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       
*/
process.env.NODE_ENV === "test"
const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');
const Book = require('../model/Book');

chai.use(chaiHttp);

suite('Functional Tests', function() {
	this.beforeEach(async()=>{
		await Book.remove({});
	})
  /*
  * ----[EXAMPLE TEST]----
  * Each test should completely test the response of the API end-point including response status code!
  */
  test('#example Test GET /api/books', function(done){
     chai.request(server)
      .get('/api/books')
      .end(function(err, res){
        assert.equal(res.status, 200);
        assert.isArray(res.body, 'response should be an array');
        assert.property(res.body[0], 'commentcount', 'Books in array should contain commentcount');
        assert.property(res.body[0], 'title', 'Books in array should contain title');
        assert.property(res.body[0], '_id', 'Books in array should contain _id');
        done();
      });
  });
  /*
  * ----[END of EXAMPLE TEST]----
  */

  suite('Routing tests', function() {


    suite.only('POST /api/books with title => create book object/expect book object', function() {
      
      test('Test POST /api/books with title', function(done) {
				let book = new Book({title:'TEST_BOOK'});
				chai.request(server)
				.post('/api/books')
				.send(book)
				.end(function(err, res){
					assert.equal(res.status, 200);
					assert.isObject(res.body, 'response should be an object');
					assert.property(res.body, 'title', 'Book should contain title');
					assert.propertyVal(res.body, 'title', 'TEST_BOOK','Books in array should contain title');
					assert.property(res.body, '_id', 'Books should contain _id');
					// assert.propertyVal(res.body, '_id', `${book._id}`,'Books _id should be equal to book');
					done();
				});
      });
      
      test('Test POST /api/books with no title given', function(done) {
				chai.request(server)
				.post('/api/books')
				.send({})
				.end(function(err, res){
					assert.equal(res.status, 200);
					assert.equal(res.text, 'missing required field title');
					done();
				});
      });
      
    });


    suite('GET /api/books => array of books', function(){
      
      test('Test GET /api/books',  function(done){
        //done();
      });      
      
    });


    suite('GET /api/books/[id] => book object with [id]', function(){
      
      test('Test GET /api/books/[id] with id not in db',  function(done){
        //done();
      });
      
      test('Test GET /api/books/[id] with valid id in db',  function(done){
        //done();
      });
      
    });


    suite('POST /api/books/[id] => add comment/expect book object with id', function(){
      
      test('Test POST /api/books/[id] with comment', function(done){
        //done();
      });

      test('Test POST /api/books/[id] without comment field', function(done){
        //done();
      });

      test('Test POST /api/books/[id] with comment, id not in db', function(done){
        //done();
      });
      
    });

    suite('DELETE /api/books/[id] => delete book object id', function() {

      test('Test DELETE /api/books/[id] with valid id in db', function(done){
        //done();
      });

      test('Test DELETE /api/books/[id] with  id not in db', function(done){
        //done();
      });

    });

  });

});
