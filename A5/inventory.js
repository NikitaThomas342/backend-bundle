var fs = require('fs');

/// สร้างตัวแปรเก็บ stock สินค้า
var stock = new Map();

loadStock = () => {
    fs.readFile('stock.dat', function (err, filedata) {
        if(err) throw err;

        let stock_data = filedata.toString();
        let stock_lines = stock_data.split('\n');

        stock_lines.forEach((line) => {
            let dat = line.split(' ');
            stock.set(dat[0], parseInt(dat[1]));
        })

        // โหลดเสร็จแล้ว แสดงผ่าน console ว่า stock มีอะไรบ้าง
        stock.forEach((value, key) => {
            console.log('We have ' + value + ' ' + key + '(s).');
        })
    });
};

saveStock = () => {
    let buffer = '';
    stock.forEach((value, key) => {
        if(key)
            buffer += key + " " + value + '\n';
    });
    fs.writeFile('stock.dat', buffer, function(err) {
        if(err) throw err;
    });
}

fill = (item, quantity) => {
    // return ว่าของหลังจากเติมแล้วมีเท่าไหร่
    if(stock.has(item)){
        stock.set(item,stock.get(item) + quantity)
        return `Filled ${stock.get(item)} items`
    }else{
        stock.set(item,quantity)
        return `Filled ${quantity} items`
    }
}

sell = (item, quantity) => {
    // return ว่าหลังจากขายแล้วของเหลือกี่ชิ้น
    if(stock.has(item)){
        stock.set(item,stock.get(item) - quantity)
        return `Sold ${stock.get(item)} items`
    }else{
        return 'Invalid Item'
    }
}

check = (item) => {
    // return ของนั้นมีกี่ชิ้น
    if(stock.has(item)){
        return stock.get(item)
    }else{
        return 'Invalid Item'
    }
}

clear = (item) => {
    // return เคลียร์ออกไปกี่ชิ้น
    if(stock.has(item)){
        let stock_old = stock.get(item)
        stock.set(item,0)
        return `Cleared ${stock_old} items`
    }else{
        return 'Invalid Item'
    }
}

remove = (item) => {
    // return ก่อนหน้าที่จะลบออกมีกี่ชิ้น
    if(stock.has(item)){
        let stock_old = stock.get(item)
        stock.delete(item,0)
        return `Deleted ${stock_old} items`
    }else{
        return 'Invalid Item'
    }
}

module.exports = {
    loadStock: loadStock,
    saveStock: saveStock,
    fill: fill,
    sell: sell,
    check: check,
    clear: clear,
    remove: remove
};