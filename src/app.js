document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, name: 'Robusta Brazil', img: '1.jpg', price: 20000 },
            { id: 2, name: 'Arabica blend', img: '2.jpg', price: 25000 },
            { id: 3, name: 'Liberica', img: '3.jpg', price: 30000 },
            { id: 4, name: 'Excelsa', img: '4.jpg', price: 35000 }
        ]
    }));

    Alpine.store('cart', {
        items:[],
        total:0,
        quantity:0,
        add(newItem) {
            //is there identical items?
            const cartItem = this.items.find((item) => item.id === newItem.id);

            //if there aren't or the cart is empty
            if(!cartItem) {
                this.items.push({...newItem, quantity:1, total: newItem.price});
                this.quantity++;
                this.total += newItem.price;
            } else {
                //if item exist,check if the item is identical or different from the item in the cart
                this.items = this.items.map((item) => {
                    //if item is different
                    if(item.id !== newItem.id) {
                        return item;
                    } else {
                        //if identical item exist,add quantity and total
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                })
            }
        },
        remove(id) {
            //take item based on the id
            const cartItem = this.items.find((item) => item.id === id);

            //if item quantity is more than one
            if(cartItem.quantity > 1) {
                //search 1 by 1
                this.items = this.items.map((item) => {
                    //if not the clicked item
                    if(item.id !== id) {
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                })
            } else if (cartItem.quantity === 1) {
                this.items =this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total-=cartItem.price;
            }
        } 
    })
});

//covert to rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style:'currency',
        currency:'IDR',
        minimumFractionDigits: 0,
    }).format(number);
};