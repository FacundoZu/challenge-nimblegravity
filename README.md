# Challenge Técnico - Junior Fullstack Developer

## Nimble Gravity

Este proyecto es una aplicación React desarrollada como parte del proceso de selección para el puesto de **Junior Fullstack Developer** en **Nimble Gravity**.

---

## 📋 Descripción del Challenge

El desafío consistió en crear una mini aplicación en React que se conecta a la API de Nimble Gravity para:

1. Obtener los datos del candidato mediante su email
2. Mostrar un listado de posiciones de trabajo disponibles
3. Permitir al candidato postularse ingresando la URL de su repositorio de GitHub

---

## 🎯 Criterios de Evaluación

Nimble Gravity evaluó los siguientes aspectos:

| Criterio | Qué se evaluó |
|----------|---------------|
| **Calidad de código** | Código limpio, legible, buenas convenciones de nombrado |
| **Componentes** | Buena separación de componentes, aunque sea una app chica |
| **Manejo de errores** | Manejo adecuado de errores de red y respuestas de la API |
| **Presentación visual** | Un componente prolijo — no hace falta nada fancy |
| **Resolución de problemas** | Cómo se manejan situaciones inesperadas |

---

## 🛠️ Tecnologías Implementadas

- **React 19** - Framework principal
- **TypeScript** - Tipado estático para mayor robustez
- **Axios** - Cliente HTTP para llamadas a la API
- **Tailwind CSS** - Framework de estilos utility-first
- **Vite** - Build tool y dev server

---

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ErrorMessage.tsx    # Componente para mostrar mensajes de error
│   ├── JobItem.tsx          # Card individual de cada posición
│   ├── JobList.tsx          # Lista de posiciones disponibles
│   └── LoadingSpinner.tsx   # Indicador de carga
├── services/
│   └── api.ts               # Capa de servicio con Axios
├── types/
│   └── types.ts             # Definiciones de tipos TypeScript
├── App.tsx                  # Componente principal
├── index.css                # Estilos con Tailwind CSS
└── main.tsx                 # Punto de entrada
```

---

## ✅ Funcionalidades Implementadas

### 1. **Obtención de Datos del Candidato (Step 2)**
- Input de email con validación
- Llamada GET a `/api/candidate/get-by-email`
- Manejo de estados de carga y error

### 2. **Listado de Posiciones (Step 3)**
- Llamada GET a `/api/jobs/get-list`
- Renderizado dinámico de posiciones disponibles
- Grid responsivo con Tailwind CSS

### 3. **Sistema de Postulación (Step 5)**
- Input para URL de repositorio de GitHub
- Validación de campos requeridos
- Llamada POST a `/api/candidate/apply-to-job`
- Feedback visual de éxito/error

### 4. **Manejo de Estados**
- Loading states en todos los procesos asíncronos
- Error handling con mensajes descriptivos
- Success states con feedback visual claro

### 5. **Diseño Responsivo**
- Mobile-first approach
- Adaptación a diferentes tamaños de pantalla
- UI limpia y profesional

---

## 🔧 Configuración y Ejecución

### Prerrequisitos
- Node.js (v18 o superior)
- pnpm (o npm/yarn)

### Variables de Entorno

Crear un archivo `.env.local` en la raíz del proyecto:

```env
VITE_BASE_URL=https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net
```

### Instalación

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Build para producción
pnpm build
```

La aplicación estará disponible en `http://localhost:5173/`

---

## 🧪 Cómo Probar la Aplicación

1. **Ingresar Email**: Usa el email con el que aplicaste a Nimble Gravity
2. **Ver Posiciones**: Se cargarán automáticamente las posiciones disponibles
3. **Postularse**: 
   - Ingresa la URL de tu repositorio de GitHub
   - Formato: `https://github.com/tu-usuario/tu-repo`
   - Haz clic en "Enviar Postulación"
4. **Verificar**: Deberías ver un mensaje de éxito

---

## 📝 Decisiones de Implementación

### TypeScript
Se eligió TypeScript para:
- Detectar errores en tiempo de desarrollo
- Mejorar la autocompletación y documentación del código
- Garantizar la integridad de los datos de la API

### Axios
Se prefirió Axios sobre fetch por:
- Sintaxis más limpia y concisa
- Manejo automático de JSON
- Mejor manejo de errores
- Interceptors para configuración global

### Tailwind CSS
Se utilizó Tailwind para:
- Desarrollo rápido sin escribir CSS personalizado
- Diseño consistente y mantenible
- Clases utility-first fáciles de entender
- Responsividad out-of-the-box

### Separación de Componentes
- **App.tsx**: Lógica de autenticación y layout principal
- **JobList.tsx**: Fetch y renderizado de posiciones
- **JobItem.tsx**: Lógica individual de cada posición
- **ErrorMessage/LoadingSpinner**: Componentes reutilizables

### Manejo de Errores
- Try-catch en todas las llamadas asíncronas
- Mensajes de error claros y descriptivos
- Estados de error específicos por componente

---

## 🎨 Características de UX/UI

- ✅ Spinners de carga durante operaciones asíncronas
- ✅ Mensajes de éxito/error con iconos visuales
- ✅ Botones deshabilitados durante el envío
- ✅ Hover effects en elementos interactivos
- ✅ Diseño limpio y profesional
- ✅ Paleta de colores consistente (indigo/purple)

---

## 📦 Dependencias Principales

```json
{
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "axios": "^1.13.5",
    "tailwindcss": "4.1.18"
  },
  "devDependencies": {
    "typescript": "~5.9.3",
    "vite": "^7.3.1",
    "@vitejs/plugin-react-swc": "^4.2.2"
  }
}
```

---

## 👨‍💻 Autor

**Facundo Zuleta**
