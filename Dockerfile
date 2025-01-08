# Använd en Python-bild (ändra vid behov)
FROM python:3.10-slim

# Installera nödvändiga paket
RUN apt-get update && apt-get install -y \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

# Ställ in arbetskatalogen
WORKDIR /app

# Kopiera projektet
COPY . /app

# Installera beroenden
RUN pip install -r requirements.txt

# Exponera porten (ändra vid behov)
EXPOSE 8000

# Starta applikationen
CMD ["python", "server.py"]
