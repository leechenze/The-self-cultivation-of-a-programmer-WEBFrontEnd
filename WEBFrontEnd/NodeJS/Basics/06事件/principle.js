let fs = require('fs');
// 创建事件对象;
var leeEvent = {
    // 将fileSuccess事件的所以函数添加到的(event)队列中 fileSuccess是一个数组, 数组每一位是一个函数;
    // 事件执行队列;
    event: {
        // fileSuccess: [fn,fn,fn],
    },
    // 事件监听方法;
    on: function (eventName, eventFn) {
        // 仔细读代码;
        // 如果fileSuccess 这个事件有的话直接将事件函数追加到队列中 fileSuccess: [fn,fn,fn];
        if(this.event[eventName]) {
            this.event[eventName].push(eventFn);
        }else{  // 如果没有这个事件置为空数组, 然后将事件函数追加到队列中;
            this.event[eventName] = [];
            this.event[eventName].push(eventFn);
        }
    },
    // 事件触发方法;
    emit: function (eventName, eventMsg) {
        // 判断触发的事件存在否, 如果存在就进行循环调用这个事件队列中的每一个方法;
        if(this.event[eventName]) {
            this.event[eventName].forEach((itemFn, ind) => {
                itemFn(eventMsg);
            })
        }   
    }
}



fs.readFile('./hello.txt', {flag: 'r', encoding: 'utf-8'}, function (err, data) {
    if(err){
        throw Error(err);
    }else{
        // 1.查看数据库所有的用户信息;
        // 2.统计年龄比例;
        // 3.查看所有用户学校的详细信息;
        // 以上的这些操作, 如果很多用户时, 将要写很多代码, 所以如果通过事件实现将不需要这些代码, 只需调用触发事件即可实现这些操作;

        console.log(data);
        leeEvent.emit('fileSuccess', data);
    }
})




leeEvent.on('fileSuccess', function (eventMsg) {
    console.log('1.查看数据库所有的用户信息;')
})
leeEvent.on('fileSuccess', function (eventMsg) {
    console.log('2.统计年龄比例;')
})
leeEvent.on('fileSuccess', function (eventMsg) {
    console.log('3.查看所有用户学校的详细信息;')
})

