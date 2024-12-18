public with sharing class IMDBController1 {
  @AuraEnabled(cacheable=true)
  public static String getMovies(String searchText) {
    // Create an HTTP request
    HttpRequest request = new HttpRequest();
    // Remote Site Settings
    // request.setEndpoint(
    //   'https://api.collectapi.com/imdb/imdbSearchByName?query=' + searchText
    // );
    // Named Credentials
    request.setEndpoint(
      'callout:IMDB/imdb/imdbSearchByName?query=' + searchText
    );
    request.setMethod('GET'); // Or 'POST', 'PUT', 'DELETE', etc.

    // Optionally, set headers, reques body, etc.
    // request.setHeader('Content-Type', 'application/json');
    // Remote Site Settings
    // request.setHeader(
    //   'authorization',
    //   'apikey 2lcEKM3fozUdtBsUrEjQ9F:57xKPz6Jw7nr1fZeNhK7Sx'
    // );
    // request.setBody('{"key": "value"}');

    // Create an HTTP object to send the request
    Http http = new Http();

    try {
      // Send the request and get the response
      HttpResponse response = http.send(request);

      // Handle the response
      if (response.getStatusCode() == 200) {
        // Successful response
        String responseBody = response.getBody();
        // Process the response body as needed
        return responseBody;
      } else {
        // Handle unsuccessful response
        String errorMessage =
          'Error: ' +
          response.getStatusCode() +
          ' - ' +
          response.getStatus();
        return errorMessage;
      }
    } catch (Exception e) {
      // Handle exceptions
      return 'Exception: ' + e.getMessage();
    }
  }
}