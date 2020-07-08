# 标题（Headings）

# Heading level 1 

## Heading level 2	

### Heading level 3

#### Heading level 4		

##### Heading level 5		

###### Heading level 6	

    还可以在文本下方添加任意数量的 == 号来标识一级标题，或者 -- 号来标识二级标题
heading level 1
=============

heading level 2
-----------------------









段落（Paragraphs）
================
    要创建段落，请使用空白行将一行或多行文本进行分隔。

I really like using Markdown.

I think I'll use it to format all of my documents from now on.




换行（Line Breaks）
=
    在一行的末尾添加两个或多个空格，然后按回车键（return），即可创建一个换行（line break）  
This is the first line.    
And this is the second line.   




粗体（Bold）
=
    要加粗文本，请在单词或短语的前后各添加两个星号（asterisks）或下划线（underscores）   

Love  **is**  bold  


斜体（Italic）
=
    要斜体突出单词的中间部分，请在字母前后各添加一个星号，中间不要带空格。  
Love  *is*  bold 



粗体（Bold）和斜体（Italic）
=
    要加粗并用斜体显示单词或短语的中间部分，请在要突出显示的部分前后各添加三个星号，中间不要带空格
Love  ***is***  bold





块引用（Blockquotes）
=
    要创建块引用，请在段落前添加一个 > 符号
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
> 



嵌套块引用（Nested Blockquotes）
=
    块引用可以嵌套。在要嵌套的段落前添加一个 >> 符号
> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
>> 







带有其它元素的块引用（Blockquotes with Other Elements）
=
    块引用可以包含其他 Markdown 格式的元素。并非所有元素都可以使用

> ### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.
> 


有序列表（Ordered Lists）
=
要创建有序列表，请在每个列表项前添加数字并紧跟一个英文句点

1. First item
2. Second item
3. Third item
4. Fourth item  


    数字不必按数学顺序排列，但是列表应当以数字 起始。

1. First item
23. Second item
6. Third item
89. Fourth item  


无序列表（Unordered Lists）
=
   要创建无序列表，请在每个列表项前面添加破折号 (-)、星号 (*) 或加号 (+) 。
- First item
- Second item
- Third item
- Fourth item  

    ***或***
* First item
* Second item
* Third item
* Fourth item  

    ***或***
+ First item
* Second item
- Third item
+ Fourth item


    缩进一个或多个列表项可创建嵌套列表。

- First item
- Second item
- Third item
	- Indented item
	- Indented item
- Fourth item


代码
=
	要将单词或短语表示为代码，请将其包裹在反引号 (`) 中。
At the command prompt, type `nano`.

转义反引号
-
	如果你要表示为代码的单词或短语中包含一个或多个反引号，则可以通过将单词或短语包裹在双反引号(``)中。
``Use `code` in your Markdown file.``



代码块（Code Blocks）
=
	要创建代码块，请将代码块的每一行缩进至少四个空格或一个制表符。 

> <hr>


    <html>
      <head>
      </head>
    </html>




分隔线（Horizontal Rules）
=
    要创建分隔线，请在单独一行上使用三个或多个星号 (***)、破折号 (---) 或下划线 (___) ，并且不能包含其他内容。
*******
________
--------



Links
=
> 要创建一个超链接 语法格式为: `[连接名](链接地址)`

***比如***  
	我是李晨泽, 这是我的个人站点 [leechense](https://www.leechenze.com)


Adding Titles
-
	您可以选择为链接添加标题。当用户将鼠标悬停在链接上时，这将显示为工具提示。要添加标题，请将其放在URL后面的括号中。  

我的个人站点是:
[leechense](https://www.leechenze.com "这是我的个人站点").


URLs and Email Addresses
=
	要快速将URL或电子邮件地址转换为链接，请将其括在尖括号中。

***URL***   
<https://www.leechenze.com>   
***邮箱地址***   
<leeczyc@gmail.com>   



Formatting Links
-
    I love supporting the **[EFF](https://eff.org)**.  
    This is the *[Markdown Guide](https://www.markdownguide.org)*.  
    See the section on [`code`](#code).  


I love supporting the **[EFF](https://eff.org)**.  

This is the *[Markdown Guide](https://www.markdownguide.org)*.  

See the section on [`code`](#code).  






图片
=
	要添加图像，请添加感叹号（!），然后在括号中添加替代文本，并在括号中添加图像资源的路径或URL。您可以选择在括号中的URL之后添加标题。
	

![Philadelphia's Magic Gardens. This place was so cool!](https://avatars1.githubusercontent.com/u/63046958?s=400&u=b1f72d5a1605d9620ec2fbc4ccf4920504b65849&v=4 "光音科学院")   



***

***

# Linking Images



[![alt说明](图片地址 "title说明")](链接地址)

[![光音科学院](https://avatars1.githubusercontent.com/u/63046958?s=400&u=b1f72d5a1605d9620ec2fbc4ccf4920504b65849&v=4 "光音科学院")](https://www.leechenze.com)



***


# 表格
	要添加表，请使用三个或多个连字符（---）创建每列的标题，并使用管道（|）分隔每列。您可以选择在表的任一端添加管道  


| Syntax      | Description |
|-------------|-------------|
| Header      | Title       |
| Paragraph   | Text        |


## 表格对准

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |



# 格式化JSON;
```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```


# 语法高亮

	```后面指定一种语言即可实现语法高亮;  

# 脚注


```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```






# 定义清单
	创建定义列表，请在第一行上键入术语。在下一行，键入一个冒号，后跟一个空格和定义  

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.









# 删除线  

~~The world is flat.~~ We now know that the world is round.





# 复选框
- [x] Write the press release
- [x] Update the website
- [x] Contact the media




# Emoji 
	
	
Gone camping! :tent: Be back soon.

That is so funny! :😊




# 自动网址链接
	即使您没有使用方括号，您的Markdown处理器也会自动将其转换为链接

http://www.leechenze.com   




# 禁用自动URL链接
	如果您不希望自动链接URL，则可以通过将URL表示为带反引号的代码来删除该链接

`http://www.example.com`
















