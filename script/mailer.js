// send message using nodemailer server.

// handle form submition
let url = "https://mailer-3axrrk5k3a-uc.a.run.app/";
function submitHandler(target) {
  target.preventDefault();
  //user inputs
  console.log("sending message");
  const senderName = document.querySelector("#userName").value;
  const senderEmail = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  const mailObject = {
    name: senderName,
    email: senderEmail,
    message: message,
  };
  // call mailer
  mailer(mailObject).then((res) => {
    if (res === "success") {
      localStorage.setItem("note", "Thank you for completing the form.");
      alert("Thank you, your message is sent");
      window.location = "https://iamlok.com/#contact";
    }
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
