import requests
import re 
from bs4 import BeautifulSoup
import time
import random
import parsel
# url="https://www.3gbizhi.com/tag/meinv/12.html"
url="https://m.desk.3gbizhi.com/tag/xinggan/9.html"
# count=0
user_agent = [
   "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Mobile Safari/537.36"
    
]
time.sleep(1) 
headers={
    "user-agent":random.choice(user_agent),
    # "Cookie":"Hm_lvt_c8263f264e5db13b29b03baeb1840f60=1673697236; Hm_lpvt_c8263f264e5db13b29b03baeb1840f60=1673698660"
    "Cookie":"Hm_lvt_c8263f264e5db13b29b03baeb1840f60=1673697236,1673872645; __bid_n=185ba96351948a22344207; Hm_lvt_b1b08cc989f34ad5a977d00bf4c96a5a=1673874861,1673874947; Hm_lvt_b613fefe48f185c50061027380cdab23=1673874962; FPTOKEN=gyZ1Uj3ql9n9laY2K8jAMONAXYahvzd2v3sqS39ytOc0eCDJ3p5f/CT3hhIC21dbzYpaqOcXAnSsTeU5xQ/rswmuS+GgxEg5Nu+EirNET61jcOk66BmbKcKlgHntO/Rn2Ycultc8V1jUPHU8YnlgzYyj/WkD/jaNuCvVOhMsRAdY31wCOIcDlsh4kC6+oryU1NF6fSKvti85PnteDwvZ7rn9ixuhawDWzNwd5QtSRwpSB6ULAR93B5Ocw9JC1+OGx6tlDqXlaFAy8TYLdVKvBQEZCZoEm8HXQ7iD3h3TPUIR5+6vobme0kt005n9djVJWnZNSZKLou4REPFR+oM6meC7KmoadSVXoH9wsqTGlAAXkCMypMBW3Sky+SRRrEvMnJkEyLswAh2F9vv9CeuJ3Q==|UW6/2VkCJ8nJDFLM5Z6BqsW5+2Pmf7ZTyKuy0B0vSBg=|10|836fb5164c9fb42ce190643e92734b7e; Hm_lpvt_b613fefe48f185c50061027380cdab23=1673874996; Hm_lpvt_b1b08cc989f34ad5a977d00bf4c96a5a=1673875117",
    # "referer":"https://www.3gbizhi.com/"
    "referer":"https://m.desk.3gbizhi.com/tag/xinggan/"
}
res=requests.get(url,headers=headers)
html=res.text


# print(html)
url=re.findall('<img lazysrc="(.*?)"',html)
# print(url)
title=re.findall('title="(.*?)"></a></li>',html)
# print(title)
co=zip(title,url)
for title,url in co:
    res=requests.get(url,headers=headers)
    res.close()
    img=res.content
        # count+=1
    time.sleep(random.randint(1,6))
    with open (f'imag/{title}.jpg','wb') as f:
        f.write(img)

# print(html)