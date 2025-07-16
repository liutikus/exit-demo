export const formatPrice = (price : number) =>{
   const formatPrice =  new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}).format(price)
return formatPrice
}