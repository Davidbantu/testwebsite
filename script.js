// Swiper for Popular Items
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 35,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1200: { slidesPerView: 4 },
    900: { slidesPerView: 3 },
    600: { slidesPerView: 2 },
    0: { slidesPerView: 1 }
  }
});

// Swiper for Chef's Specials
var chefSwiper = new Swiper(".chefSwiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".chefSwiper .swiper-button-next",
    prevEl: ".chefSwiper .swiper-button-prev",
  },
  pagination: {
    el: ".chefSwiper .swiper-pagination",
    clickable: true,
  }
});

// Menu Section
const menuData = {
  starters: [
    {
      title: "Samosa",
      desc: "Crispy pastry filled with spicy potatoes and peas.",
      img: "https://cdn.pixabay.com/photo/2018/08/08/17/35/samosa-3590731_1280.jpg",
      price: "₹70"
    },
    {
      title: "Pani Puri",
      desc: "Crispy puris filled with spicy, tangy water and potatoes.",
      img: "https://cdn.pixabay.com/photo/2022/08/19/10/44/pani-puri-7396641_1280.jpg",
      price: "₹90"
    }
  ],
  tandoori: [
    {
      title: "Tandoori Chicken",
      desc: "Chicken marinated in yogurt and spices, cooked in a clay oven.",
      img: "https://cdn.pixabay.com/photo/2017/03/17/17/23/tandoori-chicken-2152837_1280.jpg",
      price: "₹250"
    },
    {
      title: "Paneer Tikka",
      desc: "Chunks of paneer grilled with spices and veggies.",
      img: "https://cdn.pixabay.com/photo/2020/09/04/18/07/paneer-tikka-5543249_1280.jpg",
      price: "₹180"
    }
  ],
  curries: [
    {
      title: "Butter Chicken",
      desc: "Tender chicken in creamy tomato sauce with butter.",
      img: "https://cdn.pixabay.com/photo/2021/08/06/08/47/butter-chicken-6526212_1280.jpg",
      price: "₹220"
    },
    {
      title: "Chana Masala",
      desc: "Chickpeas cooked in spicy onion-tomato gravy.",
      img: "https://cdn.pixabay.com/photo/2021/11/05/13/18/indian-food-6771117_1280.jpg",
      price: "₹140"
    }
  ],
  breads: [
    {
      title: "Garlic Naan",
      desc: "Fluffy naan bread topped with garlic and coriander.",
      img: "https://cdn.pixabay.com/photo/2018/08/08/17/35/naan-3590732_1280.jpg",
      price: "₹50"
    },
    {
      title: "Veg Biryani",
      desc: "Aromatic rice cooked with mixed vegetables and spices.",
      img: "https://cdn.pixabay.com/photo/2017/08/30/11/05/indian-food-2692510_1280.jpg",
      price: "₹160"
    }
  ],
  desserts: [
    {
      title: "Gulab Jamun",
      desc: "Deep fried milk balls soaked in sugar syrup.",
      img: "https://cdn.pixabay.com/photo/2020/11/14/12/53/gulab-jamun-5742461_1280.jpg",
      price: "₹70"
    },
    {
      title: "Mango Lassi",
      desc: "Refreshing yogurt drink blended with ripe mangoes.",
      img: "https://cdn.pixabay.com/photo/2020/01/27/07/56/mango-lassi-4795488_1280.jpg",
      price: "₹90"
    }
  ]
};
const categories = document.querySelectorAll('.menu-cat-btn');
const itemsContainer = document.getElementById('menu-items-container');
const seeFullMenuRow = document.getElementById('see-full-menu-row');

// Menu category click event
categories.forEach(btn => {
  btn.addEventListener('click', () => {
    categories.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.getAttribute('data-category');
    showMenuItems(cat);
  });
});

function showMenuItems(category) {
  itemsContainer.innerHTML = '';
  menuData[category].forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-item-card';
    card.innerHTML = `
      <img src="${item.img}" alt="${item.title}" class="menu-item-img" />
      <div class="menu-item-info">
        <div class="menu-item-title">${item.title}</div>
        <div class="menu-item-desc">${item.desc}</div>
        <div class="price">${item.price}</div>
        <button class="order-btn">Order Now</button>
      </div>
    `;
    itemsContainer.appendChild(card);
  });
  itemsContainer.style.display = 'flex';
  seeFullMenuRow.style.display = 'block';
  itemsContainer.style.animation = 'fadeIn 0.5s';
}
