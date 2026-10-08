# PROYECTO: Plataforma Web de Juegos Bíblicos para Niños

Actúa como un Arquitecto de Software Senior y Desarrollador Fullstack experto en React, TypeScript, Vite y Phaser 3. 

Vas a construir la plataforma web de juegos bíblicos infantiles siguiendo estrictamente los siguientes 5 principios fundamentales, la paleta de colores y la stack técnica especificada.

---

### PRINCIPIOS OBLIGATORIOS DE DISEÑO Y DESARROLLO

1. **SEGURIDAD PARA NIÑOS (COPPA / Safe UI):**
   - Interfaz limpia, intuitiva, sin anuncios externos, sin enlaces salientes sin supervisión y sin recolectar datos personales de menores.
   - Botones grandes, tipografía legible y controles amigables para niños.

2. **VELOCIDAD Y RENDIMIENTO EXTREMO:**
   - Carga inicial ultrarrápida usando Vite + React + TypeScript + pnpm.
   - Motores de juego optimizados en Phaser 3 (WebGL/Canvas) importados mediante código bajo demanda (lazy loading / code splitting) para no sobrecargar el renderizado inicial.
   - Sprites y assets optimizados en formato WebP o SVG.

3. **CIBERSEGURIDAD Y BUENAS PRÁCTICAS:**
   - Sanitización estricta de cualquier entrada de datos.
   - Configuración defensiva de cabeceras de seguridad y prevención de vulnerabilidades XSS / CSRF.
   - Estructura libre de scripts de rastreo de terceros no autorizados.

4. **NEUTRALIDAD DOCTRINAL (Historia Bíblica Pura):**
   - El contenido de los juegos y narraciones debe basarse EXCLUSIVAMENTE en el texto narrativo e histórico de la Biblia (historias como la Creación, el Arca de Noé, David y Goliat, historias del Nuevo Testamento, parábolas históricas).
   - Queda estrictamente prohibido introducir interpretaciones dogmáticas o puntos doctrinales divisivos entre denominaciones (evitar debates sobre escatología, formas de bautismo, predestinación vs libre albedrío, etc.).

5. **CRÉDITOS Y SELLO INSTITUCIONAL:**
   - Inclusión de una sección de Footer y un modal de "Créditos" donde se destaque el sello/identidad visual de la iglesia desarrolladora con respeto y elegancia.

---

### PALETA DE COLORES (Gama de Azules Infantil y Confiable)

Usa Tailwind CSS con la siguiente configuración de azules:
- **Azul Primario (Confianza/Cielo):** `#1E6091` / `bg-blue-600`
- **Azul Secundario (Mar/Diversión):** `#184E77` / `bg-blue-800`
- **Azul Claro (Acento y Fondos):** `#B5E2FA` / `bg-sky-200` o `#EDF2F4`
- **Azul Eléctrico (Acción/Botones):** `#0077B6` / `bg-sky-500`
- **Detalles/Contraste:** Blanco purísimo (`#FFFFFF`) y Amarillo Sol cálido (`#FFD166`) para estrellas o logros.

---

### ARQUITECTURA DEL PROYECTO A CREAR

Organiza las carpetas en `src/`:
- `src/components/`: Componentes UI de React (Navbar, Footer, ModalCréditos, GameCard, Layout).
- `src/games/`: Modulos de juegos en Phaser 3 (ej. `NoahArkGame/`, `MemoryBibleGame/`).
- `src/content/`: Archivos JSON o TS con historias bíblicas en texto plano sin interpretaciones doctrinales.
- `src/styles/`: Configuración global de estilos y Tailwind CSS.

---

### PRIMERA TAREA A EJECUTAR:

1. Configura la paleta de colores azules en Tailwind CSS.
2. Crea la estructura base de layout de la web: Navbar amigable para niños, área principal de selección de juegos y Footer con el espacio reservado para el sello e información de la iglesia.
3. Configura un primer juego de prueba integrado en Phaser 3 + React para verificar la integración y el rendimiento de 60 FPS.
4. que la web sea full responsive principalmente con las mejores practicas de programacion y principios de reusabilidad para escalabilidad.