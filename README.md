# IKEA Ops Tools

Internal logistics and routing toolsuite.

---

## 🚀 Setup local (primera vez)

```bash
# 1. Instala dependencias
npm install

# 2. Corre en modo desarrollo
npm run dev
# → abre http://localhost:5173/ikea-ops-tools/
```

---

## 📁 Agrega tus apps HTML

Copia todos tus archivos HTML al directorio `public/apps/`:

```
public/
└── apps/
    ├── auditoria_rutas.html
    ├── ruteador-ikea-v9.html
    ├── app_ruteo_pr.html
    ├── ruteo-24hrs.html
    ├── reporte_rutas.html
    ├── isos_faltantes_geo.html
    ├── consultor_isos.html
    ├── verificador_vehiculos.html
    ├── ikea-theme.css
    ├── comunas_data.js
    └── xlsx.min.js   ← (si lo usas localmente)
```

> Los archivos en `public/` se copian tal cual al build final.
> Los links en el home apuntan a `/ikea-ops-tools/apps/archivo.html`.

---

## 🌐 Deploy a GitHub Pages

### Primera vez:

1. Crea un repo en GitHub llamado `ikea-ops-tools`
2. Sube el proyecto:
```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/ikea-ops-tools.git
git push -u origin main
```

3. En GitHub → Settings → Pages → Source: **GitHub Actions**

4. El deploy se activa solo. En ~2 minutos estará en:
   `https://TU_USUARIO.github.io/ikea-ops-tools/`

### Deploys futuros (automático):
```bash
git add .
git commit -m "descripción del cambio"
git push
# → GitHub Actions hace el build y deploy automáticamente
```

---

## ⚙️ Si cambias el nombre del repo

Edita `vite.config.ts` y `src/main.tsx` y reemplaza `/ikea-ops-tools/` por `/nombre-de-tu-repo/`.

---

## 🛠 Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Desarrollo local con hot reload |
| `npm run build` | Build de producción → `dist/` |
| `npm run preview` | Preview del build local |
