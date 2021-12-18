# fran.html
# wget https://fran.si/tiskanje?page=1&IsAdvanced=True&dictionaries=133&Headword=*fri*&UseWhitespaceTokenizer=false&IsCaseSensitive=false&FullContent=True&Citation=True -O fran.html

from bs4 import BeautifulSoup
html = open("fran.html")
parsed_html = BeautifulSoup(html, 'html.parser')

output = dict()

for entry in parsed_html.find_all("div", class_="entry"):
    word = entry.find("span").contents[0]
    output[word] = []
    for explanation in entry.find_all("span", title="Razlaga"):
        razlage = explanation.contents
        for val in razlage:
            output[word].append(val.replace(":", ""))


output_str = str(output).replace("\'", "\"")

with open('friword.json', 'w') as f:
    f.write(output_str)
    f.close()
