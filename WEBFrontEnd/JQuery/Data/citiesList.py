#!/usr/bin/python
# -*- coding: utf-8 -*-
import json, urllib
from urllib import urlencode
 
#----------------------------------
# 邮编查询调用示例代码 － 州讯互联
# 在线接口文档：http://www.zhouxunwang.cn/api_a.php?id=104
#----------------------------------
 
def main():
 
    #配置您申请的APPKey
    appkey = "*********************"
 
    #2.省份城市区域列表
    request2(appkey,"GET")

 
#省份城市区域列表
def request2(appkey, m="GET"):
    url = "http://zhouxunwang.cn/data/?id=104"
    params = {
        "key" : appkey, #应用APPKEY(应用详细页查询)
        "ske" : "", #ske必须为1
 
    }
    params = urlencode(params)
    if m =="GET":
        f = urllib.urlopen("%s?%s" % (url, params))
    else:
        f = urllib.urlopen(url, params)
 
    content = f.read()
    res = json.loads(content)
    if res:
        error_code = res["error_code"]
        if error_code == 0:
            #成功请求
            print res["result"]
        else:
            print "%s:%s" % (res["error_code"],res["reason"])
    else:
        print "request api error"
 

 
 
 
if __name__ == '__main__':
    main()