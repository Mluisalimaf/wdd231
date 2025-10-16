async function loadGallery() {
  try {
    const response = await fetch('data/gallery.json');
    const items = await response.json();
    const gallery = document.getElementById('gallery');

    items.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('service-card');

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <h3>${item.name}</h3>
        <p>Category: ${item.category}</p>
        <p>Price: ${item.price}</p>
      `;

      gallery.appendChild(card);
    });

  } catch (error) {
    console.error('Failed to load gallery:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadGallery);