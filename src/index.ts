import { menu } from '../vistas/menuPral'
import { leerTeclado } from '../vistas/entradaTeclado'
const main = async () => {
    let num: number
    do {
        num = await menu()
        switch(num){
            case 1:

                console.log('Área y perímetro de un triángulo')
                let basetri, alturatri, ladotri1, ladotri2: number
                alturatri =  parseInt( await leerTeclado('Introduzca la altura'))
                basetri =  parseInt( await leerTeclado('Introduzca la base'))
                ladotri1 =  parseInt( await leerTeclado('Introduzca un lado del triángulo'))
                ladotri2 =  parseInt( await leerTeclado('Introduzca otro lado del triángulo'))
                let areatri=areatriangulo(basetri,alturatri)
                let perimetrotri=perimetrotriangulo(basetri,ladotri1,ladotri2)
                console.log("Área del triángulo="+areatri)
                console.log("Perímetro del triángulo="+perimetrotri)
                break
            case 2:

                console.log('Área y perímetro de un cuadrado')
                let ladocuad:number
                ladocuad = parseInt(await leerTeclado('Introduzca el lado'))
                let areacuad=areacuadrado(ladocuad)
                let perimetrocuad=perimetrocuadrado(ladocuad)
                console.log("Perímetro del cuadrado="+perimetrocuad)
                console.log("Área del cuadrado="+areacuad)
                break
            case 3:

                console.log('Área y perímetro de un círculo')
                let radiocirc:number
                radiocirc = parseInt(await leerTeclado('Introduzca el radio'))
                let areacirc=areacirculo(radiocirc)
                let perimetrocirc=perimetrocirculo(radiocirc)
                console.log("Área del círculo="+areacirc)
                console.log("Perímetro del círculo="+perimetrocirc)
                break
            case 0:

                console.log('\nGracias por usar nuestro programa')
                break
            default:
                console.log("ERROR: Número incorrecto")
                break
        }
    }while (num != 0)
}

const areatriangulo = (base:number, altura:number) => {
    let res=0
    res=(base*altura)/2
    return res
}

const perimetrotriangulo = (l1:number, l2:number, l3:number) => {
    let res=0;
    res=l1+l2+l3
    return res
}

const areacuadrado = (lado:number) => {
    let res=0
    res=lado*lado
    return res
}

const perimetrocuadrado = (lado:number) => {
    let res=0
    res=lado*4
    return res
}

const areacirculo = (radio:number) => {
    let res=0
    res=(radio*radio)*Math.PI
    return res
}

const perimetrocirculo = (radio:number) => {
    let res=0
    res=2*radio*Math.PI
    return res
}
main()