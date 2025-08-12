const SELLER_PHONE = "919036966656";

document.getElementById('buyBtn').addEventListener('click', ()=>{
  document.getElementById('orderForm').classList.remove('hidden');
});

document.getElementById('cancelBtn').addEventListener('click', ()=>{
  document.getElementById('orderForm').classList.add('hidden');
});

document.getElementById('frmOrder').addEventListener('submit', function(e){
  e.preventDefault();
  const data = new FormData(e.target);
  const name = data.get('name').trim();
  const phone = data.get('phone').trim();
  const address = data.get('address').trim();
  const quantity = data.get('quantity');
  const unitPrice = 1399;
  const total = unitPrice * Number(quantity);

  let message = `ORDER: Mini Sharpy%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AAddress: ${encodeURIComponent(address)}%0AQuantity: ${quantity}%0ATotal: ₹${total}`;
  window.open(`https://wa.me/${SELLER_PHONE}?text=${message}`, '_blank');
});
