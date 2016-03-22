var elements = document.getElementsByTagName('*')

for (var i = 0; i < elements.length; i++) {
    var element = elements[i]

    for (var i = 0; i < element.childNodes.length; i++) {
        var node = element.childNodes[i]

        if (node.nodeType === 3) {
            var text = node.nodeValue
            var replacedText = text.replace('dog', 'cat')

            var replacedTextUpper = text.replace('Dog', 'Cat')
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node)
            }
             if (replacedTextUpper !== text) {
                element.replaceChild(document.createTextNode(replacedTextUpper), node)
            }


               var replacedTextQuotes = text.replace('"Dog"', '"Cat"')
            if (replacedTextQuotes !== text) {
                element.replaceChild(document.createTextNode(replacedTextQuotes), node)
            }
        }
    }
}