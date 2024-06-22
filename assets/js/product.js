
// dynamic
const products = [
  {
    id: 1,
    pName: "MAXIMAL MINI MAC SILKY MATTE LIPSTICK",
    description: "$16.00",
    img: "../assets/images/mac_sku_SW4H70_124x163_0.avif",
  },
  {
    id: 2,
    pName: "Gently Off Wipes + Micellar Water / Mini MAC",
    description: "$18.00",
    img: "../assets/images/mac_sku_SRAY01_124x163_0.webp",
  },
  {
    id: 3,
    pName: "MAGIC EXTENSION MASCARA/MINI M.A.C",
    description: "$15.00",
    img: "../assets/images/mac_sku_SYH901_124x163_0.avif",
  },
];

const productsContainer = document.getElementById("products");

products.map((item) => {
  const elementCard = document.createElement("div");
  elementCard.classList.add("col-md-2");
  elementCard.innerHTML = ` 
      <div class="card-body">
        <a class="link-dark" href="#">
        <img
        src=${item.img}
        alt=""
        class="product-image"
      />
        </a>
        <h6>${item.pName}</h6>
        <p>${item.description}</p>
    <button class="bg-black links-footer">
            <a href="#" class="btn fs-6 p-3 text-white">ADD TO BAG</a>
          </button>
    </div>`;
  productsContainer.appendChild(elementCard);
});
