export class BaseLogger {
  log(data) {
    console.log("Default logger : " + data);
  }
}

// inherit etme işlemi
// baselogger içindeki tüm operasyonlara extends ettiğimiz yerlerde sahip oluyoruz.
export class ElasticLogger extends BaseLogger {
  // eğer burada log operasyonunu yazmazsak baselogger da olduğu için yine buna sahip olur
  // eğer burada log operasyonunu yazarsak bu sefer baseloggerdakini ezmiş oluruz
  log(data) {
    console.log("Logged to Elastic " + data);
  }
}

export class MongoLogger extends BaseLogger {
  log(data) {
    console.log("Logged to Mongo " + data);
  }
}
