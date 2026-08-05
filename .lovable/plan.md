Plan: poner precios, servicios y horario al alcance en la página de inicio

1. Objetivo
Que el usuario que entra a la página de inicio (home / front page) encuentre de inmediato los servicios con precios y el horario, sin tener que buscar en otras páginas o desplazarse hasta el footer.

2. Cambios propuestos

2.1. Nueva sección “Servicios & Precios” en el Home (después del hero)
- Reemplazar la lista genérica de 4 servicios por el menú real con precios del archivo Services.tsx.
- Mostrar: nombre del servicio, descripción corta, duración/tipo y precio.
- Estilo editorial consistente con el resto del sitio: lista numerada, bordes finos, tipografía display.
- Incluir un botón o enlace claro hacia “Ver menú completo” que lleve a /services.
- En móvil: mantener legibilidad con una sola columna y precios alineados.

2.2. Nueva sección “Horario” en el Home (después de servicios o antes del CTA)
- Mostrar la tabla de horarios actual del footer y de Appointments.tsx: Martes–Sábado con sus horarios y Lun/Dom cerrado.
- Incluir la nota VIP sobre costo adicional fuera de horario.
- Mantener estilo editorial (días en display, horas en body, separadores finos).
- En móvil: apilar días y horas sin perder jerarquía.

2.3. Ajustes de navegación (opcional, a confirmar)
- Evaluar agregar un enlace directo “Servicios & Precios” o “Horario” en el menú principal para anclar al home o ir a /services.
- Si el usuario lo desea, también se puede añadir un botón destacado en el hero que baje directo a la sección de precios.

3. Archivos a modificar
- src/pages/Index.tsx: agregar las dos secciones nuevas, reutilizar datos de Services.tsx o duplicar el array de servicios con precios.
- src/components/Navigation.tsx (opcional): agregar anclaje o enlace más explícito si se aprueba.

4. Criterios de aceptación
- Al cargar el home, el usuario ve precios y horarios sin hacer clic ni bajar más de una pantalla.
- El diseño mantiene la estética editorial actual (colores, tipografía, espaciado).
- La sección es responsive y funciona en el viewport móvil actual (393 px de ancho).
- Todos los enlaces “Ver menú completo” y “Reservar” siguen funcionando.

5. Notas técnicas
- No se requiere backend ni nuevas dependencias.
- Se reutilizarán los datos ya existentes (lista de servicios y horarios) para mantener consistencia.
- Se mantendrá el componente Footer como fuente secundaria de horario y la página /services como el menú completo detallado.
