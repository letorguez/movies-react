import paises from "./country.json";

export function obtenerBandera(idioma) {
    const pais = paises.find(p => p.idioma == idioma);
    return pais ? `https://flagcdn.com/w40/${pais.pais}.png` : "";
}
