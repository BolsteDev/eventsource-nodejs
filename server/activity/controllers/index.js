export default (app) => {
  app.route('/activity')
    .all((request, response, next) => {
      response.writeHead(
        200,
        {
          'Content-Type':'text/event-stream',
          'Cache-Control':'no-cache',
          'Connection':'keep-alive',
          'Transfer-Encoding': 'identity',
        }
      );

      response.write('retry: 10000\n');
      response.write('event: connecttime\n\n');
      response.write('id: ' + (new Date()) + '\n');
      response.write('data: first message\n\n');
      response.write('id: ' + (new Date()) + '\n');
      response.write('data: second message\n\n');

      const interval = setInterval(function() {
        response.write('id: ' + (new Date()) + '\n');
        response.write('data: ' + (new Date()) + '\n\n');
      }, 1000);

      request.connection.addListener('close', function () {
        clearInterval(interval);
      }, false);
    });
}
