document.addEventListener("DOMContentLoaded", () => {
  console.log("search.js 読み込まれた");


  // const searchInput = document.getElementById("search");
  // const resultsBox = document.getElementById("search-results");

  // if (!searchInput || !resultsBox) return;

  // searchInput.addEventListener("input", () => {
  //   const keyword = searchInput.value.trim();
  //   resultsBox.innerHTML = "";

  //   if (keyword === "") return;

  //   const memos = document.querySelectorAll(".memo");

  //   memos.forEach(memo => {
  //     const tags = memo.dataset.tags?.split(",") || [];

  //     if (tags.includes(keyword)) {
  //       const title =
  //         memo.querySelector("h3, h2, p")?.textContent || "タイトルなし";

  //       const id = memo.id;

  //       const link = document.createElement("a");
  //       link.href = "#" + id;
  //       link.textContent = title;
  //       link.style.display = "block";

  //       resultsBox.appendChild(link);
  //     }
  //   });
  // });

});