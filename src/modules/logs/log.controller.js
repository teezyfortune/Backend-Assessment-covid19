const path = require("path");
const fs = require("fs");

exports.loggerResponse = (req, res) => {
    fs.readFile(path.join(__dirname, '../../logs.txt'), (err, data) => {
        const val = data.toString().split("\n").filter(log => log !== "").join("\n")
        res.type("text/plain");
      return  res.send(val) 
    });
};


