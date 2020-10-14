import { leerTeclado } from '../vistas/entradaTeclado'

export const menu = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Triángulo')
    console.log('2.- Cuadrado')
    console.log('3.- Círculo')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('Elija una opción: ') )
    return n
}