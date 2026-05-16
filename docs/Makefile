SOURCES = 1_analiza_użytkowników.md
# Nazwa pliku końcowego
OUTPUT = dokumentacja.pdf

ENGINE = xelatex
MARGIN = 2cm

all: $(OUTPUT)

$(OUTPUT): $(SOURCES)
	@echo "Łączenie i konwertowanie plików: $(SOURCES)..."
	pandoc $(SOURCES) -o $(OUTPUT) \
		--pdf-engine=$(ENGINE) \
		-V geometry:margin=$(MARGIN) \
		-V mainfont="DejaVu Sans"
	@echo "Gotowe! Wygenerowano $(OUTPUT)."

clean:
	rm -f $(OUTPUT)

.PHONY: all clean
