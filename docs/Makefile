SOURCES = 1_analiza_użytkowników.md
# Nazwa pliku końcowego
OUTPUT = dokumentacja.pdf

ENGINE = xelatex

all: $(OUTPUT)

$(OUTPUT): $(SOURCES)
	@echo "Łączenie i konwertowanie plików: $(SOURCES)..."
	pandoc $(SOURCES) -o $(OUTPUT) \
		--pdf-engine=$(ENGINE)
	@echo "Gotowe! Wygenerowano $(OUTPUT)."

clean:
	rm -f $(OUTPUT)

.PHONY: all clean
