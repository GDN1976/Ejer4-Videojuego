// Clase base Personaje
class Personaje {
    nombre: string;
    nivel: number;
    puntosDeVida: number;
    ataques: string[];

    constructor(nombre: string, nivel: number = 1, puntosDeVida: number = 100) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
        this.ataques = [];
    }

    atacar(): void {
        console.log(`${this.nombre} está atacando`);
    }

    defender(): void {
        console.log(`${this.nombre} está defendiendo`);
    }

    aprenderAtaque(nuevoAtaque: string): void {
        this.ataques.push(nuevoAtaque);
        console.log(`${this.nombre} ha aprendido un nuevo ataque: ${nuevoAtaque}`);
    }
}

// Exportar la clase Personaje para usar en otros archivos
export default Personaje;
