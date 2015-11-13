import urllib
def read_text():
    quotes = open(r"C:\Users\Doug\Desktop\quotes.txt")
    contents_of_file = quotes.read()
    #print(contents_of_file)
    quotes.close()
    check_profanity(contents_of_file)

def check_profanity(text_to_check):

    connection = urllib.request.urlopen("http://www.wdyl.com/profanity?q="+text_to_check)
    output = connection.read()
    #print (output)
    connection.close()
    if "true" in output:
        print("Language, child!")
    elif "false" in output:
        print("Safe for now, buster")
    else:
        print("Could not scan properly")
        
read_text()
