#!/usr/bin/node

const clc = require("./node_modules/alexcolor/alexcolor/index");
const axios = require("axios");
const argv = process.argv;

const log = (data) => {
    console.log(data);
};

function logTime(data){
    const date = new Date();
    console.log(`${clc.green("[")}${clc.yellow(date.getHours())}${clc.yellow(":")}${clc.yellow(date.getMinutes())}${clc.yellow(":")}${clc.yellow(date.getSeconds())}${clc.green("]")} ${data}`);
};

var method = "GET";

if (argv.includes("-u")){
    const url = argv[argv.indexOf("-u")+1];

    if (url === undefined){
        logTime("Url Cannot be Empty");
        process.exit();
    }else{
        if (!argv.includes("-m")){
            logTime(`Url detected ${clc.red("'"+url+"'")}`);
            logTime("Try to make connection ...");
            try{
                const axConst = new axios.Axios(method);
                axConst.get(url).then((resp) => {
                    log(resp.data);
                })
            }catch (error){
                logTime(`Error: ${clc.red("'"+error+"'")}`);
            }
        }else{
            logTime("Method Flag captured, try to get ...");
            const mt = argv[argv.indexOf("-m")+1];
            if (mt === undefined){
                logTime(`${clc.red("Cannot")} get method`);
                logTime(`Continue with ${clc.green(method)}`);
                logTime(`Url detected ${clc.red("'"+url+"'")}`);
                logTime("Try to make connection ...");
                try{
                    const axConst = new axios.Axios(method);
                    axConst.get(url).then((resp) => {
                        log(resp.data);
                    })
                }catch (error){
                    logTime(`Error: ${clc.red("'"+error+"'")}`);
                }   
            }else{
                logTime(`Method Captured ${clc.green(mt)}`);
                method = mt;
                logTime(`Url detected ${clc.red("'"+url+"'")}`);
                logTime("Try to make connection ...");
                try{
                    const axConst = new axios.Axios(method);
                    axConst.get(url).then((resp) => {
                        log(resp.data);
                    })
                }catch (error){
                    logTime(`Error: ${"'"+clc.red(error)+"'"}`);
                }   
            }
        }
    }
}else{
    logTime("Url flag was not call");
    process.exit();
}
