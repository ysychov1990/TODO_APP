SOURCES = 0_header.md 1_zasady_dobrego_ui.md 2_analiza_użytkowników.md
# Nazwa pliku końcowego
OUTPUT = dokumentacja.pdf

ENGINE = xelatex

all: $(OUTPUT)

run: $(OUTPUT)
	xdg-open $(OUTPUT)

$(OUTPUT): $(SOURCES)
	@echo "Łączenie i konwertowanie plików: $(SOURCES)..."
	pandoc $(SOURCES) -o $(OUTPUT) \
		--pdf-engine=$(ENGINE)
	@echo "Gotowe! Wygenerowano $(OUTPUT)."

clean:
	rm -f $(OUTPUT)

.PHONY: all clean
