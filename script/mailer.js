// send message using nodemailer server.

// handle form submition
let url = "https://mailer-3axrrk5k3a-uc.a.run.app/";
async function submitHandler() {
  //user inputs
  const senderName = document.querySelector("#userName").value;
  const senderEmail = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  const mailObject = {
    name: senderName,
    email: senderEmail,
    message: message,
  };
  // call mailer
  mailer(mailObject).then((data) => {
    alert(data);
  });
}
// fetch nodemailer server
async function mailer(object) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });
  return res.text();
}
