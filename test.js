const nodemailer = require('nodemailer');
const email = {
  "host": "",
  "port": "",
  "secure": false,
  "auth": {
    "user": "",
    "pass": ""
  }
}

const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if(error) {
      console.log(error);
    } else {
      console.log(info);
      return info.response;
    }
  }); 
};

let email_data = {
  from: "evanpark333@gmail.com",
  to: "crosi1157@naver.com",
  subject: "테스트 메일 입니다.",
  text: "node.js 한시만에 끝내보자"
}

send(email_data);