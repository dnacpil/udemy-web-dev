const fs = require("fs");
const os = require("os");

const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    this.emit("message", { message }); //emit is an in-built method to broadcast that an event has happened
  }
}

const logger = new Logger();
const logFile = "./eventlog.txt";

const logToFile = (event) => {
  const logMessage = `${new Date().toISOString()} - ${event.message} \n`;
  //toISOString makes it into an "international" format
  fs.appendFileSync(logFile, logMessage);
};
//.on is contantly listening for the message, after listening to "message" event, the logToFile will run
logger.on("message", logToFile);

//below is to execute the event of finidng out how much memory is used - it executes the code every 3 secs
setInterval(() => {
  const memoryUsage = (os.freemem() / os.totalmem()) * 100; //multiplied to give the percentage
  logger.log(`Current memory usage: ${memoryUsage.toFixed(2)}`);
}, 3000);

logger.log("Application started");
logger.log("Application event occurred");
