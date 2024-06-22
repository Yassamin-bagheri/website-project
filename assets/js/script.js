const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");
const item5 = document.getElementById("item5");
const item6 = document.getElementById("item6");
const item7 = document.getElementById("item7");
const item8 = document.getElementById("item8");
const item9 = document.getElementById("item9");

const details = document.querySelector(".details");

item1.addEventListener("mouseover", () => {
  details.innerHTML = `
    <div class="container-fluid justify-content-center align-items-center d-flex">
                <div class="row d-flex">
                    <div class="col-sm-12 col-md-3">
                    <ul>
                    <li><a href="#">ABOUT M·A·C</a></li>
                    <li><a href="#">M·A·C TREND</a></li>
                    <li><a href="#">Artist Looks</a></li>
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">M·A·C Cares</a></li>
                    <li><a href="#">Conscious Beauty</a></li>
                    <li><a href="#">Inclusion and Diversity</a></li>
                    <li><a href="#">TRENDING PRODUCTS</a></li>
                </ul>
                    </div>
                    <div class="col-sm-12 col-md-3">
                    <img class="w-100" src="./assets/images/trend3.jpg" alt="">
                    <h6 class="mt-3">NOW TRENDING: CHESTNUT MAKEUP</h6>
                    <p>Read up on the latest beauty trend that’s turning heads all over the world – created by you, curated by us.</p>
                    <a class="fs-6 link-dark" href="#">EXPLORE NOW</a>
                    
                    </div>
                    <div class="col-sm-12 col-md-3">
                    <img class="w-100" src="./assets/images/trend2.avif" alt="">
                    <h6 class="mt-3">TREND TRY-ON TUTORIALS ON YOU</h6>
                    <p>Learn how to create trendsetting looks – all virtually demonstrated directly on your face.</p>
                    <a class="fs-6 pt-4 link-dark" href="#">EXPLORE TUTORIALS</a>
                    </div>
                    <div class="col-sm-12 col-md-3">
                    <img class="w-100" src="./assets/images/trend.avif" alt="">
                    <h6 class="mt-3">M·A·C TREND</h6>
                    <p>Discover groundbreaking beauty trends with looks and tutorials made to inspire – all curated by M·A·C Artists and experts.</p>
                    <a class="fs-6 link-dark" href="#">EXPLORE NOW</a>
                    </div>
                </div>
            </div>
    `;
});

item1.addEventListener("mouseleave", () => {
  details.classList.toggle("d-none");
});

item2.addEventListener("mouseover", () => {
  details.innerHTML = `
    <div class="container-fluid justify-content-center align-items-center d-flex">
                <div class="row d-flex">
                    <div class="col-sm-12 col-md-3">
                    <img class="w-100" src="./assets/images/service4.webp" alt="">
                    <h6 class="mt-3">TREND TRY-ON TUTORIALS ON YOU</h6>
                    <p>Learn how to create trendsetting looks – all virtually demonstrated directly on your face.</p>
                    <a class="fs-6 pt-4 link-dark" href="#">EXPLORE TUTORIALS</a>
                    </div>

                    <div class="col-sm-12 col-md-3">
                    <img class="w-100" src="./assets/images/makeup shade finder.avif" alt="">
                    <h6 class="mt-3">TREND TRY-ON TUTORIALS ON YOU</h6>
                    <p>Learn how to create trendsetting looks – all virtually demonstrated directly on your face.</p>
                    <a class="fs-6 pt-4 link-dark" href="#">EXPLORE TUTORIALS</a>
                    </div>

                    <div class="col-sm-12 col-md-3">
                    <img class="w-100" src="./assets/images/sevice2.avif" alt="">
                    <h6 class="mt-3">TREND TRY-ON TUTORIALS ON YOU</h6>
                    <p>Learn how to create trendsetting looks – all virtually demonstrated directly on your face.</p>
                    <a class="fs-6 pt-4 link-dark" href="#">EXPLORE TUTORIALS</a>
                    </div>

                    <div class="col-sm-12 col-md-3">
                    <img class="w-100" src="./assets/images/sevice2.avif" alt="">
                    <h6 class="mt-3">TREND TRY-ON TUTORIALS ON YOU</h6>
                    <p>Learn how to create trendsetting looks – all virtually demonstrated directly on your face.</p>
                    <a class="fs-6 pt-4 link-dark" href="#">EXPLORE TUTORIALS</a>
                    </div
         </div>
            </div>
    `;
});

item2.addEventListener("mouseleave", () => {
    details.classList.toggle("d-none");
  });

item3.addEventListener("mouseover", () => {
  details.innerHTML = `
    <div class="container-fluid justify-content-center align-items-center d-flex">
                <div class="row d-flex">
                    <div class="col-sm-12 col-md-3">
                    <ul>
                    <li><a href="#">ABOUT M·A·C</a></li>
                    <li><a href="#">M·A·C TREND</a></li>
                    <li><a href="#">Artist Looks</a></li>
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">M·A·C Cares</a></li>
                    <li><a href="#">Conscious Beauty</a></li>
                    <li><a href="#">Inclusion and Diversity</a></li>
                    <li><a href="#">TRENDING PRODUCTS</a></li>
                </ul>
                    </div>
                    <div class="col-sm-12 col-md-3">
                    <img class="w-100" src="./assets/images/trend3.jpg" alt="">
                    <h6 class="mt-3">NOW TRENDING: CHESTNUT MAKEUP</h6>
                    <p>Read up on the latest beauty trend that’s turning heads all over the world – created by you, curated by us.</p>
                    <a class="fs-6 link-dark" href="#">EXPLORE NOW</a>
                    
                    </div>
                    <div class="col-sm-12 col-md-3">
                    <img class="w-100" src="./assets/images/trend2.avif" alt="">
                    <h6 class="mt-3">TREND TRY-ON TUTORIALS ON YOU</h6>
                    <p>Learn how to create trendsetting looks – all virtually demonstrated directly on your face.</p>
                    <a class="fs-6 pt-4 link-dark" href="#">EXPLORE TUTORIALS</a>
                    </div>
                    <div class="col-sm-12 col-md-3">
                    <img class="w-100" src="./assets/images/trend.avif" alt="">
                    <h6 class="mt-3">M·A·C TREND</h6>
                    <p>Discover groundbreaking beauty trends with looks and tutorials made to inspire – all curated by M·A·C Artists and experts.</p>
                    <a class="fs-6 link-dark" href="#">EXPLORE NOW</a>
                    </div>
                </div>
            </div>
    `;
});

item3.addEventListener("mouseleave", () => {
    details.classList.toggle("d-none");
  });

item5.addEventListener("mouseover", () => {
  details.innerHTML = `
    <div class="container-fluid justify-content-center align-items-center d-flex">
                <div class="row d-flex">
                    <div class="col-sm-12 col-md-3">
                    <ul>
                    <li><a href="#">ABOUT M·A·C</a></li>
                    <li><a href="#">M·A·C TREND</a></li>
                    <li><a href="#">Artist Looks</a></li>
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">M·A·C Cares</a></li>
                    <li><a href="#">Conscious Beauty</a></li>
                    <li><a href="#">Inclusion and Diversity</a></li>
                    <li><a href="#">TRENDING PRODUCTS</a></li>
                </ul>
                    </div>
                    <div class="col-sm-12 col-md-3">
                    <img class="w-100" src="./assets/images/lips1.avif" alt="">
                    <h6 class="mt-3">NOW TRENDING: CHESTNUT MAKEUP</h6>
                    <p>Read up on the latest beauty trend that’s turning heads all over the world – created by you, curated by us.</p>
                    <a class="fs-6 link-dark" href="#">EXPLORE NOW</a>
                    
                    </div>
                    <div class="col-sm-12 col-md-3">
                    <img class="w-100" src="./assets/images/lips2.webp" alt="">
                    <h6 class="mt-3">TREND TRY-ON TUTORIALS ON YOU</h6>
                    <p>Learn how to create trendsetting looks – all virtually demonstrated directly on your face.</p>
                    <a class="fs-6 pt-4 link-dark" href="#">EXPLORE TUTORIALS</a>
                    </div>
                    <div class="col-sm-12 col-md-3">
                    <img class="w-100" src="./assets/images/lips3.webp" alt="">
                    <h6 class="mt-3">M·A·C TREND</h6>
                    <p>Discover groundbreaking beauty trends with looks and tutorials made to inspire – all curated by M·A·C Artists and experts.</p>
                    <a class="fs-6 link-dark" href="#">EXPLORE NOW</a>
                    </div>
                </div>
            </div>
    `;
});

item5.addEventListener("mouseleave", () => {
    details.classList.toggle("d-none");
  });

item6.addEventListener("mouseover", () => {
  details.innerHTML = `
    <div class="container-fluid justify-content-center align-items-center d-flex">
                <div class="row d-flex">
                    <div class="col-sm-12 col-md-3">
                    <ul>
                    <li><a href="#">ABOUT M·A·C</a></li>
                    <li><a href="#">M·A·C TREND</a></li>
                    <li><a href="#">Artist Looks</a></li>
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">M·A·C Cares</a></li>
                    <li><a href="#">Conscious Beauty</a></li>
                    <li><a href="#">Inclusion and Diversity</a></li>
                    <li><a href="#">TRENDING PRODUCTS</a></li>
                </ul>
                    </div>
                    <div class="col-sm-12 col-md-3">
                    <img class="w-100" src="./assets/images/face nav.avif" alt="">
                    <h6 class="mt-3">NOW TRENDING: CHESTNUT MAKEUP</h6>
                    <p>Read up on the latest beauty trend that’s turning heads all over the world – created by you, curated by us.</p>
                    <a class="fs-6 link-dark" href="#">EXPLORE NOW</a>
                    
                    </div>
                    <div class="col-sm-12 col-md-3">
                    <img class="w-100" src="./assets/images/face nav2.avif" alt="">
                    <h6 class="mt-3">TREND TRY-ON TUTORIALS ON YOU</h6>
                    <p>Learn how to create trendsetting looks – all virtually demonstrated directly on your face.</p>
                    <a class="fs-6 pt-4 link-dark" href="#">EXPLORE TUTORIALS</a>
                    </div>
                    <div class="col-sm-12 col-md-3">
                    <img class="w-100" src="./assets/images/face nav3.avif" alt="">
                    <h6 class="mt-3">M·A·C TREND</h6>
                    <p>Discover groundbreaking beauty trends with looks and tutorials made to inspire – all curated by M·A·C Artists and experts.</p>
                    <a class="fs-6 link-dark" href="#">EXPLORE NOW</a>
                    </div>
                </div>
            </div>
    `;
});

item6.addEventListener("mouseleave", () => {
    details.classList.toggle("d-none");
  });

item7.addEventListener("mouseover", () => {
  details.innerHTML = `
    <div class="container-fluid justify-content-center align-items-center d-flex">
                <div class="row d-flex">
                    <div class="col-sm-12 col-md-3">
                    <ul>
                    <li><a href="#">ABOUT M·A·C</a></li>
                    <li><a href="#">M·A·C TREND</a></li>
                    <li><a href="#">Artist Looks</a></li>
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">M·A·C Cares</a></li>
                    <li><a href="#">Conscious Beauty</a></li>
                    <li><a href="#">Inclusion and Diversity</a></li>
                    <li><a href="#">TRENDING PRODUCTS</a></li>
                </ul>
                    </div>
                    <div class="col-sm-12 col-md-3">
                    <img class="w-100" src="./assets/images/eyes nav.webp" alt="">
                    <h6 class="mt-3">NOW TRENDING: CHESTNUT MAKEUP</h6>
                    <p>Read up on the latest beauty trend that’s turning heads all over the world – created by you, curated by us.</p>
                    <a class="fs-6 link-dark" href="#">EXPLORE NOW</a>
                    
                    </div>
                    <div class="col-sm-12 col-md-3">
                    <img class="w-100" src="./assets/images/eyes nav2.webp" alt="">
                    <h6 class="mt-3">TREND TRY-ON TUTORIALS ON YOU</h6>
                    <p>Learn how to create trendsetting looks – all virtually demonstrated directly on your face.</p>
                    <a class="fs-6 pt-4 link-dark" href="#">EXPLORE TUTORIALS</a>
                    </div>
                    <div class="col-sm-12 col-md-3">
                    <img class="w-100" src="./assets/images/eyes nav3.avif" alt="">
                    <h6 class="mt-3">M·A·C TREND</h6>
                    <p>Discover groundbreaking beauty trends with looks and tutorials made to inspire – all curated by M·A·C Artists and experts.</p>
                    <a class="fs-6 link-dark" href="#">EXPLORE NOW</a>
                    </div>
                </div>
            </div>
    `;
});

item7.addEventListener("mouseleave", () => {
    details.classList.toggle("d-none");
  });

item8.addEventListener("mouseover", () => {
  details.innerHTML = `
    <div class="container-fluid justify-content-center align-items-center d-flex">
                <div class="row d-flex">
                    <div class="col-sm-12 col-md-3">
                    <ul>
                    <li><a href="#">ABOUT M·A·C</a></li>
                    <li><a href="#">M·A·C TREND</a></li>
                    <li><a href="#">Artist Looks</a></li>
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">M·A·C Cares</a></li>
                    <li><a href="#">Conscious Beauty</a></li>
                    <li><a href="#">Inclusion and Diversity</a></li>
                    <li><a href="#">TRENDING PRODUCTS</a></li>
                </ul>
                    </div>
                    <div class="col-sm-12 col-md-3">
                    <img class="w-100" src="./assets/images/trend3.jpg" alt="">
                    <h6 class="mt-3">NOW TRENDING: CHESTNUT MAKEUP</h6>
                    <p>Read up on the latest beauty trend that’s turning heads all over the world – created by you, curated by us.</p>
                    <a class="fs-6 link-dark" href="#">EXPLORE NOW</a>
                    
                    </div>
                    <div class="col-sm-12 col-md-3">
                    <img class="w-100" src="./assets/images/trend2.avif" alt="">
                    <h6 class="mt-3">TREND TRY-ON TUTORIALS ON YOU</h6>
                    <p>Learn how to create trendsetting looks – all virtually demonstrated directly on your face.</p>
                    <a class="fs-6 pt-4 link-dark" href="#">EXPLORE TUTORIALS</a>
                    </div>
                    <div class="col-sm-12 col-md-3">
                    <img class="w-100" src="./assets/images/trend.avif" alt="">
                    <h6 class="mt-3">M·A·C TREND</h6>
                    <p>Discover groundbreaking beauty trends with looks and tutorials made to inspire – all curated by M·A·C Artists and experts.</p>
                    <a class="fs-6 link-dark" href="#">EXPLORE NOW</a>
                    </div>
                </div>
            </div>
    `;
});

item8.addEventListener("mouseleave", () => {
    details.classList.toggle("d-none");
  });

item9.addEventListener("mouseover", () => {
  details.innerHTML = `
    <div class="container-fluid justify-content-center align-items-center d-flex">
                <div class="row d-flex">
                    <div class="col-sm-12 col-md-3">
                    <ul>
                    <li><a href="#">ABOUT M·A·C</a></li>
                    <li><a href="#">M·A·C TREND</a></li>
                    <li><a href="#">Artist Looks</a></li>
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">M·A·C Cares</a></li>
                    <li><a href="#">Conscious Beauty</a></li>
                    <li><a href="#">Inclusion and Diversity</a></li>
                    <li><a href="#">TRENDING PRODUCTS</a></li>
                </ul>
                    </div>
                    <div class="col-sm-12 col-md-3">
                    <img class="w-100" src="./assets/images/trend3.jpg" alt="">
                    <h6 class="mt-3">NOW TRENDING: CHESTNUT MAKEUP</h6>
                    <p>Read up on the latest beauty trend that’s turning heads all over the world – created by you, curated by us.</p>
                    <a class="fs-6 link-dark" href="#">EXPLORE NOW</a>
                    
                    </div>
                    <div class="col-sm-12 col-md-3">
                    <img class="w-100" src="./assets/images/trend2.avif" alt="">
                    <h6 class="mt-3">TREND TRY-ON TUTORIALS ON YOU</h6>
                    <p>Learn how to create trendsetting looks – all virtually demonstrated directly on your face.</p>
                    <a class="fs-6 pt-4 link-dark" href="#">EXPLORE TUTORIALS</a>
                    </div>
                    <div class="col-sm-12 col-md-3">
                    <img class="w-100" src="./assets/images/trend.avif" alt="">
                    <h6 class="mt-3">M·A·C TREND</h6>
                    <p>Discover groundbreaking beauty trends with looks and tutorials made to inspire – all curated by M·A·C Artists and experts.</p>
                    <a class="fs-6 link-dark" href="#">EXPLORE NOW</a>
                    </div>
                </div>
            </div>
    `;
});

item9.addEventListener("mouseleave", () => {
    details.classList.toggle("d-none");
  });
