# Ex.08 Design of Interactive Image Gallery
## Date:1/5/2025

## AIM:
To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM :
```html

imagegallery.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Photo Gallery</title>
  <link rel="stylesheet" href="gallery.css">
</head>
<body>
  <header>
    <h1>INTERACTIVE IMAGE GALLERY</h1>
  </header>
  <main>
    <section class="gallery">
      <div class="photo-item" data-title="AMG">
        <img src="amg.jpg" alt="AMG">
      </div>
      <div class="photo-item" data-title="BNW">
        <img src="bnw.jpg" alt="BNW">
      </div>
      <div class="photo-item" data-title="MUSTANG">
        <img src="mustang.jpg" alt="MUSTANG">
      </div>
      <div class="photo-item" data-title="BUGATTI">
        <img src="bugatti.jpg" alt="BUGATTI">
      </div>
      <div class="photo-item" data-title="SKYLINE">
        <img src="skyline.jpg" alt="SKYLINE">
      </div>
      <div class="photo-item" data-title="SUPRA">
        <img src="supra.jpg" alt="SUPRA">
      </div>
    </section>
  </main>

  <div id="lightbox" class="lightbox" onclick="closeLightbox()">
    <img id="lightbox-img" src="" alt="Large View">
  </div>
  <script src="gallery.js"></script>
</body>
</html>

```
```css


gallery.css

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: rgb(141, 211, 141);
  }
  
  header {
    background-color: #726e6e;
    color: white;
    text-align: center;
    padding: 1rem;
  }
  
  header h1 {
    margin: 0;
  }
  
  main {
    padding: 5rem;
  }
  
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  .photo-item {
    position: relative;
  }
  
  .photo-item img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease;
    
  }
  
  .photo-item img:hover {
    transform: scale(1.05);
  }
  
  .lightbox {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
  }
  
  .lightbox img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
  }
  

gallery.js

const photoItems = document.querySelectorAll('.photo-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

photoItems.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

function closeLightbox() {
  lightbox.style.display = 'none';
}

function filterImages() {
  const query = document.getElementById('search').value.toLowerCase();
  const photoItems = document.querySelectorAll('.photo-item');

  photoItems.forEach(item => {
    const title = item.getAttribute('data-title').toLowerCase();
    if (title.includes(query)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}


```

## OUTPUT:

![img 1](https://github.com/user-attachments/assets/d738822e-a45e-4221-a6c8-c6ae1726ee30)
![img 2](https://github.com/user-attachments/assets/242513d5-aeaa-448c-bf87-4096461ab196)




## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
