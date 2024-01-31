const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

storeBtn.addEventListener("click", () => {
  const userId = "u123";
  const user = {
    name: "hba",
    age: 28,
  };
  document.cookie = `uid=${userId}`;
  document.cookie = `user=${JSON.stringify(user)}`;
});
retrBtn.addEventListener("click", () => {
  const cookieData = document.cookie.split(";");
  const data = cookieData.map((i) => {
    return i.trim();
  });
  console.log(data);
});
