<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Admin – ECO MUEBLES MLJ S.A.</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
  <link rel="stylesheet" href="admin.css"/>
</head>
<body>
<div class="admin-layout">

  <!-- SIDEBAR -->
  <aside class="sidebar">
    <div class="sidebar-brand">
      <img src="logo.png" alt="Logo" onerror="this.style.display='none'"/>
      <div>
        <strong>ECO MUEBLES</strong>
        <span>Panel Admin</span>
      </div>
    </div>
    <nav class="sidebar-nav">
      <button class="side-btn active" onclick="showTab('contacto')"><i class="fa fa-phone"></i> Contacto</button>
      <button class="side-btn" onclick="showTab('redes')"><i class="fab fa-instagram"></i> Redes Sociales</button>
      <button class="side-btn" onclick="showTab('imagenes')"><i class="fa fa-images"></i> Imágenes</button>
      <button class="side-btn" onclick="showTab('galeria')"><i class="fa fa-th"></i> Galería</button>
    </nav>
    <a href="index.html" class="sidebar-back"><i class="fa fa-arrow-left"></i> Ver sitio web</a>
  </aside>

  <!-- MAIN CONTENT -->
  <main class="admin-main">
    <div class="admin-header">
      <h1>Panel de Administración</h1>
      <p>Personaliza tu sitio web sin tocar código.</p>
    </div>

    <!-- TAB: CONTACTO -->
    <div class="tab-panel active" id="tab-contacto">
      <div class="panel-card">
        <h2><i class="fa fa-address-book"></i> Información de Contacto</h2>
        <p class="panel-desc">Estos datos aparecen en la sección de contacto de la página principal.</p>
        <div class="form-row">
          <div class="field">
            <label><i class="fa fa-phone"></i> Teléfono</label>
            <input type="text" id="inp-phone" placeholder="+593 999 999 999"/>
          </div>
          <div class="field">
            <label><i class="fa fa-envelope"></i> Correo electrónico</label>
            <input type="email" id="inp-email" placeholder="tu@correo.com"/>
          </div>
        </div>
        <div class="field">
          <label><i class="fa fa-map-marker-alt"></i> Ubicación / Ciudad</label>
          <input type="text" id="inp-location" placeholder="Paute, Azuay, Ecuador"/>
        </div>
        <button class="btn-save" onclick="saveContacto()"><i class="fa fa-save"></i> Guardar Contacto</button>
        <div class="alert" id="alert-contacto"></div>
      </div>
    </div>

    <!-- TAB: REDES SOCIALES -->
    <div class="tab-panel" id="tab-redes">
      <div class="panel-card">
        <h2><i class="fab fa-instagram"></i> Redes Sociales</h2>
        <p class="panel-desc">Ingresa las URLs completas de tus perfiles. Para WhatsApp ingresa solo el número.</p>
        <div class="field">
          <label><i class="fab fa-instagram"></i> Instagram (URL completa)</label>
          <input type="url" id="inp-instagram" placeholder="https://instagram.com/tu_perfil"/>
        </div>
        <div class="field">
          <label><i class="fab fa-facebook-f"></i> Facebook (URL completa)</label>
          <input type="url" id="inp-facebook" placeholder="https://facebook.com/tu_pagina"/>
        </div>
        <div class="field">
          <label><i class="fab fa-whatsapp"></i> WhatsApp (número con código de país)</label>
          <input type="text" id="inp-whatsapp" placeholder="+593999999999"/>
          <small>Ejemplo: +593987654321 (sin espacios ni guiones)</small>
        </div>
        <button class="btn-save" onclick="saveRedes()"><i class="fa fa-save"></i> Guardar Redes</button>
        <div class="alert" id="alert-redes"></div>
        <div class="preview-social">
          <span class="prev-label">Vista previa:</span>
          <a id="prev-ig" href="#" target="_blank" class="social-prev ig"><i class="fab fa-instagram"></i> Instagram</a>
          <a id="prev-fb" href="#" target="_blank" class="social-prev fb"><i class="fab fa-facebook-f"></i> Facebook</a>
          <a id="prev-wa" href="#" target="_blank" class="social-prev wa"><i class="fab fa-whatsapp"></i> WhatsApp</a>
        </div>
      </div>
    </div>

    <!-- TAB: IMÁGENES PRINCIPALES -->
    <div class="tab-panel" id="tab-imagenes">
      <div class="panel-card">
        <h2><i class="fa fa-image"></i> Imágenes Principales</h2>
        <p class="panel-desc">Sube las imágenes principales del sitio web. Se actualizan automáticamente.</p>
        <div class="img-upload-grid">

          <div class="img-upload-item">
            <div class="preview-box" id="prev-hero">
              <img id="prev-hero-img" src="" alt="" style="display:none"/>
              <div class="prev-placeholder"><i class="fa fa-image"></i><span>Hero / Portada</span></div>
            </div>
            <label class="upload-label" for="upload-hero">
              <i class="fa fa-upload"></i> Subir imagen hero
              <input type="file" id="upload-hero" accept="image/*" onchange="handleImageUpload(this, 'heroImg', 'prev-hero-img')"/>
            </label>
            <button class="btn-remove" onclick="removeImage('heroImg', 'prev-hero-img')"><i class="fa fa-trash"></i> Quitar</button>
          </div>

          <div class="img-upload-item">
            <div class="preview-box" id="prev-about">
              <img id="prev-about-img" src="" alt="" style="display:none"/>
              <div class="prev-placeholder"><i class="fa fa-users"></i><span>Sobre Nosotros</span></div>
            </div>
            <label class="upload-label" for="upload-about">
              <i class="fa fa-upload"></i> Subir imagen nosotros
              <input type="file" id="upload-about" accept="image/*" onchange="handleImageUpload(this, 'aboutImg', 'prev-about-img')"/>
            </label>
            <button class="btn-remove" onclick="removeImage('aboutImg', 'prev-about-img')"><i class="fa fa-trash"></i> Quitar</button>
          </div>

          <div class="img-upload-item">
            <div class="preview-box" id="prev-logo">
              <img id="prev-logo-img" src="" alt="" style="display:none"/>
              <div class="prev-placeholder"><i class="fa fa-leaf"></i><span>Logo</span></div>
            </div>
            <label class="upload-label" for="upload-logo">
              <i class="fa fa-upload"></i> Subir logo
              <input type="file" id="upload-logo" accept="image/*" onchange="handleImageUpload(this, 'logoImg', 'prev-logo-img')"/>
            </label>
            <button class="btn-remove" onclick="removeImage('logoImg', 'prev-logo-img')"><i class="fa fa-trash"></i> Quitar</button>
          </div>

        </div>

        <h3 style="margin-top:2rem; margin-bottom:1rem; font-size:1rem;">Imágenes de Productos</h3>
        <div class="img-upload-grid" id="products-imgs">
          <!-- Se generan con JS -->
        </div>
        <div class="alert" id="alert-imagenes"></div>
      </div>
    </div>

    <!-- TAB: GALERÍA -->
    <div class="tab-panel" id="tab-galeria">
      <div class="panel-card">
        <h2><i class="fa fa-th"></i> Galería de Imágenes</h2>
        <p class="panel-desc">Agrega fotos de tus trabajos terminados. Se mostrarán en la sección Galería del sitio.</p>
        <label class="upload-label block" for="upload-gallery">
          <i class="fa fa-plus"></i> Agregar imágenes a la galería (puedes seleccionar varias)
          <input type="file" id="upload-gallery" accept="image/*" multiple onchange="handleGalleryUpload(this)"/>
        </label>
        <div class="gallery-admin-grid" id="galleryAdminGrid"></div>
        <div class="alert" id="alert-galeria"></div>
      </div>
    </div>

  </main>
</div>
<script src="admin.js"></script>
</body>
</html>
