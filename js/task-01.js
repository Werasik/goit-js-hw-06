const categories = document.querySelector("#categories");
const categoriesLiItems = categories.querySelectorAll("li.item");
categoriesLiItems.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const liAmmount = item.querySelectorAll("li").length;
  console.log("Category:", title);
  console.log("Elements:", liAmmount);
});
