<?php

    // echo "hello world";

    # 连接数据库
    $conn = mysqli_connect('localhost', 'root', '', 'ajaxtest');

    if (isset($_GET['name'])){
        echo "GET: 名字   ". $_GET['name'];
    } else if (isset($_POST['name'])){
        echo "POST: 名字   ". $_POST['name'];
        # 将拿到的数据转化
        $name = mysqli_real_escape_string($conn, $_POST['name']);

        $query = "INSERT INTO users(name) VALUES('$name')";
        mysqli_query($conn, "set name utf8");
        if(mysqli_query($conn, $query)){
            echo '用户添加成功';
        } else {
            echo '用户添加失败'.mysqli_error($conn);
        }
    } else {
        $query = "SELECT * FROM users";
        $result = mysqli_query($conn, $query);
        $users = mysqli_fetch_all($result, MYSQLI_ASSOC);
    
        echo json_encode($users);
    }

    
    
?>