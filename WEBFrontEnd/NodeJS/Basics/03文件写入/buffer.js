// buffer: 数组的数据的二进制的存储, 效率很高,速度很快;
    // 1.数组不能进行二进制数据的操作;
    // 2.js数组不像java, python等语言效率高, js为了弥补这个缺点, 能够对二进制进行快速的数据操作, 提升数组性能, 就有了buffer;
    // buffer绘制啊内存空间开辟出固定大小的内存; 


// var str = 'helloworld';
// // 把helloworld存放到buffer中;
// var buf = Buffer.from(str);
// console.log(buf);
// // buf会将str以十六进制显示, 是因为二进制太长了;
// // 输出buffer内容;
// console.log(buf.toString());





// 开辟buffer(缓存区), 之前版本是new Buffer();实例一个buffer, 现在已经废弃掉了, 使用Buffer.alloc(size);
// 开辟一个buffer长度为20的buffer(缓冲区), 也可以说是(20个字节), 其实就是buf数组长度为20;
let buf = Buffer.alloc(20);
// 现在buffer就是一个数组, 所以: 可以操作每一位:
// buf[0] = 10;
// buf[1] = 15;
// console.log(buf);
// 输出结果为:<Buffer 0a 0f 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
// 因为是十六进制, 所以10 == 0a, 15 == 0f, 16 == 10;

// buf[0] = 255;
// console.log(buf);
// // 输出为ff; 色码#ffffff转换就是(255,255,255); 其实255 == ff; 相对十六进制来说;
// buf[0] = 256;
// console.log(buf);
// // 输出为100, 但是显示00, 原因在于十六进制最多显示两位, 所以看不到1, 只能看到00;
// buf[0] = 356;
// console.log(buf);
// // 输出为ff;



let buf = Buffer.allocUnsafe(20);
// Unsafe意在创建一个不会置空的buffer, 会遗留之前程序的内容, 所以不太安全, 但是不用每一位索引都置空, 所以会比alloc效率快一点;
