const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];


function calcularPrecioConDescuento(precio,descuento){
    const procentajePrecioConDescuento = 100-descuento;
    const precioConDescuento = (precio*procentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");   //obtenemos elemento con etiqueta
    const priceValue = inputPrice.value;                        // obtenemos valor
    const InputCoupon = document.getElementById("InputCoupon"); // obtenemos elemento con etiqueta
    const CouponValue = InputCoupon.value;                      // obtenemos valor

    const isCouponValueValid = function (coupon) {
        return coupon.name === CouponValue;                     // comparamos si este elemento se encuentra en el array
    };
    
    const userCoupon = coupons.find(isCouponValueValid);        // aplica para cada elemento
    
    if (!userCoupon) {                                          // en caso de que no se encuentre el descuento avisar    
        alert("El cupón " + CouponValue + " no es válido");
    } else {
        const descuento = userCoupon.discount;                  // en caso contrario obtenemos el descuento
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento); //aplicamos funcion para aplicar descuento
    
        const resultP = document.getElementById("ResultP");     // Se obtiene valor de resultado
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento; //se muestra resultado final
    }
}

