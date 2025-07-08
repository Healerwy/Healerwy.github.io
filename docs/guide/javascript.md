# JavaScript知识

## js高级
  ### 一、基础总结深入
  #### 1、数据类型
  1. 基本数据类型：number、string、boolean、null、undefined、symbol、bigint
  3. 引用数据类型：object、array、function
  #### 2、数据、变量、内存
  #### 3、对象
  #### 4、函数
  #### 5、回调函数
  #### 6、IIFEL立即执行函数
  1. 作用：隐藏实现，不会污染全局命名空间，用它来编码js模块
  ```
    (function(){
      var a = 1
      console.log(a)
    })()
  ```
  #### 7、函数中的this
  1. this是什么：所有函数内部都有一个变量this，它的值是调用函数的当前对象
  2. 如何确定this的值：
     - test()：this指向window
     - obj.test()：this指向obj
     - new test()：this指向新创建的对象
     - test.call(obj)：this指向obj
  ### 二、函数高级
  #### 1、原型与原型链
1. 函数的prototype属性
  - 每个函数都有一个prototype属性，它默认指向一个Object空对象（原型对象）
  - 原型对象中有一个属性constructor，它指向函数对象
2. 显式原型和隐式原型
  - 每个函数function都有一个prototype，即显式原型（属性）
  - 每个实例对象都有一个__proto__，可称为隐式原型（属性）
  - 对象的隐式原型的值为其对应构造函数的显式原型的值
  - 总结：
    - 函数的prototype属性：在定义函数时自动添加的，默认值是一个空Object对象
    - 对象的__proto__属性：创建对象时自动添加的，默认值为构造函数的prototype属性值
    - 程序员能直接操作显式原型，但不能直接操作隐式原型（ES6之前）
3. 原型链
  - 访问一个对象的属性时，先在自身属性中查找，找到返回
  - 没有找到，再沿着__proto__这条链向上查找，找到返回
  - 如果最终没找到，返回undefined
  - 别名：隐式原型链
  - 作用：查找对象的属性（方法）
  - 补充知识点：
      - 函数的显示原型指向的对象默认是空的Object实例对象（但Object函数不满足）
      - 所有函数都是Function的实例（包括Function，Function是其自身的实例）
      - Object的原型对象是原型链的尽头:Object.prototype.__ proto __ === null
4. 原型链——属性问题
  - 读取对象的属性值时：会自动到原型链中查找
  - 设置对象的属性值时：不会查找原型链，如果当前对象中没有此属性，则直接添加此属性并设置其值
  - 方法一般定义在原型中，属性一般通过构造函数定义在对象本身上
5. 探索instanceof
  - instanceof是如何判断的？
    - 表达式：A instanceof B
    - 如果B函数的显式原型对象在A对象的原型链上，返回true，否则返回false
  - Function是通过new自己产生的实例
  - Object是通过new Function产生的实例
  #### 2、执行上下文与执行上下文栈
  1. 变量提升与函数提升
  - 变量声明提升：通过var定义（声明）的变量，在定义语句之前就可以访问到，值为undefined
  - 函数声明提升：通过function声明的函数，在之前就可以直接调用，值为函数体
  2. 执行上下文
  - 全局执行上下文：在执行全局代码前将window确定为全局执行上下文
  - 对全局数据进行预处理
    - var定义的全局变量：undefined，添加为window属性
    - function声明的全局函数：赋值（fun），添加为window的方法
    - this：赋值（window）
  - 开始执行全局代码  
  3. 函数执行上下文
  - 在调用函数，准备执行函数体之前，创建对应的函数执行上下文(虚拟的，存在于栈中)
  - 对局部数据进行预处理
    - 形参变量：赋值（实参），添加为执行上下文的属性
    - arguments：赋值（实参列表），添加为执行上下文的属性
    - var定义的局部变量：undefined，添加为执行上下文的属性
    - 函数声明：赋值（fun），添加为执行上下文的方法
    - var定义的局部变量：undefined，添加为执行上下文的属性
    - function声明的函数：赋值（fun），添加为执行上下文的方法
    - this：赋值（调用函数的对象）
  - 开始执行函数体代码
 4. 执行上下文栈
  - 在全局代码执行前，JS引擎就会创建一个栈来存储管理所有的执行上下文对象
  - 在全局执行上下文（window）确定后，将其添加到栈中（压栈）
  - 在函数执行上下文创建后，将其添加到栈中（压栈）
  - 在当前函数执行完后，将栈顶的对象移除（出栈）
  - 当所有的代码执行完毕后，栈中只剩下window
-
  #### 3、作用域与作用域链
  1. 作用域与执行上下文的区别
    - 全局作用域之外，每个函数都会创建自己的作用域，作用域在函数定义时就已经确定了。而不是在函数调用时
    - 全局执行上下文环境是在全局代码执行前创建，而执行上下文环境是在函数执行时创建
    - 函数执行上下文环境是在调用函数时，函数体代码执行之前创建
  #### 4、闭包
  1. 闭包理解
  - 如何产生闭包？
    - 当一个嵌套的内部（子）函数引用了嵌套的外部（父）函数的变量(函数)时，就产生了闭包
  - 闭包是什么？
    - 理解一：闭包是嵌套的内部函数（绝大部分人）
    - 理解二：包含被引用变量（函数）的对象（极少数人）
  - 产生闭包的条件？
    - 函数嵌套
    - 内部函数引用了外部函数的数据（变量/函数）
```
  function fn1(){
      var a = 2;
      var b = 'abc';
      function fn2(){ //执行函数定义就会产生闭包（不用调用内部函数）
          console.log(a);
      }
  }
  fn1();
```
  2. 常见的闭包
  - 将函数作为另一个函数的返回值
```
function fn1() {
    var a = 2
    function fn2() {
        a++
        console.log(a)
    }
    return fn2
}
var f = fn1()
f() // 3
f() // 4
```
  - 将函数作为实参传递给另一个函数调用
```
  function showDelay(msg,time){
      setTimeout(function(){
          console.log(msg);
      },time);
  }
  showDelay('hello world',2000);
```
  3. 闭包的作用
  - 使用函数内部的变量在函数执行完后，仍然存活在内存中（延长了局部变量的生命周期）
  - 让函数外部可以操作（读写）到函数内部的局部变量（变量私有化）
  - 问题：
   - 函数执行完后，函数内部声明的局部变量是否还存在？答：一般是不存在，存在于闭包中的变量才可能存在
   - 在函数外部能直接访问函数内部的局部变量吗？答：不能，但我们可以通过闭包让外部操作它
  4. 闭包的生命周期
  - 产生：在嵌套内部函数定义执行完时就产生了（不是在调用时）
  - 死亡：在嵌套的内部函数成为垃圾对象时
```
  function fn1() {
      //此时闭包就已经产生了（函数提升，内部函数对象已经创建了）
      var a = 2
      function fn2() {
          a++
          console.log(a)
      }
      return fn2
  }
  var f = fn1()
  f() //3
  f() //4
  f = null //闭包死亡（包含闭包的函数对象成为垃圾对象）
```
  5. 闭包的应用
   - 定义JS模块
     - 具有特定功能的js文件
     - 将所有的数据和功能都封装在一个函数内部（私有的）
     - 只向外暴露一个包含n个方法的对象或函数
     - 模块的使用者，只需要通过模块暴露的对象调用方法来实现对应的功能
  6. 闭包的缺点及解决
   - 缺点：函数执行完后，函数内的局部变量没有释放，占用内存时间会变长，容易造成内存泄漏
   - 解决：及时释放，将不需要的变量置为null
   - 内存溢出：
      - 一种程序运行出现的错误
      - 当程序运行需要的内存超过了剩余的内存时，就会发生内存溢出
   - 内存泄漏
      - 占用的内存没有及时释放
      - 内存泄漏积累多了就容易导致内存溢出
      - 常见的内存泄漏：
        - 意外的全局变量
        - 没有被清理的计时器或回调函数
        - 闭包
  ### 三、面向对象高级
  1. 对象创建模式
   - 方式一：Object构造函数模式
      - 套路：先创建空Object对象，再动态添加属性/方法
      - 适用场景：起始时不确定对象内部数据
      - 问题：语句太多
```
var p = new Object()
p.name = "John"
p.age = 30
p.setName = function(name) {
    this.name = name
}
```
   - 方式二：对象字面量{}
      - 套路：使用{}创建对象，同时指定属性/方法
      - 适用场景：起始时对象内部数据是确定的
      - 问题：如果创建多个对象，会有重复代码
```
  var p ={
      name:"p",
      age:12,
      setName:function(name){
          this.name=name;
      }
  }
  p.setName("p2");
```
   - 方式三：工厂模式
      - 套路：通过工厂函数动态创建对象并返回
      - 适用场景：需要创建多个对象
      - 对象没有一个具体的类型，都是Object类型
```
  function createPerson(name, age) {
      var obj = {
          name: name,
          age: age,
          setName:function (name) {
              this.name = name;
          }
      }
      return obj;
  }
  var p1 = createPerson('张三', 20);
  var p2 = createPerson('李四', 30);
```
  - 方式四：自定义构造函数模式
      - 套路：自定义构造函数，通过new创建对象实例
      - 适用场景：需要创建多个类型确定的对象
      - 问题：每个对象都有相同的数据（方法），浪费内存
```
  function Person(name,age){
      this.name=name;
      this.age=age;
      this.setName=function(name){
          this.name=name;
      }
  }
  var p1=new Person("张三",18);
  p1.setName("李四");
  console.log(p1 instanceof Person);//true

  function Student(name,price){
      this.name=name;
      this.price=price;
  }
  var s = new Student("张三",1000);
  console.log(s instanceof Student);//true
```
  - 方式五：构造函数+原型的组合模式
      - 套路：自定义构造函数，属性定义在构造函数中，方法定义在原型对象中
      - 适用场景：需要创建多个类型确定的对象
```
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.setName = function(name) {
    this.name = name;
}
var p1 = new Person("张三",18);
var p2 = new Person("李四",20);
```
  2. 继承模式
    - 方式一：原型链继承
      - 定义父类型构造函数，给父类型的原型添加方法。定义子类型的构造函数，创建父类型的对象赋值给子类型的原型。将子类型原型的构造属性设置为子类型，给子类型原型添加方法。创建子类型的对象：可以调用父类型的方法。（关键：子类型的原型为父类型的一个实例对象）
```
function Supper(){
    this.supProp = 'Supper property'
}
Supper.prototype.showSubpperProp = function(){
    console.log(this.supProp)
}
//子类型
function Sub(){
    this.subProp = 'Sub property'
}
Sub.prototype = new Supper()
Sub.prototype.showSubProp = function(){
    console.log(this.subProp)
}
var sub = new Sub()
sub.showSubpperProp()
```
    - 方式二：借用构造函数继承
    - 方式三：组合继承

  ### 四、线程机制与事件机制
  1. 进程与线程
  2. 浏览器内核
  3. 定时器
    - 定时器真是定时执行的吗？
      - 定时器并不能保证真正定时执行
      - 一般会延迟一丁点（可以接受），也有可能延迟很长时间（不能接受）
    - 定时器回调函数是在分线程执行的吗？
      - 在主线程执行的，js是单线程的
    - 定时器是如何实现的？
      - 事件循环模型
  4. js是单线程的
    - 如何证明js执行时单线程的？
      - setTimeout()的回调函数是在主线程执行的
      - 定时器回调函数只有在运行栈中的代码执行完毕后才有可能执行
    - 为什么js要用单线程模式，而不用多线程模式？
      - JavaScript的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定JavaScript同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？
  5. 事件循环模型
  6. Web Workers测试
  7. Web Workers应用

## 常见问题
### 一、使用 const 定义函数和直接用 function 声明有什么区别？

1. 作用域提升
- function声明： 函数声明是 **会被提升（hoisted）** 的。这意味着你可以在声明函数之前调用它，编译器会在执行代码之前把函数声明移动到作用域的顶部。
- const声明：使用const或者let声明的函数不会提升。实际上，这种函数声明会被视为变量声明，而变量声明只会被“声明”提升，但赋值部分并不会提升。因此，在赋值完成之前使用这个函数会导致ReferenceError。
2. 是否可以重新赋值
- function声明： 使用function声明的函数可以在同一作用域内被重新定义。虽然这种做法并不常见，但在一些特定情况下可能发生。
- const声明： 使用const声明的函数是不可重新赋值的。你不能再次给它赋值，否则会引发TypeError
3. 箭头函数 vs 传统函数
- 箭头函数的this绑定： 箭头函数中的this是词法绑定的，意思是this取决于函数定义时所在的上下文环境，而不是调用时。
4. 代码风格和意图
- function声明： 函数声明通常用于定义独立的函数逻辑。它清晰地表明这是一个函数，而不是变量赋值的结果。
- const声明： 使用const声明函数通常表明这是一个不能重新赋值的函数表达式，在某些情况下，这可以防止意外重写变量。此外，const还能更明确地告诉读者这个函数不会被重新赋值，从而提高代码的可读性和安全性。

### 二、说说你对高阶函数的理解

高阶函数是指满足以下任意一个条件的函数：
- 能接收函数作为参数：可以把其他函数当作参数传递给它。
- 能够返回函数：函数的返回值可以是另一个函数。

JavaScript 的数组原型上有很多实用的高阶函数，例如：map、filter、reduce、sort 等。这些函数都接收一个函数作为参数，并返回一个新数组。

您可以通过左侧边栏导航浏览不同章节的内容，或使用右上角的搜索框查找特定主题。

### 三、JS中本地对象、内置对象、宿主对象分别是什么，有什么区别？
1. 本地对象：Object、Function、Boolean、Symbol、Array、Map、Set、WeakMap、WeakSet、Error、TypeError、SyntaxError
2. 内置对象：除了本地对象之外，JavaScript 还有一些内置对象，它们是全局对象的一部分，但不是本地对象。这些对象包括：parseInt()、eval()、isNaN()、Infinity、NaN、undefined、Math、JSON、Reflect、Intl
3. 宿主对象：宿主对象是由运行环境提供的对象，例如浏览器中的window对象、Node.js中的global对象。这些对象提供了与运行环境交互的接口，例如访问DOM、执行网络请求等。

### 四、 get 请求的参数是否能够使用数组？

在 HTTP 的 GET 请求中，参数可以使用数组形式。GET 请求的参数通常通过 URL 的查询字符串（Query String）传递，格式为 ?key=value&key=value。这种情况下，同一个参数名重复出现时，大多数后端框架会自动将其解析为数组。

### 五、 数组里面有10万个数据，取第一个元素和第10万个元素的时间相差多少？

在 JavaScript 中，数组是基于连续内存空间实现的动态数据结构，其索引访问的时间复杂度为 O(1)。因此，理论上访问第一个元素和第 10 万个元素的时间是相同的。组的每个元素在内存中是连续存储的，元素地址可通过公式计算：address = base_address + index * element_size

### 六、 JavaScript 对象的底层数据结构是什么？

### 七、 JavaScript 中的变量在内存中的具体存储形式是什么？

### 八、 一直在 window 上面挂内容（数据，方法等等），是否有什么风险？
1. 命名空间污染与全局变量冲突：在全局作用域中定义过多的变量和函数会导致命名空间污染，可能会与其他库或框架的变量或函数发生冲突。
2. 内存泄漏：在全局作用域中定义过多的变量和函数可能会导致内存泄漏。例如，如果全局变量引用了不再需要的对象，垃圾回收器将无法回收这些对象，导致内存泄漏。内存占用持续增长，导致页面卡顿甚至崩溃。
3. 安全漏洞
- 内存占用持续增长，导致页面卡顿甚至崩溃。
- 原型链污染：恶意代码可能修改 window 的原型（如window.Object.prototype），影响所有对象。

### 九、 普通函数动态参数 和 箭头函数的动态参数有什么区别？
在 JavaScript 中，普通函数和箭头函数处理动态参数（不定数量的参数）的方式存在显著差异，主要体现在 arguments 对象、剩余参数语法和上下文绑定上。以下是具体对比：
1. arguments 对象的差异
- 普通函数：拥有内置的 arguments 对象，它是一个类数组对象，包含了函数调用时传递的所有参数。
```
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(sum(1, 2, 3)); // 输出 6
```
- 箭头函数：没有自己的 arguments 对象，它会捕获外层函数的 arguments（如果存在）。
```
const sum = () => {
    // 尝试访问 arguments 会报错或引用外层作用域的 arguments
    console.log(arguments); // 报错：ReferenceError (如果没有外层函数)
};
sum(1, 2, 3);
```
2. 剩余参数语法的差异
- 普通函数：可以使用剩余参数语法（...args）来收集所有参数到一个数组中。
```
function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3)); // 输出 6
```
- 箭头函数：同样支持剩余参数语法，且是推荐的动态参数处理方式。 ...args 可以获取所有参数，args 是一个真正的数组，可以直接使用数组的方法。
```
const sum = (...args) => {
  return args.reduce((acc, val) => acc + val, 0);
};
console.log(sum(1, 2, 3)); // 输出 6
```
3. 上下文（this）绑定的差异
- 普通函数：在普通函数中，this 是在调用时动态绑定的，取决于函数的调用方式。arguments 对象与当前函数的上下文（this）绑定。
```
function MyClass() {
    this.value = 10;
    setTimeout(function() {
        console.log(this.arguments); // 指向 setTimeout 的参数
        console.log(this.value); // 输出 undefined（this 指向全局对象或 undefined）
    }, 100);
}
```
- 箭头函数：箭头函数的 this 是在定义时绑定的，它不会根据调用上下文改变。没有自己的 this，arguments 会继承外层函数的上下文。
```
function MyClass() {
  this.value = 10;
  setTimeout(() => {
    console.log(this.value); // 输出 10（继承 MyClass 的 this）
  }, 100);
}
```