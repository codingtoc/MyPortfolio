public with sharing class WeatherAPI {
  @AuraEnabled
  public static string getCurrentWeather(String location) {
    try {
      HttpRequest req = new HttpRequest();
      req.setEndpoint('callout:WeatherAPI/current.json?q=' + location);
      req.setMethod('GET');
      Http http = new Http();
      HTTPResponse res = http.send(req);
      return res.getBody();
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
}