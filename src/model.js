export class RequestSender {
    constructor() {}
  
    sendJSONRequest() {
      return $.getJSON('https://usersdogs.dmytrominochkin.cloud/dogs');
    }
}