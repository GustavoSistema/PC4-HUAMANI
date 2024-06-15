var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Entrenadores y sus Pokémones',
        entrenadores: [
            { nombre: 'Ash', pokemons: ['Pikachu', 'Charizard', 'Bulbasaur', 'Squirtle', 'Snorlax'] },
            { nombre: 'Misty', pokemons: ['Starmie', 'Psyduck', 'Gyarados', 'Togepi', 'Poliwhirl'] },
            { nombre: 'Brock', pokemons: ['Onix', 'Geodude', 'Vulpix', 'Zubat', 'Kabutops'] },
            { nombre: 'Gary', pokemons: ['Blastoise', 'Arcanine', 'Nidoking', 'Electivire', 'Umbreon'] },
            { nombre: 'May', pokemons: ['Blaziken', 'Beautifly', 'Skitty', 'Venusaur', 'Glaceon'] },
            { nombre: 'Dawn', pokemons: ['Piplup', 'Pachirisu', 'Buneary', 'Mamoswine', 'Togekiss'] },
            { nombre: 'Serena', pokemons: ['Delphox', 'Pangoro', 'Sylveon', 'Braixen', 'Jigglypuff'] },
            { nombre: 'Iris', pokemons: ['Haxorus', 'Excadrill', 'Emolga', 'Dragonite', 'Axew'] },
            { nombre: 'Cilan', pokemons: ['Pansage', 'Crustle', 'Stunfisk', 'Lilligant', 'Maractus'] },
            { nombre: 'Clemont', pokemons: ['Chespin', 'Luxray', 'Heliolisk', 'Bunnelby', 'Magnemite'] },
            { nombre: 'Bonnie', pokemons: ['Dedenne', 'Tyrantrum', 'Goomy', 'Lapras', 'Flabébé'] },
            { nombre: 'Lillie', pokemons: ['Alolan Vulpix', 'Clefairy', 'Meltan', 'Shiinotic', 'Magearna'] },
            { nombre: 'Kiawe', pokemons: ['Turtonator', 'Marowak', 'Charizard', 'Alolan Dugtrio', 'Talonflame'] },
            { nombre: 'Lana', pokemons: ['Primarina', 'Araquanid', 'Lanturn', 'Cloyster', 'Chinchou'] }
        ],
        entrenadorSeleccionado: null,
        entrenador1: null,
        entrenador2: null,
        combateConfirmado: false, // Nueva propiedad para controlar si se ha confirmado el combate
    },
    computed: {
        isEntrenadorSelected() {
            return (entrenador) => {
                return this.entrenador1 === entrenador || this.entrenador2 === entrenador;
            };
        }
    },
    methods: {
        mostrarPokemons(entrenador) {
            this.entrenadorSeleccionado = entrenador;
        },
        seleccionarEntrenador(entrenador) {
            if (!this.entrenador1) {
                this.entrenador1 = entrenador;
            } else if (!this.entrenador2 && this.entrenador1 !== entrenador) {
                this.entrenador2 = entrenador;
            } else if (this.entrenador1 === entrenador) {
                this.entrenador1 = null;
            } else if (this.entrenador2 === entrenador) {
                this.entrenador2 = null;
            }
        },
        nuevoCombate() {
            if (this.entrenador1 && this.entrenador2) {
                console.log(`Se realizará un nuevo combate entre ${this.entrenador1.nombre} VS ${this.entrenador2.nombre}`);
                alert(`Se realizará un nuevo combate entre ${this.entrenador1.nombre} VS ${this.entrenador2.nombre}`);
                this.combateConfirmado = true; // Establecer que el combate está confirmado
                this.entrenador1 = null;
                this.entrenador2 = null;
            }
        },
        getNombreEntrenador(numero) {
            if (numero === 1 && this.entrenador1) {
                return this.entrenador1.nombre;
            } else if (numero === 2 && this.entrenador2) {
                return this.entrenador2.nombre;
            } else {
                return 'Selecciona un entrenador';
            }
        }
    }
});
