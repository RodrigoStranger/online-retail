<div align="center">
<table>
    <thead>
        <tr>
            <th>
                <img src="https://github.com/RodrigoStranger/imagenes-la-salle/blob/main/logo_secundario_color.png?raw=true" width="150"/>
            </th>
            <th>
                <span style="font-weight:bold;">UNIVERSIDAD LA SALLE DE AREQUIPA</span><br />
                <span style="font-weight:bold;">FACULTAD DE INGENIERÍAS Y ARQUITECTURA</span><br />
                <span style="font-weight:bold;">DEPARTAMENTO ACADEMICO DE INGENIERÍA Y MATEMÁTICAS</span><br />
                <span style="font-weight:bold;">CARRERA PROFESIONAL DE INGENIERÍA DE SOFTWARE</span>
            </th>            
        </tr>
    </thead>
</table>
</div>

<div align="center">
  <h2 style="font-weight:bold;">INTELIGENCIA DE NEGOCIOS Y MINERÍA DE DATOS</h2>
</div>

<div align="center">
<table>
    <thead>
        <tr>
            <th><strong>Semestre</strong></th>
            <th><strong>Profesor</strong></th>
            <th><strong>Créditos</strong></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="center">2025 II</td>
            <td align="center">Ana María Cuadros Valdivia</td>
            <td align="center">3</td>
        </tr>
    </tbody>
</table>
</div>

# Análisis de Datos: Online Retail II

## Tecnologías Utilizadas

[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Jupyter](https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white)](https://jupyter.org/)
[![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)](https://pandas.pydata.org/)
[![NumPy](https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white)](https://numpy.org/)
[![Matplotlib](https://img.shields.io/badge/Matplotlib-11557c?style=for-the-badge&logo=plotly&logoColor=white)](https://matplotlib.org/)
[![Seaborn](https://img.shields.io/badge/Seaborn-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://seaborn.pydata.org/)
[![Plotly](https://img.shields.io/badge/Plotly-3F4F75?style=for-the-badge&logo=plotly&logoColor=white)](https://plotly.com/)

## Descripción del Proyecto

Este proyecto presenta un análisis completo del dataset **Online Retail II**, que contiene transacciones de una tienda minorista en línea con sede en el Reino Unido. El análisis incluye limpieza de datos, exploración de datos (EDA), y visualizaciones para extraer insights valiosos sobre patrones de compra, comportamiento de clientes y tendencias de ventas.

### Objetivos del Proyecto:
- **Data Wrangling**: Limpieza y preprocesamiento de datos para asegurar la calidad del análisis
- **Análisis Exploratorio de Datos (EDA)**: Descubrimiento de patrones, tendencias y anomalías en las transacciones
- **Visualización de Datos**: Creación de gráficos informativos para comunicar hallazgos
- **Generación de Insights**: Identificación de oportunidades de negocio y recomendaciones


## Notebooks Jupyter

[![Data Wrangling Notebook](https://img.shields.io/badge/Data_Wrangling-Notebook-FF6F00?style=for-the-badge&logo=jupyter&logoColor=white)](./colab/Rodrigo_Infanzon_Acosta_OnlineRetail_DataWrangling.ipynb)
[![EDA Notebook](https://img.shields.io/badge/EDA-Notebook-F37626?style=for-the-badge&logo=jupyter&logoColor=white)](./colab/Rodrigo_Infanzon_Acosta_OnlineRetail_EDA.ipynb)


## Documentos de Visualización

[![EDA PDF](https://img.shields.io/badge/EDA-Análisis_Exploratorio-DC143C?style=for-the-badge&logo=adobeacrobatreader&logoColor=white)](./pdf/Rodrigo_Infanzon_Acosta_OnlineRetail_EDA.pdf)
[![Data Wrangling PDF](https://img.shields.io/badge/Data_Wrangling-Limpieza_de_Datos-1E90FF?style=for-the-badge&logo=adobeacrobatreader&logoColor=white)](./pdf/Rodrigo_Infanzon_Acosta_OnlineRetail_Data_Wrangling.pdf)


## Datasets

[![Dataset Original](https://img.shields.io/badge/Dataset-Original_(94.8_MB)-FFD700?style=for-the-badge&logo=databricks&logoColor=white)](./dataset/online_retail_II.csv)
[![Dataset Limpio](https://img.shields.io/badge/Dataset-Limpio_(70.5_MB)-32CD32?style=for-the-badge&logo=databricks&logoColor=white)](./dataset/online_retail_II_cleaned.csv)

### Descripción de los Datasets:
- **`online_retail_II.csv`**: Dataset original con todas las transacciones sin procesar
- **`online_retail_II_cleaned.csv`**: Dataset procesado después de la limpieza de datos (eliminación de valores nulos, duplicados, y corrección de inconsistencias)


## Estructura del Proyecto

```
online-retail/
│
├── colab/                                       # Notebooks de Google Colab
│   ├── Rodrigo_Infanzon_Acosta_OnlineRetail_DataWrangling.ipynb
│   └── Rodrigo_Infanzon_Acosta_OnlineRetail_EDA.ipynb
│
├── dataset/                                     # Datasets del proyecto
│   ├── online_retail_II.csv                    # Dataset original
│   └── online_retail_II_cleaned.csv            # Dataset limpio
│
├── pdf/                                         # Documentación en PDF
│   ├── Rodrigo_Infanzon_Acosta_OnlineRetail_EDA.pdf
│   └── Rodrigo_Infanzon_Acosta_OnlineRetail_Data_Wrangling.pdf
│
├── referencias/                                 # Material de referencia
│   └── [Artículos académicos y referencias]
│
├── LICENSE                                      # Licencia Apache 2.0
└── README.md                                    # Este archivo
```

## Cómo Ejecutar el Proyecto

### Opción 1: Google Colab (Recomendado)
1. Abre los notebooks en la carpeta `colab/`
2. Haz clic en "Open in Colab"
3. Ejecuta las celdas secuencialmente

### Opción 2: Local
```bash
# Clonar el repositorio
git clone [URL_del_repositorio]

# Navegar al directorio
cd online-retail

# Instalar dependencias (recomendado usar un entorno virtual)
pip install pandas numpy matplotlib seaborn jupyter

# Abrir Jupyter Notebook
jupyter notebook
```

## Principales Hallazgos

Los análisis detallados se encuentran en los PDFs de visualización. Algunos insights incluyen:
- Identificación de productos más vendidos
- Análisis de patrones temporales de ventas
- Segmentación de clientes
- Análisis de frecuencia y valor de transacciones

## Autor

**Rodrigo Infanzón Acosta**
Ingeniería de Software - Universidad La Salle de Arequipa


## Contacto

Para consultas o sugerencias sobre el proyecto, no dudes en contactar:

**Email:** rinfanzona@ulasalle.edu.pe