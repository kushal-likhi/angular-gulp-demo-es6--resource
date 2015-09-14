export default ['$resource', function ($resource) {
  //Because the server runs on other port in this demo, hence used full url. Use relative if all on same server.
  return $resource('http://localhost:9635/item/:id', { id: '@id' },
    {
      update: {method: 'PUT'}
    }
  );
}];
