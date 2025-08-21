# node知识

## node基础模块
 
 ### 1. fs模块（文件系统）

1. 文件操作
- 读取文件
    - fs.readFile(path, [options], callback)：异步读取文件内容
    ```javascript
        const fs = require('fs');
        const path = require('path');

        // 定义文件路径（使用 path.join 处理路径，跨平台兼容）
        const filePath = path.join(__dirname, 'example.txt');

        // 异步读取文件
        fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // 错误处理（如文件不存在、权限不足等）
            console.error('读取失败:', err.message);
            return;
        }
        // 读取成功，打印文件内容
        console.log('文件内容:\n', data);
        });
    ```
    - fs.readFileSync(path, [options])：同步读取文件内容
    - fs.createReadStream(path, [options])：创建文件读取流（适合大文件）
- 写入文件
    - fs.writeFile(path, data, [options], callback)：异步写入内容（覆盖原文件）
    - fs.writeFileSync(path, data, [options])：同步写入文件内容
    - fs.createWriteStream(path, [options])：创建文件写入流（适合大文件）
    - fs.appendFile(file, data, [options], callback)：异步追加内容到文件
- 其他文件操作
    - fs.unlink(path, callback)：异步删除文件
    - fs.unlinkSync(path)：同步删除文件
    - fs.copyFile(src, dest, [mode], callback)：复制文件
    - fs.rename(oldPath, newPath, callback)：重命名 / 移动文件
2. 目录操作
- fs.mkdir(path, [options], callback)：创建目录（recursive: true 可创建多级目录）
- fs.readdir(path, [options], callback)：读取目录内容（返回文件 / 子目录列表）
- fs.rmdir(path, [options], callback)：删除目录（recursive: true 可删除非空目录）
- fs.access(path, [mode], callback)：检查文件 / 目录是否存在或可访问

3. 文件信息
- fs.stat(path, callback) / fs.statSync(path)：获取文件 / 目录的详细信息（大小、创建时间等）
- fs.existsSync(path)：检查路径是否存在（同步，推荐用 fs.access 替代）
 ### 2. path模块（路径处理）
1. 路径拼接与解析
    - path.join([...paths])：拼接多个路径片段，自动处理分隔符（推荐）
    ```javaScript
        path.join('/a', 'b', 'c'); // 输出 '/a/b/c'
    ```
    - path.resolve([...paths])：将路径解析为绝对路径（从当前工作目录出发）
    ```javaScript
        path.resolve('file.txt'); // 输出 '/当前目录/file.txt'
    ```
2. 路径分解
    - path.basename(path, [ext])：获取路径中的文件名（可去除扩展名）
    ```javaScript
        path.basename('/a/b/c.txt'); // 输出 'c.txt'
        path.basename('/a/b/c.txt', '.txt'); // 输出 'c'
    ```
    - path.dirname(path)：获取路径中的目录部分
    ```javaScript
        path.dirname('/a/b/c.txt'); // 输出 '/a/b'
    ```
    - path.extname(path)：获取文件扩展名
    ```javaScript
        path.extname('file.txt'); // 输出 '.txt'
    ```
3. 路径规范化
    - path.normalize(path)：规范化路径（处理 ..、. 等相对路径）
    ```javaScript
        path.normalize('/a/b/c/../d'); // 输出 '/a/b/d'
    ```
4. 操作系统相关
- path.sep：当前系统的路径分隔符（Windows 为 \，Linux 为 /）
- path.delimiter：环境变量分隔符（Windows 为 ;，Linux 为 :）
 ### 3. http模块