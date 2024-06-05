from PIL import Image
import os

def reducir_calidad_rotar_y_convertir_imagenes(carpeta_principal, factor_calidad=85):
    # Recorre las carpetas dentro de la carpeta principal
    for carpeta in os.listdir(carpeta_principal):
        carpeta_path = os.path.join(carpeta_principal, carpeta)

        # Verifica si es una carpeta
        if os.path.isdir(carpeta_path):
            print(f"Procesando imágenes en la carpeta: {carpeta}")

            # Recorre los archivos dentro de la carpeta
            for archivo in os.listdir(carpeta_path):
                archivo_path = os.path.join(carpeta_path, archivo)

                # Verifica si es un archivo de imagen
                if archivo.lower().endswith(('.png', '.jpg', '.jpeg')):
                    # Abre la imagen
                    imagen = Image.open(archivo_path)

                    # Reduce la calidad
                    imagen.save(archivo_path, quality=factor_calidad)
                    print(f"Reduciendo calidad de {archivo}")

                   

                    # Convierte a PNG
                    imagen_png_path = os.path.splitext(archivo_path)[0] + ".png"
                    imagen.save(imagen_png_path, format="PNG")
                    print(f"Convirtiendo a PNG: {imagen_png_path}")

                    # Convierte a JPEG
                    imagen_jpg_path = os.path.splitext(archivo_path)[0] + ".jpg"
                    imagen.save(imagen_jpg_path, format="JPEG", quality=factor_calidad)
                    print(f"Convirtiendo a JPEG: {imagen_jpg_path}")

if __name__ == "__main__":
    # Especifica la carpeta principal
    carpeta_principal = "./deptos/"

    # Especifica el factor de calidad deseado (0-100)
    factor_calidad = 70

    # Llama a la función para reducir la calidad, rotar y convertir las imágenes
    reducir_calidad_rotar_y_convertir_imagenes(carpeta_principal, factor_calidad)
