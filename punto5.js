/*PROBLEMA: Watto paga a su personal de ventas un salario de
3500000 mensuales, más una comisión de 1500000 por cada
licencia de software vendida menos el 5 % de deducciones por
impuestos.Codifica un programa que calcule e imprima el
salario mensual de un vendedor dado.
*******************************************************************************/

//FUNCION TRADICIONAL
let saldo = 3500000;
let comision = 1500000;
let deduccion = 0.05;
let licencia = 5;

function SalarioTotal (){

     let saldot = (licencia *comision)*deduccion
     let deduc = (licencia *comision)-saldot
     let neto = deduc+saldo
     return neto

}
let neto= SalarioTotal();
console.log(`su salario mensual es de: ` + neto)


//Function CON FLECHA
let SalarioTotal2 = () => (((licencia * comision) - (licencia * comision) * deduccion) + saldo)
let neto2 = SalarioTotal2();
console.log(`su salario mensual es de: ` + neto2) 
