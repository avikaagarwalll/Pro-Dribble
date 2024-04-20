

const sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  // Here you would add your server-side code to send the verification email
  console.log(`Verification email sent to ${email}`);
});